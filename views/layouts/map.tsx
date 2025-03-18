import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import { Kecamatan } from './kecamatan';
import { Sidebar } from './sidebar';

export function Map() {
    const svgRef = useRef(null);
    const containerRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const mapInstanceRef = useRef({
        svg: null,
        g: null,
        zoom: null,
        paths: null,
        kecamatanInfo: null,
        kecamatanTitle: null,
        kecamatanPopulation: null,
        kecamatanArea: null,
    });

    // Memeriksa apakah data Kecamatan tersedia
    const [kecamatanData, setKecamatanData] = useState([]);
    const [mapError, setMapError] = useState(null);

    useEffect(() => {
        // Memeriksa ketersediaan data
        if (!Kecamatan || Kecamatan.length === 0) {
            setMapError("Data kecamatan tidak tersedia");
            console.error("Data kecamatan tidak tersedia atau kosong");
            return;
        }
        setKecamatanData(Kecamatan);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSelectKecamatan = (kecamatan) => {
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

            // Update info panel
            updateInfo(kecamatan);

            // Show info panel
            mapInstanceRef.current.kecamatanInfo
                .transition()
                .duration(300)
                .style("opacity", 1);

            // Zoom to the selected kecamatan
            zoomToKecamatan(kecamatan);
        }
    };

    const updateInfo = (kecamatan) => {
        if (!mapInstanceRef.current.kecamatanTitle) return;

        mapInstanceRef.current.kecamatanTitle.text(kecamatan.name);
        mapInstanceRef.current.kecamatanPopulation.text(`Populasi: ${kecamatan.population} jiwa`);
        mapInstanceRef.current.kecamatanArea.text(`Luas: ${kecamatan.area}`);
    };

    const zoomToKecamatan = (kecamatan) => {
        const { svg, zoom, g } = mapInstanceRef.current;
        if (!svg || !zoom || !containerRef.current) return;

        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        const buffer = 80;
        const [cx, cy] = kecamatan.center;

        // Parse the path to find its bounds
        const pathPoints = kecamatan.path.match(/[0-9]+,[0-9]+/g);
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

        if (pathPoints && pathPoints.length > 0) {
            pathPoints.forEach(point => {
                const [x, y] = point.split(',').map(Number);
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            });
        } else {
            // If we can't parse the path, just use the center
            minX = cx - buffer;
            maxX = cx + buffer;
            minY = cy - buffer;
            maxY = cy + buffer;
        }

        // Add buffer area
        minX -= buffer;
        maxX += buffer;
        minY -= buffer;
        maxY += buffer;

        // Calculate the appropriate scale
        const scale = Math.min(8, 0.9 / Math.max((maxX - minX) / containerWidth, (maxY - minY) / containerHeight));

        // Create a new transform
        const transform = d3.zoomIdentity
            .translate(containerWidth / 2, containerHeight / 2)
            .scale(scale)
            .translate(-(minX + maxX) / 2, -(minY + maxY) / 2);

        // Apply the transform with a transition
        svg.transition()
            .duration(750)
            .call(zoom.transform, transform);
    };

    // Recalculate the map when sidebar state changes
    useEffect(() => {
        // Short delay to allow the DOM to update
        const timer = setTimeout(() => {
            if (mapInstanceRef.current.svg && containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;

                mapInstanceRef.current.svg
                    .attr("width", containerWidth)
                    .attr("height", containerHeight)
                    .attr("viewBox", [0, 0, containerWidth, containerHeight]);

                // Update zoom controls position
                d3.select(".zoom-controls")
                    .attr("transform", `translate(${containerWidth - 60}, ${containerHeight / 2 - 50})`);

                // Update info panel position
                d3.select(".kecamatan-info")
                    .attr("transform", `translate(${containerWidth - 225}, ${containerHeight - 135})`);

                // Update title position
                d3.select(".map-title")
                    .attr("x", containerWidth / 2);

                // Update footer position
                d3.select(".map-footer")
                    .attr("x", containerWidth / 2)
                    .attr("y", containerHeight - 30);
            }
        }, 300); // Match the transition duration

        return () => clearTimeout(timer);
    }, [isSidebarOpen]);

    useEffect(() => {
        if (!kecamatanData.length || mapError) return;

        const createMap = () => {
            try {
                if (!containerRef.current || !svgRef.current) {
                    console.error("Container atau SVG reference belum siap");
                    return;
                }

                // Get container dimensions
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;

                if (!containerWidth || !containerHeight) {
                    console.error("Container dimensions tidak valid:", containerWidth, containerHeight);
                    return;
                }

                d3.select(svgRef.current).selectAll("*").remove();

                const svg = d3.select(svgRef.current)
                    .attr("viewBox", [0, 0, containerWidth, containerHeight])
                    .attr("width", containerWidth)
                    .attr("height", containerHeight)
                    .style("background", "#f8fafc");

                mapInstanceRef.current.svg = svg;

                svg.append("rect")
                    .attr("width", containerWidth)
                    .attr("height", containerHeight)
                    .attr("fill", "#f9fafb");

                const g = svg.append("g");
                mapInstanceRef.current.g = g;

                let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

                // Gunakan array kecamatanData dari state
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

                // Improved zoom definition
                const zoom = d3.zoom()
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

                const reset = () => {
                    // Reset all path colors
                    g.selectAll("path")
                        .transition()
                        .duration(300)
                        .style("fill", d => d.defaultColor || "#5b9bd5");

                    // Hide info panel
                    d3.select(".kecamatan-info")
                        .transition()
                        .duration(300)
                        .style("opacity", 0);

                    const containerWidth = containerRef.current.clientWidth;
                    const containerHeight = containerRef.current.clientHeight;

                    // Create a proper initial transform
                    const initialTransform = d3.zoomIdentity
                        .translate(containerWidth / 2, containerHeight / 2)
                        .scale(1)
                        .translate(-(minX + maxX) / 2, -(minY + maxY) / 2);

                    // Apply the transform with a transition
                    svg.transition()
                        .duration(750)
                        .call(zoom.transform, initialTransform);
                };

                // Use click instead of dblclick for reset button
                svg.select("rect").on("click", null);
                svg.on("dblclick", reset);

                const clicked = (event, d) => {
                    event.stopPropagation();

                    // Reset all colors
                    g.selectAll("path")
                        .transition()
                        .duration(300)
                        .style("fill", kec => kec.defaultColor || "#5b9bd5");

                    // Highlight clicked kecamatan
                    d3.select(event.currentTarget)
                        .transition()
                        .duration(300)
                        .style("fill", "#ec4899");

                    // Update info panel
                    updateInfo(d);

                    // Show info panel
                    d3.select(".kecamatan-info")
                        .transition()
                        .duration(300)
                        .style("opacity", 1);

                    // Find bounding box with buffer
                    const buffer = 80;
                    let x0, y0, x1, y1;

                    // Try to use the path points to find bounds
                    const pathPoints = d.path.match(/[0-9]+,[0-9]+/g);
                    if (pathPoints && pathPoints.length > 0) {
                        let pathMinX = Infinity, pathMaxX = -Infinity;
                        let pathMinY = Infinity, pathMaxY = -Infinity;

                        pathPoints.forEach(point => {
                            const [x, y] = point.split(',').map(Number);
                            pathMinX = Math.min(pathMinX, x);
                            pathMaxX = Math.max(pathMaxX, x);
                            pathMinY = Math.min(pathMinY, y);
                            pathMaxY = Math.max(pathMaxY, y);
                        });

                        x0 = pathMinX - buffer;
                        y0 = pathMinY - buffer;
                        x1 = pathMaxX + buffer;
                        y1 = pathMaxY + buffer;
                    } else {
                        // Fallback to using center point
                        const [cx, cy] = d.center;
                        x0 = cx - buffer;
                        y0 = cy - buffer;
                        x1 = cx + buffer;
                        y1 = cy + buffer;
                    }

                    // Ensure bounds are within the overall extents
                    x0 = Math.max(minX, x0);
                    y0 = Math.max(minY, y0);
                    x1 = Math.min(maxX, x1);
                    y1 = Math.min(maxY, y1);

                    const containerWidth = containerRef.current.clientWidth;
                    const containerHeight = containerRef.current.clientHeight;

                    // Calculate the appropriate scale
                    const scale = Math.min(8, 0.9 / Math.max((x1 - x0) / containerWidth, (y1 - y0) / containerHeight));

                    // Create a new transform
                    const transform = d3.zoomIdentity
                        .translate(containerWidth / 2, containerHeight / 2)
                        .scale(scale)
                        .translate(-(x0 + x1) / 2, -(y0 + y1) / 2);

                    // Apply the transform with a transition
                    svg.transition()
                        .duration(750)
                        .call(zoom.transform, transform);
                };

                const paths = g.selectAll("path")
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

                mapInstanceRef.current.paths = paths;

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

                svg.append("text")
                    .attr("class", "map-title")
                    .attr("x", containerWidth / 2)
                    .attr("y", 40)
                    .attr("text-anchor", "middle")
                    .attr("font-size", "24px")
                    .attr("font-weight", "bold")
                    .attr("fill", "#1f2937")
                    .text("Peta Kabupaten Bondowoso");

                svg.append("text")
                    .attr("class", "map-footer")
                    .attr("x", containerWidth / 2)
                    .attr("y", containerHeight - 30)
                    .attr("text-anchor", "middle")
                    .attr("fill", "#1f2937")
                    .attr("font-size", "14px")
                    .text("© 2025 Peta Interaktif Bondowoso | Data: BPS Kab. Bondowoso");

                const kecamatanInfo = svg.append("g")
                    .attr("class", "kecamatan-info")
                    .attr("transform", `translate(${containerWidth - 220}, 50)`)
                    .style("opacity", 0);

                mapInstanceRef.current.kecamatanInfo = kecamatanInfo;

                kecamatanInfo.append("rect")
                    .attr("width", 205)
                    .attr("height", 105)
                    .attr("fill", "white")
                    .attr("stroke", "#e5e7eb")
                    .attr("stroke-width", 1)
                    .attr("rx", 8)
                    .style("filter", "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))");

                const kecamatanTitle = kecamatanInfo.append("text")
                    .attr("x", 15)
                    .attr("y", 30)
                    .attr("font-size", "18px")
                    .attr("font-weight", "bold")
                    .attr("fill", "#7c3aed")
                    .text("");

                mapInstanceRef.current.kecamatanTitle = kecamatanTitle;

                const kecamatanPopulation = kecamatanInfo.append("text")
                    .attr("x", 15)
                    .attr("y", 60)
                    .attr("font-size", "14px")
                    .attr("fill", "#1f2937")
                    .text("");

                mapInstanceRef.current.kecamatanPopulation = kecamatanPopulation;

                const kecamatanArea = kecamatanInfo.append("text")
                    .attr("x", 15)
                    .attr("y", 85)
                    .attr("font-size", "14px")
                    .attr("fill", "#1f2937")
                    .text("");

                mapInstanceRef.current.kecamatanArea = kecamatanArea;

                // Improved zoom controls with better event handling
                const zoomControls = svg.append("g")
                    .attr("class", "zoom-controls")
                    .attr("transform", `translate(${containerWidth - 60}, ${containerHeight / 2 - 50})`);

                zoomControls.append("rect")
                    .attr("width", 40)
                    .attr("height", 100)
                    .attr("fill", "white")
                    .attr("stroke", "#e5e7eb")
                    .attr("rx", 8)
                    .style("filter", "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))");

                const zoomInBtn = zoomControls.append("g")
                    .attr("cursor", "pointer")
                    .on("click", (event) => {
                        event.stopPropagation(); // Prevent event bubbling
                        svg.transition()
                            .duration(300)
                            .call(zoom.scaleBy, 1.5); // Increased scale factor
                    });

                zoomInBtn.append("circle")
                    .attr("cx", 20)
                    .attr("cy", 25)
                    .attr("r", 15)
                    .attr("fill", "#4f46e5")
                    .attr("opacity", 0.9);

                zoomInBtn.append("text")
                    .attr("x", 20)
                    .attr("y", 30)
                    .attr("text-anchor", "middle")
                    .attr("font-size", "20px")
                    .attr("fill", "white")
                    .attr("font-weight", "bold")
                    .text("+");

                const zoomOutBtn = zoomControls.append("g")
                    .attr("cursor", "pointer")
                    .on("click", (event) => {
                        event.stopPropagation(); // Prevent event bubbling
                        svg.transition()
                            .duration(300)
                            .call(zoom.scaleBy, 0.7);
                    });

                zoomOutBtn.append("circle")
                    .attr("cx", 20)
                    .attr("cy", 75)
                    .attr("r", 15)
                    .attr("fill", "#4f46e5")
                    .attr("opacity", 0.9);

                zoomOutBtn.append("text")
                    .attr("x", 20)
                    .attr("y", 80)
                    .attr("text-anchor", "middle")
                    .attr("font-size", "24px")
                    .attr("fill", "white")
                    .attr("font-weight", "bold")
                    .text("-");

                const resetBtn = zoomControls.append("g")
                    .attr("cursor", "pointer")
                    .on("click", (event) => {
                        event.stopPropagation(); // Prevent event bubbling
                        reset();
                    });

                resetBtn.append("circle")
                    .attr("cx", 20)
                    .attr("cy", 50)
                    .attr("r", 15)
                    .attr("fill", "#06b6d4")
                    .attr("opacity", 0.9);

                resetBtn.append("text")
                    .attr("x", 20)
                    .attr("y", 55)
                    .attr("text-anchor", "middle")
                    .attr("font-size", "14px")
                    .attr("fill", "white")
                    .attr("font-weight", "bold")
                    .text("R");

                // Create a proper initial transform
                const initialTransform = d3.zoomIdentity
                    .translate(containerWidth / 2, containerHeight / 2)
                    .scale(1)
                    .translate(-(minX + maxX) / 2, -(minY + maxY) / 2);

                // Apply the initial transform
                svg.call(zoom.transform, initialTransform);

            } catch (error) {
                console.error("Error creating map:", error);
                setMapError(`Error membuat peta: ${error.message}`);
            }
        };

        // Initial creation after DOM is ready
        const timer = setTimeout(() => {
            createMap();
        }, 100); // Increased timeout to ensure DOM is fully ready

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
                className={`h-full transition-all duration-300 ${isSidebarOpen ? 'ml-80' : 'ml-0'}`}
            >
                {mapError ? (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h2 className="text-2xl font-bold text-red-600 mb-4">Error Peta</h2>
                            <p className="text-gray-700">{mapError}</p>
                            <p className="mt-4 text-gray-600">Periksa konsol untuk detil lebih lanjut</p>
                        </div>
                    </div>
                ) : (
                    <svg
                        ref={svgRef}
                        className="w-full h-full"
                    ></svg>
                )}
            </div>
        </div>
    );
}