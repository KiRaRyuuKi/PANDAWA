import * as d3 from 'd3';

// Constants for zoom behavior
const DEFAULT_ZOOM_OFFSET = { x: -80, y: 60 };
const PIN_ZOOM_SCALE = 2.5;

// Define pin interface
export interface PinData {
    id_panen: string;
    position: [number, number];
    kecamatan?: string;
    title: string;
    area?: string;
    deskripsi?: string;
    luas_panen?: string;
    population?: number;
    produksi?: string;
    produktivitas?: string;
    laju_pertumbuhan?: string;
    komoditas_tertinggi?: string;
    category: string;
    color?: string;
    gambar?: string;
    custom_icon?: string;
}

// Define pin categories with improved icons and colors
export const pinCategories = [
    {
        id_panen: 'all',
        label: 'Semua Kategori',
        color: '#EA4335',
        icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    },
    {
        id_panen: 'padi',
        label: 'Padi',
        color: '#16a34a' ,
        icon: '/pins/iconPadi.png',
        type: 'image',
    },
    {
        id_panen: 'jagung',
        label: 'Jagung',
        color: '#facc15',
        icon: '/pins/iconJagung.png',
    },
    {
        id_panen: 'ubi',
        label: 'Ubi Kayu',
        color: '#a16207',
        icon: '/pins/ubi.png',
    },
    {
        id_panen: 'kelapa',
        label: 'Kelapa',
        color: '#10b981',
        icon: '/pins/kelapa.png',
    },
    {
        id_panen: 'kopi',
        label: 'Kopi',
        color: '#6b3e26',
        icon: '/pins/kopi.png',
    },
    
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

    // Create a group for pins (ikut transform dari g)
    const pinGroup = g.append("g")
        .attr("class", "pin-group")
        .style("display", showPins ? "block" : "none");

    // Add pins
    const pinElements = pinGroup.selectAll(".pin")
        .data(pins)
        .enter()
        .append("g")
        .attr("class", d => `pin pin-${d.id_panen}`)
        .attr("data-category", d => d.category)
        .attr("transform", d => `translate(${d.position[0]}, ${d.position[1]})`)
        .style("cursor", "pointer")
        .style("display", d => {
            const showAll = activePinFilters.has('all');
            return showAll || activePinFilters.has(d.category) ? "block" : "none";
        });

    // Tambahkan isi pin
    pinElements.each(function (d) {
        const pin = d3.select(this);
        const category = pinCategories.find(cat => cat.id_panen === d.category) || pinCategories[0];

        pin.attr("data-color", d.color || category.color);
        pin.attr("data-icon", d.custom_icon || category.icon);

        // Drop shadow
        const defs = pin.append("defs");
        const filter = defs.append("filter")
            .attr("id_panen", `drop-shadow-${d.id_panen}`)
            .attr("x", "-50%")
            .attr("y", "-50%")
            .attr("width", "200%")
            .attr("height", "200%");
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
        feMerge.append("feMergeNode").attr("in", "offsetBlur");
        feMerge.append("feMergeNode").attr("in", "SourceGraphic");

        pin.append("circle")
            .attr("class", "pin-circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 10)
            .attr("fill", d.color || category.color)
            .attr("stroke", "white")
            .attr("stroke-width", 1.5)
            .attr("filter", `url(#drop-shadow-${d.id_panen})`);

            pin.append("image")
            .attr("class", "pin-icon")
            .attr("x", -6)
            .attr("y", -6)
            .attr("width", 12)  // Ukuran gambar, bisa disesuaikan
            .attr("height", 12)
            .attr("xlink:href", category.icon);  // Pastikan ini benar

        const fo = pin.append("foreignObject")
            .attr("x", -40)
            .attr("y", -35)
            .attr("width", 80)
            .attr("height", 40)
            .style("overflow", "visible")
            .style("pointer-events", "none")
            .attr("class", "pin-bubble")
            .style("opacity", 0);
        
        fo.append("xhtml:div")
            .style("background", "white")
            .style("border", "1px solid #ccc")
            .style("border-radius", "8px")
            .style("padding", "4px 8px")
            .style("text-align", "center")
            .style("font-size", "10px")
            .style("color", "#333")
            .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
            .style("transition", "opacity 0.3s ease, transform 0.3s ease")
            .text(d.title);
        
        
            
    });

    // ❌ Hapus updatePinsOnZoom dan jangan override zoom transform
    svg.on("zoom.pins", null);

    // Hover dan click
    pinElements
    .on("mouseover", function () {
        d3.select(this).raise();
        d3.select(this).selectAll("circle")
            .transition()
            .duration(200)
            .attr("r", 12)
            .attr("stroke-width", 2.5);
    
        d3.select(this).select(".pin-bubble")
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("transform", "translateY(-5px)");
    })
    .on("mouseout", function () {
        d3.select(this).selectAll("circle")
            .transition()
            .duration(200)
            .attr("r", 10)
            .attr("stroke-width", 1.5);
    
        d3.select(this).select(".pin-bubble")
            .transition()
            .duration(200)
            .style("opacity", 0)
            .style("transform", "translateY(0px)");
    })
    
        .on("click", function (event, d) {
            event.stopPropagation();
            setSelectedPin(d);

            const containerWidth = containerRef.current!.clientWidth;
            const containerHeight = containerRef.current!.clientHeight;

            const transform = d3.zoomIdentity
                .translate(containerWidth / 2, containerHeight / 2)
                .scale(PIN_ZOOM_SCALE)
                .translate(-d.position[0], -d.position[1])
                .translate(DEFAULT_ZOOM_OFFSET.x, DEFAULT_ZOOM_OFFSET.y);

            svg.transition()
                .duration(750)
                .call(zoom.transform, transform);      
        });
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