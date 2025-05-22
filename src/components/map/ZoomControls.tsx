import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface ZoomControlsProps {
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null;
    zoom: d3.ZoomBehavior<Element, unknown> | null;
    containerWidth: number;
    containerHeight: number;
    resetView: () => void;
}

export function Controls({
    svg,
    zoom,
    containerWidth,
    containerHeight,
    resetView
}: ZoomControlsProps) {
    const controlsRef = useRef<d3.Selection<SVGGElement, unknown, null, undefined> | null>(null);

    useEffect(() => {
        if (!svg || !zoom || !containerWidth || !containerHeight) return;

        // Remove any existing controls
        d3.select(".zoom-controls").remove();
        d3.select(".reset-control").remove();
        d3.select("#controlsClipPath").remove();

        // 1. Buat clipPath untuk membatasi area yang terlihat
        svg.append("defs")
            .append("clipPath")
            .attr("id", "controlsClipPath")
            .append("rect")
            .attr("width", 40)
            .attr("height", 126)
            .attr("rx", 8);

        // 2. Create a container for background with shadow (not clipped)
        const shadowContainer = svg.append("g")
            .attr("class", "zoom-controls-shadow")
            .attr("transform", `translate(${containerWidth - 60}, 20)`);

        // Background rectangle with shadow
        shadowContainer.append("rect")
            .attr("width", 40)
            .attr("height", 126)
            .attr("fill", "white")
            .attr("rx", 8)
            .style("filter", "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2))");

        // 3. Create separate container for controls (with clipping)
        const controlsContainer = svg.append("g")
            .attr("class", "zoom-controls")
            .attr("transform", `translate(${containerWidth - 60}, 20)`)
            .attr("clip-path", "url(#controlsClipPath)");

        // Zoom In Button - Top part
        const zoomInBtn = controlsContainer.append("g")
            .attr("cursor", "pointer")
            .attr("transform", "translate(0, 0)")
            .on("click", (event) => {
                event.stopPropagation();
                event.stopImmediatePropagation();
                // Fixed: Use the selection directly instead of calling it as a function
                svg.transition()
                    .duration(300)
                    .call(zoom.scaleBy as any, 1.5);
            });

        zoomInBtn.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 40)
            .attr("height", 50)
            .attr("fill", "#f9fafb");

        zoomInBtn.append("text")
            .attr("x", 20)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .attr("font-size", "22px")
            .attr("font-family", "system-ui, -apple-system, sans-serif")
            .attr("fill", "#4b5563")
            .attr("font-weight", "bold")
            .text("+");

        // Zoom Out Button - Middle part
        const zoomOutBtn = controlsContainer.append("g")
            .attr("cursor", "pointer")
            .attr("transform", "translate(0, 40)")
            .on("click", (event) => {
                event.stopPropagation();
                event.stopImmediatePropagation();
                // Fixed: Use the selection directly instead of calling it as a function
                svg.transition()
                    .duration(300)
                    .call(zoom.scaleBy as any, 0.7);
            });

        zoomOutBtn.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 40)
            .attr("height", 50)
            .attr("fill", "#f9fafb");

        zoomOutBtn.append("text")
            .attr("x", 20)
            .attr("y", 28)
            .attr("text-anchor", "middle")
            .attr("font-size", "22px")
            .attr("font-family", "system-ui, -apple-system, sans-serif")
            .attr("fill", "#4b5563")
            .attr("font-weight", "bold")
            .text("−");

        // Reset button - Bottom part
        const resetBtn = controlsContainer.append("g")
            .attr("cursor", "pointer")
            .attr("transform", "translate(0, 80)")
            .on("click", (event) => {
                event.stopPropagation();
                event.stopImmediatePropagation();
                resetView();
            });

        resetBtn.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 40)
            .attr("height", 50)
            .attr("fill", "#f9fafb");

        // Apply shadow to the circle
        resetBtn.append("circle")
            .attr("cx", 20)
            .attr("cy", 25)
            .attr("r", 10)
            .attr("fill", "white")
            .attr("stroke", "#6366f1")
            .attr("strokeWidth", 1.5)
            .style("filter", "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))");

        // Updated path for the arrow to be centered in the circle
        resetBtn.append("path")
            .attr("d", "M20,20 L16,28 L20,25 L24,28 Z")
            .attr("fill", "#6366f1")
            .style("filter", "drop-shadow(0px 1px 1px rgba(0,0,0,0.1))");

        // Add consistent hover effects for all buttons
        d3.selectAll(".zoom-controls g rect")
            .on("mouseover", function () {
                d3.select(this).attr("fill", "#f3f4f6");
            })
            .on("mouseout", function () {
                d3.select(this).attr("fill", "#f9fafb");
            });

        controlsRef.current = controlsContainer;

        return () => {
            d3.select(".zoom-controls").remove();
            d3.select(".zoom-controls-shadow").remove();
            d3.select(".reset-control").remove();
            d3.select("#controlsClipPath").remove();
        };
    }, [svg, zoom, containerWidth, containerHeight, resetView]);

    return null; // This is just a wrapper for D3 functionality
}

