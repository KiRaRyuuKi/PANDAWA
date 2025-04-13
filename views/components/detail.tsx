import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface KecamatanData {
    name: string;
    path: string;
    center: [number, number];
    defaultColor?: string;
    population: string | number;
    area: string | number;
}

interface KecamatanDetailProps {
    containerWidth: number;
    containerHeight: number;
    kecamatan: KecamatanData | null;
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null;
}

export function KecamatanDetail({ containerWidth, containerHeight, kecamatan, svg }: KecamatanDetailProps) {
    const detailRef = useRef<{
        kecamatanInfo: d3.Selection<SVGGElement, unknown, null, undefined> | null;
        kecamatanTitle: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
        kecamatanArea: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
        kecamatanPopulation: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
    }>({
        kecamatanInfo: null,
        kecamatanTitle: null,
        kecamatanArea: null,
        kecamatanPopulation: null
    });

    // Create the detail panel
    useEffect(() => {
        if (!svg) return;

        // Remove any existing kecamatan-info elements to prevent duplicates
        svg.select(".kecamatan-info").remove();

        const kecamatanInfo = svg.append("g")
            .attr("class", "kecamatan-info")
            .attr("transform", `translate(${containerWidth - 290}, ${containerHeight - 115})`)
            .style("opacity", 0);

        detailRef.current.kecamatanInfo = kecamatanInfo as d3.Selection<SVGGElement, unknown, null, undefined>;

        kecamatanInfo.append("rect")
            .attr("width", 270)
            .attr("height", 95)
            .attr("fill", "white")
            .attr("rx", 8)
            .style("filter", "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))");

        const kecamatanTitle = kecamatanInfo.append("text")
            .attr("x", 15)
            .attr("y", 30)
            .attr("font-size", "16px")
            .attr("font-weight", "bold")
            .attr("fill", "#7c3aed")
            .text("");

        detailRef.current.kecamatanTitle = kecamatanTitle as d3.Selection<SVGTextElement, unknown, null, undefined>;

        const kecamatanArea = kecamatanInfo.append("text")
            .attr("x", 15)
            .attr("y", 75)
            .attr("font-size", "14px")
            .attr("fill", "#1f2937")
            .text("");

        detailRef.current.kecamatanArea = kecamatanArea as d3.Selection<SVGTextElement, unknown, null, undefined>;

        const kecamatanPopulation = kecamatanInfo.append("text")
            .attr("x", 15)
            .attr("y", 55)
            .attr("font-size", "14px")
            .attr("fill", "#1f2937")
            .text("");

        detailRef.current.kecamatanPopulation = kecamatanPopulation as d3.Selection<SVGTextElement, unknown, null, undefined>;

    }, [svg, containerWidth, containerHeight]);

    // Update detail panel when kecamatan changes
    useEffect(() => {
        if (!detailRef.current.kecamatanInfo) return;

        if (kecamatan) {
            // Update info panel data
            detailRef.current.kecamatanTitle?.text(kecamatan.name);
            detailRef.current.kecamatanArea?.text(`Area: ${kecamatan.area}`);
            detailRef.current.kecamatanPopulation?.text(`Population: ${kecamatan.population}`);

            // Show info panel
            detailRef.current.kecamatanInfo
                .transition()
                .duration(300)
                .style("opacity", 1);
        } else {
            // Hide info panel
            detailRef.current.kecamatanInfo
                .transition()
                .duration(300)
                .style("opacity", 0);
        }
    }, [kecamatan]);

    // Update panel position when container dimensions change
    useEffect(() => {
        if (detailRef.current.kecamatanInfo && containerWidth && containerHeight) {
            detailRef.current.kecamatanInfo
                .attr("transform", `translate(${containerWidth - 290}, ${containerHeight - 115})`);
        }
    }, [containerWidth, containerHeight]);

    return null; // This is a non-visual component that manipulates the SVG directly
}

// Export a utility function to hide the info panel (useful for reset operations)
export function hideKecamatanInfo(svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null) {
    if (!svg) return;

    svg.select(".kecamatan-info")
        .transition()
        .duration(300)
        .style("opacity", 0);
}