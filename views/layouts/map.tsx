import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import { Controls, calculateZoomTransform, calculatePathBounds } from '../components/control';
import { KecamatanDetail, hideKecamatanInfo } from '../components/detail';
import { Kecamatan } from '../data/kecamatan';
import { Sidebar } from './sidebar';

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

    useEffect(() => {
        // Check data availability
        if (!Kecamatan || Kecamatan.length === 0) {
            setMapError("Kecamatan data is not available");
            console.error("Kecamatan data is not available or empty");
            return;
        }
        setKecamatanData(Kecamatan);
    }, []);

    // Update container dimensions when sidebar state changes
    useEffect(() => {
        if (containerRef.current) {
            // Short delay to allow the DOM to update
            const timer = setTimeout(() => {
                setContainerDimensions({
                    width: containerRef.current!.clientWidth,
                    height: containerRef.current!.clientHeight
                });
            }, 300); // Match the transition duration

            return () => clearTimeout(timer);
        }
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSelectKecamatan = (kecamatan: KecamatanData) => {
        if (!mapInstanceRef.current.svg || !mapInstanceRef.current.paths) return;

        // Reset all paths to default color
        mapInstanceRef.current.paths
            .transition()
            .duration(300)
            .style("fill", d => d.defaultColor || "#5b9bd5");

        // Find and highlight the selected kecamatan
        const selectedPath = mapInstanceRef.current.paths.filter(d => d.name === kecamatan.name);
        if (selectedPath.size() > 0) {
            selectedPath
                .transition()
                .duration(300)
                .style("fill", "#ec4899");

            // Update the selected kecamatan state
            setSelectedKecamatan(kecamatan);

            // Zoom to the selected kecamatan
            zoomToKecamatan(kecamatan);
        }
    };

    const zoomToKecamatan = (kecamatan: KecamatanData) => {
        const { svg, zoom } = mapInstanceRef.current;
        if (!svg || !zoom || !containerRef.current) return;

        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        // Ensure kecamatan has the required properties
        if (!kecamatan || !kecamatan.path) {
            console.error('Invalid kecamatan data for zoom:', kecamatan);
            return;
        }

        // Calculate path bounds using the utility function
        const bounds = calculatePathBounds(kecamatan.path, kecamatan.center);

        // Validate bounds before using
        if (!bounds || typeof bounds !== 'object' ||
            isNaN(bounds.minX) || isNaN(bounds.maxX) ||
            isNaN(bounds.minY) || isNaN(bounds.maxY)) {
            console.error('Invalid bounds for zoom:', bounds);
            return;
        }

        // Calculate transform using the utility function
        const transform = calculateZoomTransform(
            containerWidth,
            containerHeight,
            bounds
        );

        // Validate transform before applying
        if (!transform || isNaN(transform.x) || isNaN(transform.y) || isNaN(transform.k)) {
            console.error('Invalid transform:', transform);
            return;
        }

        // Apply the transform with a transition
        svg.transition()
            .duration(750)
            .call(zoom.transform, transform);
    };

    const resetView = () => {
        const { svg, zoom, g, mapBounds } = mapInstanceRef.current;
        if (!svg || !zoom || !containerRef.current) return;

        // Reset all path colors
        g!.selectAll("path")
            .transition()
            .duration(300)
            .style("fill", d => (d as any).defaultColor || "#5b9bd5");

        // Clear the selected kecamatan
        setSelectedKecamatan(null);

        // Hide info panel using the utility function from detail.tsx
        hideKecamatanInfo(svg);

        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        // Create a proper initial transform
        const initialTransform = calculateZoomTransform(
            containerWidth,
            containerHeight,
            mapBounds
        );

        // Apply the transform with a transition
        svg.transition()
            .duration(750)
            .call(zoom.transform, initialTransform);
    };

    // Update SVG dimensions when container dimensions change
    useEffect(() => {
        if (mapInstanceRef.current.svg && containerDimensions.width && containerDimensions.height) {
            mapInstanceRef.current.svg
                .attr("width", containerDimensions.width)
                .attr("height", containerDimensions.height)
                .attr("viewBox", [0, 0, containerDimensions.width, containerDimensions.height]);
        }
    }, [containerDimensions]);

    useEffect(() => {
        if (!kecamatanData.length || mapError) return;

        const createMap = () => {
            try {
                if (!containerRef.current || !svgRef.current) {
                    console.error("SVG reference is not ready");
                    return;
                }

                // Get container dimensions
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

                // Calculate map bounds from kecamatan data
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

                // Store map bounds in ref
                mapInstanceRef.current.mapBounds = { minX, maxX, minY, maxY };

                // Improved zoom definition
                const zoom = d3.zoom<SVGSVGElement, unknown>()
                    .scaleExtent([0.5, 8]) // Allow zooming out a bit more
                    .extent([[0, 0], [containerWidth, containerHeight]])
                    .on("zoom", (event) => {
                        g.attr("transform", event.transform);
                        // Update stroke width based on zoom level
                        g.selectAll("path").attr("stroke-width", 1 / event.transform.k);
                        // Also scale the text labels 
                        g.selectAll("text").attr("font-size", `${10 / event.transform.k}px`);
                    });

                mapInstanceRef.current.zoom = zoom;

                // Apply zoom behavior to the SVG
                svg.call(zoom)
                    .call(zoom.translateTo, (minX + maxX) / 2, (minY + maxY) / 2)
                    .on("dblclick.zoom", null); // Disable default double-click zoom

                // Use dblclick for reset
                svg.on("dblclick", resetView);

                // Add grid pattern
                const defs = svg.append("defs");

                // Create grid pattern
                const pattern = defs.append("pattern")
                    .attr("id", "grid-pattern")
                    .attr("width", 20)  // Grid size
                    .attr("height", 20)
                    .attr("patternUnits", "userSpaceOnUse");

                // Add background for pattern (base color)
                pattern.append("rect")
                    .attr("width", 20)
                    .attr("height", 20)
                    .attr("fill", "#f9fafb");

                // Add lines to create grid
                pattern.append("path")
                    .attr("d", "M 20 0 L 0 0 0 20")
                    .attr("fill", "none")
                    .attr("stroke", "#e5e7eb")  // Grid line color
                    .attr("stroke-width", 1);

                svg.select("rect")  // Select existing background rect
                    .attr("fill", "url(#grid-pattern)");

                const clicked = (event: any, d: KecamatanData) => {
                    event.stopPropagation();

                    // Reset all colors
                    g.selectAll("path")
                        .transition()
                        .duration(300)
                        .style("fill", (kec: any) => kec.defaultColor || "#5b9bd5");

                    // Highlight clicked kecamatan
                    d3.select(event.currentTarget)
                        .transition()
                        .duration(300)
                        .style("fill", "#ec4899");

                    // Set the selected kecamatan
                    setSelectedKecamatan(d);

                    // Calculate path bounds
                    const bounds = calculatePathBounds(d.path, d.center);

                    // Calculate transform
                    const transform = calculateZoomTransform(
                        containerWidth,
                        containerHeight,
                        bounds
                    );

                    // Apply the transform with a transition
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
                    .attr("stroke", "white")
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

                paths.append("title")
                    .text(d => d.name);

                g.selectAll("text")
                    .data(kecamatanData)
                    .enter()
                    .append("text")
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

                // Create a proper initial transform
                const initialTransform = calculateZoomTransform(
                    containerWidth,
                    containerHeight,
                    { minX, maxX, minY, maxY }
                );

                initialTransform.x += 175;
                initialTransform.y -= 175;

                // Apply the modified transform
                svg.call(zoom.transform, initialTransform);

            } catch (error: any) {
                console.error("Error creating map:", error);
                setMapError(`Error creating map: ${error.message}`);
            }
        };

        // Initial creation after DOM is ready
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
    }, [kecamatanData]);

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

                        {/* KecamatanDetail component */}
                        {mapInstanceRef.current.svg && (
                            <KecamatanDetail
                                containerWidth={containerDimensions.width}
                                containerHeight={containerDimensions.height}
                                kecamatan={selectedKecamatan}
                                svg={mapInstanceRef.current.svg}
                            />
                        )}

                        {mapInstanceRef.current.svg && mapInstanceRef.current.zoom && (
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