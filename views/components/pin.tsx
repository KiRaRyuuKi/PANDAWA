import * as d3 from 'd3';

// Constants for zoom behavior
const DEFAULT_ZOOM_OFFSET = { x: -80, y: 60 };
const PIN_ZOOM_SCALE = 2.5;

// Define pin interface
export interface PinData {
    id: string;
    position: [number, number];
    title: string;
    description?: string;
    category: string;
    color?: string;
    image?: string;
    customIcon?: string;
}

// Define pin categories with improved icons and colors
export const pinCategories = [
    {
        id: 'all',
        label: 'All Pins',
        color: '#4285F4',
        icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    },
    {
        id: 'important',
        label: 'Important',
        color: '#EA4335',
        icon: 'M12 2L4 12l8 10 8-10-8-10zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z',
    },
    {
        id: 'education',
        label: 'Education',
        color: '#34A853',
        icon: 'M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z',
    },
    {
        id: 'healthcare',
        label: 'Healthcare',
        color: '#FBBC05',
        icon: 'M12 2L4 12l8 10 8-10-8-10zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z',
    },
    {
        id: 'recreation',
        label: 'Recreation',
        color: '#673AB7',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z',
    },
    {
        id: 'commercial',
        label: 'Commercial',
        color: '#FF5722',
        icon: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z',
    }
];

// Function to create pins on the map
export const createPins = (
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    g: d3.Selection<SVGGElement, unknown, null, undefined>,
    pins: PinData[],
    activePinFilters: Set<string>,
    showPins: boolean,
    containerRef: React.RefObject<HTMLDivElement>,
    setSelectedPin: (pin: PinData | null) => void,
    zoom: d3.ZoomBehavior<Element, unknown>
) => {
    // Remove existing pins to avoid duplicates
    g.select(".pin-group").remove();

    // Create a group for pins that will be affected by zoom
    const pinGroup = g.append("g")
        .attr("class", "pin-group")
        .style("display", showPins ? "block" : "none");

    // Add pins
    const pinElements = pinGroup.selectAll(".pin")
        .data(pins)
        .enter()
        .append("g")
        .attr("class", d => `pin pin-${d.id}`)
        .attr("data-category", d => d.category)
        .attr("transform", d => `translate(${d.position[0]}, ${d.position[1]})`)
        .style("cursor", "pointer")
        .style("display", d => {
            const showAll = activePinFilters.has('all');
            return showAll || activePinFilters.has(d.category) ? "block" : "none";
        });

    // Add custom or default map markers
    pinElements.each(function (d) {
        const pin = d3.select(this);
        const category = pinCategories.find(cat => cat.id === d.category) || pinCategories[0];

        // Store the category color as a data attribute for easy reference
        pin.attr("data-color", d.color || category.color);
        pin.attr("data-icon", d.customIcon || category.icon);

        // Create a marker with proper drop shadow
        const defs = pin.append("defs");

        // Create a shadow filter that follows the circle shape
        const filter = defs.append("filter")
            .attr("id", `drop-shadow-${d.id}`)
            .attr("x", "-50%")
            .attr("y", "-50%")
            .attr("width", "200%")
            .attr("height", "200%");

        // Shadow effect
        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 0.5)
            .attr("result", "blur");

        filter.append("feOffset")
            .attr("in", "blur")
            .attr("dx", 0)
            .attr("dy", 0.5)
            .attr("result", "offsetBlur");

        const feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur");
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");

        // Create the pin body (circle with icon)
        const circle = pin.append("circle")
            .attr("class", "pin-circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 10)
            .attr("fill", d.color || category.color)
            .attr("stroke", "white")
            .attr("stroke-width", 1.5)
            .attr("filter", `url(#drop-shadow-${d.id})`);

        // Add the icon inside the pin
        const icon = pin.append("path")
            .attr("class", "pin-icon")
            .attr("d", d.customIcon || category.icon)
            .attr("transform", "translate(-6, -6) scale(0.5)")
            .attr("fill", "white");
    });

    // Update pin elements to handle zoom - now keeps constant size
    const updatePinsOnZoom = () => {
        // Capture current zoom transform
        const transform = d3.zoomTransform(svg.node()!);

        // Apply transform to pin group to maintain size regardless of zoom level
        pinGroup.attr("transform", `translate(${transform.x}, ${transform.y}) scale(${1 / transform.k})`);
    };

    // Add zoom event listener
    svg.on("zoom.pins", updatePinsOnZoom);

    // Add hover and click effects
    pinElements
        .on("mouseover", function () {
            d3.select(this).raise();
            d3.select(this).selectAll("circle")
                .transition()
                .duration(200)
                .attr("r", 12)
                .attr("stroke-width", 2.5);

            d3.select(this).selectAll("path")
                .transition()
                .duration(200)
                .attr("transform", "translate(-7.2, -7.2) scale(0.6)");
        })
        .on("mouseout", function () {
            d3.select(this).selectAll("circle")
                .transition()
                .duration(200)
                .attr("r", 10)
                .attr("stroke-width", 1.5);

            d3.select(this).selectAll("path")
                .transition()
                .duration(200)
                .attr("transform", "translate(-6, -6) scale(0.5)");
        })
        .on("click", function (event, d) {
            event.stopPropagation();
            setSelectedPin(d);

            // Zoom to pin
            const containerWidth = containerRef.current!.clientWidth;
            const containerHeight = containerRef.current!.clientHeight;

            // Calculate transform with offset
            const transform = d3.zoomIdentity
                .translate(containerWidth / 2, containerHeight / 2)
                .scale(PIN_ZOOM_SCALE)
                .translate(-d.position[0], -d.position[1])
                .translate(DEFAULT_ZOOM_OFFSET.x, DEFAULT_ZOOM_OFFSET.y);

            // Apply the transform with a transition
            svg.transition()
                .duration(750)
                .call(zoom.transform, transform);
        });

    // Initial update to set correct pin scale
    updatePinsOnZoom();
};