// These helper functions remain unchanged as they're purely functional
export function calculateZoomTransform(width: number, height: number, bounds: any) {
    // Make sure bounds have valid values
    if (!bounds || typeof bounds !== 'object' ||
        isNaN(bounds.minX) || isNaN(bounds.maxX) ||
        isNaN(bounds.minY) || isNaN(bounds.maxY)) {
        console.error('Invalid bounds:', bounds);
        // Return default transform if bounds are not valid
        return d3.zoomIdentity;
    }

    // Calculate bounds dimensions
    const boundsWidth = bounds.maxX - bounds.minX;
    const boundsHeight = bounds.maxY - bounds.minY;

    // Check that dimensions are valid and non-zero
    if (boundsWidth <= 0 || boundsHeight <= 0 || width <= 0 || height <= 0) {
        console.error('Invalid dimensions:', {
            boundsWidth, boundsHeight, width, height
        });
        return d3.zoomIdentity;
    }

    // Calculate required scale
    const scaleX = width / boundsWidth;
    const scaleY = height / boundsHeight;

    // Use the smaller scale so the entire map is visible
    const scale = Math.min(scaleX, scaleY) * 0.9;

    // Check that scale is valid
    if (isNaN(scale) || scale <= 0) {
        console.error('Invalid scale:', scale);
        return d3.zoomIdentity;
    }

    // Calculate translation to center
    const centerX = (bounds.minX + bounds.maxX) / 2;
    const centerY = (bounds.minY + bounds.maxY) / 2;

    // Check that center is valid
    if (isNaN(centerX) || isNaN(centerY)) {
        console.error('Invalid center:', { centerX, centerY });
        return d3.zoomIdentity;
    }

    // Calculate final translation
    const translateX = width / 2 - scale * centerX - 230;
    const translateY = height / 2 - scale * centerY + 150;

    // Final check to ensure no NaN values
    if (isNaN(translateX) || isNaN(translateY) || isNaN(scale)) {
        console.error('Invalid transform values:', {
            translateX, translateY, scale
        });
        return d3.zoomIdentity;
    }

    // Return valid transform
    return d3.zoomIdentity.translate(translateX, translateY).scale(scale);
}

export function calculatePathBounds(path: string, center?: [number, number]) {
    // Try to extract coordinates from path
    try {
        // If center is already available and valid, use it
        if (center && Array.isArray(center) && center.length === 2 &&
            !isNaN(center[0]) && !isNaN(center[1])) {
            // Add margin to ensure path is visible
            const margin = 50;
            return {
                minX: center[0] - margin,
                maxX: center[0] + margin,
                minY: center[1] - margin,
                maxY: center[1] + margin
            };
        }

        // Try to extract points from path string
        const pathPoints = path.match(/[0-9]+,[0-9]+/g);
        if (pathPoints && pathPoints.length > 0) {
            let minX = Infinity, maxX = -Infinity;
            let minY = Infinity, maxY = -Infinity;

            pathPoints.forEach(point => {
                const [x, y] = point.split(',').map(Number);
                if (!isNaN(x) && !isNaN(y)) {
                    minX = Math.min(minX, x);
                    maxX = Math.max(maxX, x);
                    minY = Math.min(minY, y);
                    maxY = Math.max(maxY, y);
                }
            });

            // Check if we successfully got valid bounds
            if (minX !== Infinity && maxX !== -Infinity &&
                minY !== Infinity && maxY !== -Infinity) {
                // Add margin
                const margin = Math.max((maxX - minX) * 0.1, (maxY - minY) * 0.1, 20);
                return {
                    minX: minX - margin,
                    maxX: maxX + margin,
                    minY: minY - margin,
                    maxY: maxY + margin
                };
            }
        }
    } catch (e) {
        console.error('Error parsing path:', e);
    }

    // If all fails, return default bounds
    console.warn('Could not calculate path bounds, using default');
    return { minX: 0, maxX: 100, minY: 0, maxY: 100 };
}