'use client';

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import { type PinData, createPins, updatePinVisibility, pinCategories, resetPins } from '../components/map/PinsSebaran';
import { Controls, calculateZoomTransform, calculatePathBounds } from '../components/map/ZoomControls';
import { Sidebar } from './MapSidebar';

import { KecamatanDetail, hideKecamatanInfo } from '../components/map/KecamatanDetails';
import { FilterPanel } from '../components/map/FilterSebaran';
import { InfoPanel } from '../components/map/InfoSebaran';

import { Kecamatan } from '@/data/kecamatan';
import { dataSebaran } from '@/data/sebaran';

interface KecamatanData {
    name: string;
    path: string;
    center: [number, number];
    defaultColor?: string;
    area: string | number;
    population: string | number;
}

export function Map() {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
    const [selectedKecamatan, setSelectedKecamatan] = useState<KecamatanData | null>(null);

    // Pin related states
    const [pins, setPins] = useState<PinData[]>(dataSebaran);
    const [activePinFilters, setActivePinFilters] = useState<Set<string>>(new Set(['all']));
    const [selectedPin, setSelectedPin] = useState<PinData | null>(null);
    const [showPins, setShowPins] = useState(true);

    // Check if we're in the browser environment
    const [isBrowser, setIsBrowser] = useState(false);

    const mapInstanceRef = useRef({
        svg: null as d3.Selection<SVGSVGElement, unknown, null, undefined> | null,
        g: null as d3.Selection<SVGGElement, unknown, null, undefined> | null,
        zoom: null as d3.ZoomBehavior<Element, unknown> | null,
        paths: null as d3.Selection<d3.BaseType, KecamatanData, SVGGElement, unknown> | null,
        mapBounds: { minX: 0, maxX: 0, minY: 0, maxY: 0 }
    });

    // Check if Kecamatan data is available
    const [kecamatanData, setKecamatanData] = useState<KecamatanData[]>([]);
    const [mapError, setMapError] = useState<string | null>(null);

    // Add this useEffect to check if we're in browser
    useEffect(() => {
        setIsBrowser(true);
    }, []);

    useEffect(() => {
        if (!Kecamatan || Kecamatan.length === 0) {
            setMapError("Kecamatan data is not available");
            console.error("Kecamatan data is not available or empty");
            return;
        }
        setKecamatanData(Kecamatan);
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

    const handleSelectKecamatan = (kecamatan: KecamatanData) => {
        if (!mapInstanceRef.current.svg || !mapInstanceRef.current.paths) return;

        mapInstanceRef.current.paths
            .transition()
            .duration(300)
            .style("fill", d => d.defaultColor || "white");

        const selectedPath = mapInstanceRef.current.paths.filter(d => d.name === kecamatan.name);
        if (selectedPath.size() > 0) {
            selectedPath
                .transition()
                .duration(300)
                .style("fill", "#CCEEDB");

            setSelectedKecamatan(kecamatan);
            setSelectedPin(null);
            zoomToKecamatan(kecamatan);
        }
    };

    const zoomToKecamatan = (kecamatan: KecamatanData) => {
        const { svg, zoom } = mapInstanceRef.current;
        if (!svg || !zoom || !containerRef.current) return;

        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        if (!kecamatan || !kecamatan.path) {
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
            .style("fill", d => (d as any).defaultColor || "white");

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

    // Modified function to handle pin selection
    const handlePinSelect = (pin: PinData) => {
        setSelectedPin(pin);
        // Close sidebar when a pin is selected
        setIsSidebarOpen(false);
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
        // Don't run on server side
        if (!isBrowser || !kecamatanData.length || mapError) return;

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

                        // 🔥 Tambahan ini agar pin ikut membesar/menciut
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

                const clicked = (event: any, d: KecamatanData) => {
                    event.stopPropagation();

                    g.selectAll("path")
                        .transition()
                        .duration(300)
                        .style("fill", (kec: any) => kec.defaultColor || "white");

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

                const paths = g.selectAll<SVGPathElement, KecamatanData>("path")
                    .data(kecamatanData)
                    .enter()
                    .append("path")
                    .attr("d", d => d.path)
                    .attr("fill", d => d.defaultColor || "#5b9bd5")
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

                mapInstanceRef.current.paths = paths as unknown as d3.Selection<d3.BaseType, KecamatanData, SVGGElement, unknown>;

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
                    .text(d => d.name);

                // Create pins using the imported function, but pass the modified handler
                createPins(
                    svg,
                    g,
                    pins,
                    activePinFilters,
                    showPins,
                    containerRef,
                    handlePinSelect, // Use the new handler that also closes sidebar
                    zoom
                );

                const initialTransform = calculateZoomTransform(
                    containerWidth,
                    containerHeight,
                    { minX, maxX, minY, maxY }
                );

                initialTransform.x += 230;
                initialTransform.y -= 150;

                svg.call(zoom.transform, initialTransform);

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
    }, [kecamatanData, isBrowser]);

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
                                    pinCategories={pinCategories}
                                />

                                {selectedKecamatan && (
                                    <InfoPanel
                                        pin={selectedKecamatan}
                                        onClose={() => setSelectedKecamatan(null)}
                                        pinCategories={pinCategories}
                                    />
                                )}

                                {!selectedKecamatan && selectedPin && (
                                    <KecamatanDetail
                                        containerWidth={containerDimensions.width}
                                        containerHeight={containerDimensions.height}
                                        kecamatan={selectedPin}
                                        svg={mapInstanceRef.current.svg}
                                    />
                                )}

                            </>
                        )}

                        {isBrowser && mapInstanceRef.current.svg && mapInstanceRef.current.zoom && (
                            <Controls
                                svg={mapInstanceRef.current.svg}
                                zoom={mapInstanceRef.current.zoom}
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