// Function to update pin visibility based on filters
export const updatePinVisibility = (
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null,
    filters: Set<string>,
    showPins: boolean
) => {
    if (!svg) return;

    // Only select elements with the ".pin" class (avoid selecting non-pin elements)
    const showAll = filters.has('all');

    // Update visibility for all pins
    svg.selectAll("g.pin") // Be more specific with the selector
        .style("display", function (d: any) {
            if (!showPins) return "none";
            return showAll || filters.has(d.category) ? "block" : "none";
        });

    // Also update the container visibility
    svg.select(".fixed-size-pin-container")
        .style("display", showPins ? "block" : "none");

    svg.select(".pin-group")
        .style("display", showPins ? "block" : "none");
};

// Function to reset pins without recreating them
export const resetPins = (
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null
) => {
    if (!svg) return;

    // Reset using data attributes, targeting only pin elements
    svg.selectAll("g.pin").each(function () {
        const pin = d3.select(this);
        const originalColor = pin.attr("data-color");

        // Only reset the fill on circles within pins
        pin.select(".pin-circle")
            .transition()
            .duration(300)
            .attr("fill", originalColor);

        // Ensure icon is white
        pin.select(".pin-icon")
            .attr("fill", "white");
    });
};

// Improved zoom transform calculation with offset support
export const calculateZoomTransform = (
    containerWidth: number,
    containerHeight: number,
    bounds: { minX: number; maxX: number; minY: number; maxY: number },
    fixedScale?: number,
    offsetX: number = 0,
    offsetY: number = 0
) => {
    const width = bounds.maxX - bounds.minX;
    const height = bounds.maxY - bounds.minY;
    const centerX = bounds.minX + width / 2;
    const centerY = bounds.minY + height / 2;

    if (fixedScale !== undefined) {
        return d3.zoomIdentity
            .translate(containerWidth / 2, containerHeight / 2)
            .scale(fixedScale)
            .translate(-centerX, -centerY)
            .translate(offsetX, offsetY);
    }

    const scale = 0.9 / Math.max(width / containerWidth, height / containerHeight);
    return d3.zoomIdentity
        .translate(containerWidth / 2, containerHeight / 2)
        .scale(scale)
        .translate(-centerX, -centerY)
        .translate(offsetX, offsetY);
};

// Helper function to convert an SVG string to a path data string
export const svgToPathData = (svgString: string): string => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = svgString.trim();

    const paths = tempDiv.querySelectorAll('path');
    if (paths.length === 0) return '';

    return Array.from(paths)
        .map(path => path.getAttribute('d'))
        .filter(Boolean)
        .join(' ');
};