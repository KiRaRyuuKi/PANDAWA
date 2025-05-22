'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import { type PinData, createPins, updatePinVisibility, pinCategories, resetPins } from '../components/map/PinsSebaran';
import { Controls, calculateZoomTransform, calculatePathBounds } from '../components/map/ZoomControls';
import { Sidebar } from './MapSidebar';

import { KecamatanDetail, hideKecamatanInfo } from '../components/map/KecamatanDetails';
import { FilterPanel } from '../components/map/FilterSebaran';
import { InfoPanel } from '../components/map/InfoSebaran';

import { dataKomoditas } from '@/data/komoditas';
import { dataKecamatan, type Kecamatan, type DataKecamatan } from '@/data/kecamatan';

// Enhanced pin data structure with all necessary fields
export interface EnhancedPinData extends PinData {
    nama_panen: string;
    position: [number, number];
    kecamatan?: string;
    category: string;
    luas_panen?: string;
    produksi?: string;
    produktivitas?: string;
}

// Interface untuk data dari API Prisma
interface ApiKecamatanData {
    id_kecamatan: number;
    nama_kecamatan: string;
    nama_komoditas?: string;
    deskripsi?: string;
    gambar?: string | null;
    area?: string | number;
    path: string;
    center: [number, number];
    default_color: string;
    jumlah_penduduk?: number;
    laju_pertumbuhan?: string;
}

interface ApiKomoditasData {
    nama_panen: string;
    nama_komoditas: string;
    nama_kecamatan: string;
    luas_panen?: number;
    produksi?: number;
    produktivitas?: number;
}

// Type untuk detail kecamatan yang diperlukan komponen
interface KecamatanDetailData {
    nama_kecamatan: string;
    title: string;
    luas_panen: string;
    produksi: string;
    produktivitas: string;
}

export function Map() {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
    const [selectedKecamatan, setSelectedKecamatan] = useState<ApiKecamatanData | null>(null);

    const [komoditasData, setKomoditasData] = useState<EnhancedPinData[]>([]);

    // Pin related states
    const [pins, setPins] = useState<PinData[]>(dataKomoditas);
    const [activePinFilters, setActivePinFilters] = useState<Set<string>>(new Set(['all']));
    const [selectedPin, setSelectedPin] = useState<EnhancedPinData | null>(null);
    const [showPins, setShowPins] = useState(true);

    // Check if we're in the browser environment
    const [isBrowser, setIsBrowser] = useState(false);

    const mapInstanceRef = useRef({
        svg: null as d3.Selection<SVGSVGElement, unknown, null, undefined> | null,
        g: null as d3.Selection<SVGGElement, unknown, null, undefined> | null,
        zoom: null as d3.ZoomBehavior<SVGSVGElement, unknown> | null,
        paths: null as d3.Selection<d3.BaseType, ApiKecamatanData, SVGGElement, unknown> | null,
        mapBounds: { minX: 0, maxX: 0, minY: 0, maxY: 0 }
    });

    // Check if Kecamatan data is available
    const [kecamatanData, setKecamatanData] = useState<ApiKecamatanData[]>([]);
    const [isLoadingKecamatan, setIsLoadingKecamatan] = useState(true);
    const [isLoadingKomoditas, setIsLoadingKomoditas] = useState(true);

    const [mapError, setMapError] = useState<string | null>(null);

    // Add this useEffect to check if we're in browser
    useEffect(() => {
        setIsBrowser(true);
    }, []);

    // Fetch kecamatan data with improved error handling
    useEffect(() => {
        async function fetchAndMergeKecamatan() {
            setIsLoadingKecamatan(true);
            try {
                const res = await fetch('/api/kecamatan');

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const apiDataKecamatan: ApiKecamatanData[] = await res.json();
                console.log('API Data Kecamatan:', apiDataKecamatan);

                const merged: ApiKecamatanData[] = dataKecamatan.map(kecamatan => {
                    const found = apiDataKecamatan.find((item) => item.id_kecamatan === kecamatan.id_kecamatan);

                    return {
                        ...kecamatan,
                        nama_kecamatan: found?.nama_kecamatan || kecamatan.nama_kecamatan || `Kecamatan ${kecamatan.id_kecamatan}`,
                        deskripsi: found?.deskripsi || "",
                        gambar: found?.gambar || null,
                        area: found?.area || "",
                        jumlah_penduduk: found?.jumlah_penduduk || 0,
                        laju_pertumbuhan: found?.laju_pertumbuhan || "",
                    };
                });

                setKecamatanData(merged);
                console.log('Merged kecamatan data:', merged);
            } catch (err) {
                console.error('Gagal mengambil data kecamatan:', err);
                // Fallback ke data static dengan informasi minimal
                const fallback: ApiKecamatanData[] = dataKecamatan.map(kecamatan => ({
                    ...kecamatan,
                    nama_kecamatan: kecamatan.nama_kecamatan || `Kecamatan ${kecamatan.id_kecamatan}`,
                    deskripsi: "",
                    gambar: null,
                    area: "",
                    jumlah_penduduk: 0,
                    laju_pertumbuhan: ""
                }));
                setKecamatanData(fallback);

                // Don't set error state here, just log it
                console.warn('Using fallback kecamatan data due to API error');
            } finally {
                setIsLoadingKecamatan(false);
            }
        }

        fetchAndMergeKecamatan();
    }, []);

    // Fetch komoditas data with improved error handling
    useEffect(() => {
        async function fetchKomoditasData() {
            setIsLoadingKomoditas(true);
            try {
                const res = await fetch('/api/komoditas');

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const hasilPanen: ApiKomoditasData[] = await res.json();
                console.log('API Data Komoditas:', hasilPanen);

                // Convert dataKomoditas to accurate EnhancedPinData objects
                const enhanced: EnhancedPinData[] = dataKomoditas.map((pin) => {
                    // Find the matching data from API
                    const match = hasilPanen.find((data) => {
                        // Try multiple matching strategies
                        return (
                            data.nama_panen === pin.nama_panen ||
                            // Match by komoditas nama_kecamatan and potential kecamatan reference
                            (data.nama_komoditas?.toLowerCase().includes(pin.category.toLowerCase()) &&
                                pin.nama_panen?.includes(data.nama_kecamatan?.toLowerCase().replace(/\s+/g, '-')))
                        );
                    });

                    if (match) {
                        console.log("Found matching data for pin:", pin.nama_panen, match);
                        return {
                            // Include all required PinData properties
                            id_panen: pin.id_panen,
                            nama_panen: pin.nama_panen,
                            title: match.nama_komoditas || pin.title || pin.category,
                            position: pin.position,
                            category: pin.category,
                            // Additional EnhancedPinData properties
                            nama_kecamatan: match.nama_komoditas,
                            luas_panen: match.luas_panen?.toString() || "0",
                            produksi: match.produksi?.toString() || "0",
                            produktivitas: match.produktivitas?.toString() || "0",
                        };
                    } else {
                        // Fallback data with clear indication it's not found
                        console.warn(`No data found for pin: ${pin.nama_panen}`);
                        return {
                            // Include all required PinData properties
                            id_panen: pin.id_panen,
                            nama_panen: pin.nama_panen,
                            title: pin.title || `${pin.category} (Data tidak tersedia)`,
                            position: pin.position,
                            category: pin.category,
                            // Additional EnhancedPinData properties
                            nama_kecamatan: pin.category,
                            luas_panen: "0",
                            produksi: "0",
                            produktivitas: "0",
                        };
                    }
                });

                setKomoditasData(enhanced);
                console.log("Enhanced komoditas data:", enhanced);
            } catch (err) {
                console.error("Gagal mengambil data komoditas:", err);
                // Set fallback data with clear indication it's fallback
                const fallback: EnhancedPinData[] = dataKomoditas.map(pin => ({
                    ...pin,
                    nama_kecamatan: pin.category,
                    luas_panen: "0",
                    produksi: "0",
                    produktivitas: "0",
                }));
                setKomoditasData(fallback);
                console.warn('Using fallback komoditas data due to API error');
            } finally {
                setIsLoadingKomoditas(false);
            }
        }

        fetchKomoditasData();
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const timer = setTimeout(() => {
                setContainerDimensions({
                    width: containerRef.current!.clientWidth,
                    height: containerRef.current!.clientHeight
                });
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isSidebarOpen]);

    // New effect to close pin info panel when sidebar opens
    useEffect(() => {
        if (isSidebarOpen) {
            setSelectedPin(null);
        }
    }, [isSidebarOpen]);

    const togglePinFilter = (categoryId: string) => {
        const newFilters = new Set(activePinFilters);

        if (categoryId === 'all') {
            if (newFilters.has('all')) {
                newFilters.clear();
            } else {
                newFilters.clear();
                newFilters.add('all');
            }
        } else {
            newFilters.delete('all');
            if (newFilters.has(categoryId)) {
                newFilters.delete(categoryId);
            } else {
                newFilters.add(categoryId);
            }

            if (newFilters.size === 0) {
                newFilters.add('all');
            }
        }

        setActivePinFilters(newFilters);
        updatePinVisibility(mapInstanceRef.current.svg, newFilters, showPins);
    };

    const toggleAllPins = () => {
        const newShowPins = !showPins;
        setShowPins(newShowPins);

        if (mapInstanceRef.current.svg) {
            mapInstanceRef.current.svg.selectAll(".pin-group")
                .style("display", newShowPins ? "block" : "none");
            updatePinVisibility(mapInstanceRef.current.svg, activePinFilters, newShowPins);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Fix: Convert ApiKecamatanData to DataKecamatan format
    const handleSelectKecamatan = (kecamatan: DataKecamatan) => {
        if (!mapInstanceRef.current.svg || !mapInstanceRef.current.paths) return;

        // Find the corresponding ApiKecamatanData
        const apiKecamatan = kecamatanData.find(k => k.id_kecamatan === kecamatan.id_kecamatan);
        if (!apiKecamatan) return;

        mapInstanceRef.current.paths
            .transition()
            .duration(300)
            .style("fill", d => d.default_color || "white");

        const selectedPath = mapInstanceRef.current.paths.filter(d => d.nama_kecamatan === apiKecamatan.nama_kecamatan);
        if (selectedPath.size() > 0) {
            selectedPath
                .transition()
                .duration(300)
                .style("fill", "#CCEEDB");

            setSelectedKecamatan(apiKecamatan);
            setSelectedPin(null);
            zoomToKecamatan(apiKecamatan);
        }
    };

    const zoomToKecamatan = (kecamatan: ApiKecamatanData) => {
        const { svg, zoom } = mapInstanceRef.current;
        if (!svg || !zoom || !containerRef.current) return;

        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        if (!kecamatan?.path) {
            console.error('Invalid kecamatan data for zoom:', kecamatan);
            return;
        }

        const bounds = calculatePathBounds(kecamatan.path, kecamatan.center);

        if (!bounds || typeof bounds !== 'object' ||
            isNaN(bounds.minX) || isNaN(bounds.maxX) ||
            isNaN(bounds.minY) || isNaN(bounds.maxY)) {
            console.error('Invalid bounds for zoom:', bounds);
            return;
        }

        const transform = calculateZoomTransform(
            containerWidth,
            containerHeight,
            bounds
        );

        if (!transform || isNaN(transform.x) || isNaN(transform.y) || isNaN(transform.k)) {
            console.error('Invalid transform:', transform);
            return;
        }

        svg.transition()
            .duration(750)
            .call(zoom.transform, transform);
    };

    const resetView = () => {
        const { svg, zoom, g, mapBounds } = mapInstanceRef.current;
        if (!svg || !zoom || !containerRef.current) return;

        // Reset seleksi
        setSelectedPin(null);
        setSelectedKecamatan(null);

        // Reset warna kecamatan
        g!.selectAll("path")
            .transition()
            .duration(300)
            .style("fill", d => (d as any).default_color || "white");

        resetPins(svg);

        // Update visibilitas pin
        updatePinVisibility(svg, activePinFilters, showPins);

        // Kembalikan zoom ke posisi awal
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const initialTransform = calculateZoomTransform(
            containerWidth,
            containerHeight,
            mapBounds
        );
        svg.transition().call(zoom.transform, initialTransform);
    };

    // Modified function to handle pin selection - Fix parameter type
    const handlePinSelect = (pin: PinData | null) => {
        if (!pin) return;

        console.log("Pin selected:", pin.nama_panen);
        const detail = komoditasData.find((k) => k.nama_panen === pin.nama_panen);
        console.log("Found detail:", detail);

        if (detail) {
            setSelectedPin(detail);
            // Ensure kecamatan is deselected to prevent conflicts
            setSelectedKecamatan(null);
            // Close sidebar when a pin is selected
            setIsSidebarOpen(false);
        } else {
            console.warn(`No matching komoditas data found for pin ${pin.nama_panen}`);
        }
    };

    useEffect(() => {
        if (mapInstanceRef.current.svg && containerDimensions.width && containerDimensions.height) {
            mapInstanceRef.current.svg
                .attr("width", containerDimensions.width)
                .attr("height", containerDimensions.height)
                .attr("viewBox", [0, 0, containerDimensions.width, containerDimensions.height]);
        }
    }, [containerDimensions]);

    useEffect(() => {
        // Don't run on server side or if data is still loading
        if (!isBrowser || !kecamatanData.length || mapError || isLoadingKecamatan) return;

        const createMap = () => {
            try {
                if (!containerRef.current || !svgRef.current) {
                    console.error("SVG reference is not ready");
                    return;
                }

                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;

                if (!containerWidth || !containerHeight) {
                    console.error("Invalid container dimensions:", containerWidth, containerHeight);
                    return;
                }

                setContainerDimensions({ width: containerWidth, height: containerHeight });
                d3.select(svgRef.current).selectAll("*").remove();

                const svg = d3.select(svgRef.current)
                    .attr("viewBox", [0, 0, containerWidth, containerHeight])
                    .attr("width", containerWidth)
                    .attr("height", containerHeight)
                    .style("background", "#f8fafc");

                mapInstanceRef.current.svg = svg as unknown as d3.Selection<SVGSVGElement, unknown, null, undefined>;

                svg.append("rect")
                    .attr("width", containerWidth)
                    .attr("height", containerHeight)
                    .attr("fill", "#f9fafb");

                const g = svg.append("g");
                mapInstanceRef.current.g = g as unknown as d3.Selection<SVGGElement, unknown, null, undefined>;

                let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

                kecamatanData.forEach(kecamatan => {
                    const pathPoints = kecamatan.path.match(/[0-9]+,[0-9]+/g);
                    if (pathPoints) {
                        pathPoints.forEach(point => {
                            const [x, y] = point.split(',').map(Number);
                            minX = Math.min(minX, x);
                            maxX = Math.max(maxX, x);
                            minY = Math.min(minY, y);
                            maxY = Math.max(maxY, y);
                        });
                    }
                });

                const padding = 100;
                minX -= padding;
                minY -= padding;
                maxX += padding;
                maxY += padding;

                mapInstanceRef.current.mapBounds = { minX, maxX, minY, maxY };

                const zoom = d3.zoom<SVGSVGElement, unknown>()
                    .scaleExtent([0.5, 8])
                    .extent([[0, 0], [containerWidth, containerHeight]])
                    .on("zoom", (event) => {
                        g.attr("transform", event.transform);
                        g.selectAll("path").attr("stroke-width", 1 / event.transform.k);
                        g.selectAll("text.kecamatan-label").attr("font-size", `${10 / event.transform.k}px`);

                        // Pin scaling with zoom
                        g.selectAll<SVGGElement, any>(".pin")
                            .attr("transform", function (d) {
                                const [x, y] = d?.position || [0, 0];
                                const scale = 1 / event.transform.k;
                                return `translate(${x}, ${y}) scale(${scale})`;
                            });
                    });

                mapInstanceRef.current.zoom = zoom;

                svg.call(zoom)
                    .call(zoom.translateTo, (minX + maxX) / 2, (minY + maxY) / 2)
                    .on("dblclick.zoom", null);

                svg.on("dblclick", resetView);

                const defs = svg.append("defs");

                const pattern = defs.append("pattern")
                    .attr("id", "grid-pattern")
                    .attr("width", 20)
                    .attr("height", 20)
                    .attr("patternUnits", "userSpaceOnUse");

                pattern.append("rect")
                    .attr("width", 20)
                    .attr("height", 20)
                    .attr("fill", "#f9fafb");

                pattern.append("path")
                    .attr("d", "M 20 0 L 0 0 0 20")
                    .attr("fill", "none")
                    .attr("stroke", "#e5e7eb")
                    .attr("stroke-width", 1);

                svg.select("rect")
                    .attr("fill", "url(#grid-pattern)");

                const clicked = (event: any, d: ApiKecamatanData) => {
                    event.stopPropagation();

                    g.selectAll("path")
                        .transition()
                        .duration(300)
                        .style("fill", (kecamatan: any) => kecamatan.default_color || "white");

                    d3.select(event.currentTarget)
                        .transition()
                        .duration(300)
                        .style("fill", "#606060");

                    setSelectedKecamatan(d);
                    setSelectedPin(null);

                    const bounds = calculatePathBounds(d.path, d.center);

                    const transform = calculateZoomTransform(
                        containerWidth,
                        containerHeight,
                        bounds
                    );

                    svg.transition()
                        .duration(750)
                        .call(zoom.transform, transform);
                };

                const paths = g.selectAll<SVGPathElement, ApiKecamatanData>("path")
                    .data(kecamatanData)
                    .enter()
                    .append("path")
                    .attr("d", d => d.path)
                    .attr("fill", d => d.default_color || "#5b9bd5")
                    .attr("stroke", "#0B3000")
                    .attr("stroke-width", 0.5)
                    .style("cursor", "pointer")
                    .style("transition", "fill 0.3s ease")
                    .on("click", clicked)
                    .on("mouseover", function () {
                        d3.select(this)
                            .transition()
                            .duration(200)
                            .attr("opacity", 0.85);
                    })
                    .on("mouseout", function () {
                        d3.select(this)
                            .transition()
                            .duration(200)
                            .attr("opacity", 1);
                    });

                mapInstanceRef.current.paths = paths as unknown as d3.Selection<d3.BaseType, ApiKecamatanData, SVGGElement, unknown>;

                g.selectAll("text")
                    .data(kecamatanData)
                    .enter()
                    .append("text")
                    .attr("class", "kecamatan-label")
                    .attr("x", d => d.center[0])
                    .attr("y", d => d.center[1])
                    .attr("text-anchor", "middle")
                    .attr("dominant-baseline", "middle")
                    .attr("fill", "white")
                    .attr("font-size", "10px")
                    .attr("font-weight", "bold")
                    .attr("pointer-events", "none")
                    .style("text-shadow", "0px 0px 3px rgba(0,0,0,0.6)")
                    .text(d => d.nama_kecamatan);

                // Create pins using the imported function, but pass the modified handler
                if (containerRef.current) {
                    createPins(
                        svg,
                        g,
                        pins,
                        activePinFilters,
                        showPins,
                        { current: containerRef.current },
                        handlePinSelect,
                        zoom as unknown as d3.ZoomBehavior<Element, unknown>
                    );
                }

                const initialTransform = calculateZoomTransform(
                    containerWidth,
                    containerHeight,
                    { minX, maxX, minY, maxY }
                );

                // Create a new transform object instead of modifying the existing one
                const modifiedTransform = d3.zoomIdentity
                    .translate(initialTransform.x + 230, initialTransform.y - 150)
                    .scale(initialTransform.k);

                svg.call(zoom.transform, modifiedTransform);

            } catch (error: any) {
                console.error("Error creating map:", error);
                setMapError(`Error creating map: ${error.message}`);
            }
        };

        const timer = setTimeout(() => {
            createMap();
        }, 100);

        const handleResize = () => {
            createMap();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [kecamatanData, isBrowser, isLoadingKecamatan]);

    useEffect(() => {
        if (!isBrowser) return;
        updatePinVisibility(mapInstanceRef.current.svg, activePinFilters, showPins);
    }, [activePinFilters, showPins, isBrowser]);

    useEffect(() => {
        if (!isBrowser || !svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.on("click", (event) => {
            // Hanya trigger jika mengklik langsung pada SVG (bukan elemen child)
            if (event.target === svg.node()) {
                setSelectedPin(null);
                setSelectedKecamatan(null);
            }
        });

        return () => {
            svg.on("click", null);
        };
    }, [isBrowser]);

    // Debug logging for selectedPin changes
    useEffect(() => {
        console.log("Selected pin changed:", selectedPin);
    }, [selectedPin]);

    // Show loading state
    if (!isBrowser || isLoadingKecamatan) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Memuat Peta</h2>
                    <p className="text-gray-600">
                        {isLoadingKecamatan && "Mengambil data kecamatan..."}
                        {isLoadingKomoditas && "Mengambil data komoditas..."}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-screen">
            <Sidebar
                onSelectKecamatan={handleSelectKecamatan}
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />

            <div
                ref={containerRef}
                className={`h-full transition-all duration-300`}
            >
                {mapError ? (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h2 className="text-2xl font-bold text-red-600 mb-4">Map Error</h2>
                            <p className="text-gray-700">{mapError}</p>
                            <p className="mt-4 text-gray-600">Check console for more details</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <svg
                            ref={svgRef}
                            className={`w-full h-full`}
                        ></svg>

                        {isBrowser && mapInstanceRef.current.svg && (
                            <>
                                <FilterPanel
                                    activePinFilters={activePinFilters}
                                    togglePinFilter={togglePinFilter}
                                    pinCategories={pinCategories.map(category => ({
                                        id: category.id_panen,
                                        label: category.label,
                                        color: category.color,
                                        icon: category.icon
                                    }))}
                                />

                                {selectedKecamatan && (
                                    <InfoPanel
                                        pin={selectedKecamatan ? {
                                            id_panen: `${selectedKecamatan.id_kecamatan}`,
                                            nama_kecamatan: selectedKecamatan.nama_kecamatan,
                                            nama_panen: selectedKecamatan.nama_komoditas ?? "-",
                                            position: selectedKecamatan.center,
                                            category: selectedKecamatan.nama_komoditas?.toLowerCase() ?? "-",
                                            title: selectedKecamatan.nama_kecamatan,
                                        } : null}
                                        onClose={() => setSelectedKecamatan(null)}
                                        pinCategories={pinCategories.map(category => ({
                                            id: category.id_panen,
                                            label: category.label,
                                            color: category.color,
                                            icon: category.icon
                                        }))}
                                    />
                                )}

                                {!selectedKecamatan && selectedPin && mapInstanceRef.current.svg && (
                                    <KecamatanDetail
                                        containerWidth={containerDimensions.width}
                                        containerHeight={containerDimensions.height}
                                        kecamatan={{
                                            nama_kecamatan: selectedPin.nama_kecamatan ?? "-",
                                            title: selectedPin.title ?? "-",
                                            luas_panen: selectedPin.luas_panen ?? "0",
                                            produksi: selectedPin.produksi ?? "0",
                                            produktivitas: selectedPin.produktivitas ?? "0",
                                        }}
                                        svg={mapInstanceRef.current.svg}
                                    />
                                )}

                            </>
                        )}

                        {isBrowser && mapInstanceRef.current.svg && mapInstanceRef.current.zoom && (
                            <Controls
                                svg={mapInstanceRef.current.svg}
                                zoom={mapInstanceRef.current.zoom as unknown as d3.ZoomBehavior<Element, unknown>}
                                containerWidth={containerDimensions.width}
                                containerHeight={containerDimensions.height}
                                resetView={resetView}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}