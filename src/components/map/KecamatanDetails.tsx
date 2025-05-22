import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Define the interface for KecamatanDetailProps
interface KecamatanDetailProps {
    containerWidth: number;
    containerHeight: number;
    kecamatan: {
        title: string;
        kecamatanName: string;
        luaspanen: string;
        produksi: string;
        produktivitas: string;
    } | null;
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null;
}

export function KecamatanDetail({ containerWidth, containerHeight, kecamatan, svg }: KecamatanDetailProps) {
    const detailRef = useRef<{
        kecamatanName: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
        kecamatanInfo: d3.Selection<SVGGElement, unknown, null, undefined> | null;
        kecamatanTitle: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
        komoditas: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
        luasPanen: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
        produksi: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
        produktivitas: d3.Selection<SVGTextElement, unknown, null, undefined> | null;
    }>({
        kecamatanName: null,
        kecamatanInfo: null,
        kecamatanTitle: null,
        komoditas: null,
        luasPanen: null,
        produksi: null,
        produktivitas: null,
    });

    useEffect(() => {
        if (!svg) return;

        svg.select(".kecamatan-info").remove();

        const kecamatanInfo = svg.append("g")
            .attr("class", "kecamatan-info")
            .attr("transform", `translate(${containerWidth - 290}, ${containerHeight - 160})`)
            .style("opacity", 0);

        detailRef.current.kecamatanInfo = kecamatanInfo;

        kecamatanInfo.append("rect")
            .attr("width", 270)
            .attr("height", 120)
            .attr("fill", "white")
            .attr("rx", 8)
            .style("filter", "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))");

        detailRef.current.kecamatanTitle = kecamatanInfo.append("text")
            .attr("x", 15)
            .attr("y", 45)
            .attr("font-size", "16px")
            .attr("font-weight", "bold")
            .attr("fill", "#7c3aed");

        detailRef.current.luasPanen = kecamatanInfo.append("text")
            .attr("x", 15)
            .attr("y", 65)
            .attr("font-size", "14px")
            .attr("fill", "#1f2937");

        detailRef.current.produksi = kecamatanInfo.append("text")
            .attr("x", 15)
            .attr("y", 85)
            .attr("font-size", "14px")
            .attr("fill", "#1f2937");

        detailRef.current.produktivitas = kecamatanInfo.append("text")
            .attr("x", 15)
            .attr("y", 105)
            .attr("font-size", "14px")
            .attr("fill", "#1f2937");

        detailRef.current.kecamatanName = kecamatanInfo.append("text")
            .attr("x", 95)
            .attr("y", 25)
            .attr("font-size", "18px")
            .attr("fill", "#1f2937");

        return () => {
            svg.select(".kecamatan-info").remove();
        };
    }, [svg, containerWidth, containerHeight]);

    useEffect(() => {
        const info = detailRef.current.kecamatanInfo;
        if (!info) return;

        if (kecamatan) {
            const toNumber = (val: string) =>
                isNaN(parseFloat(val.replace(',', '.'))) ? null : parseFloat(val.replace(',', '.'));

            const formatNumber = (val: string) => {
                const num = toNumber(val);
                return num !== null ? num.toLocaleString('id-ID') : val;
            };

            detailRef.current.kecamatanTitle?.text(kecamatan.title);
            detailRef.current.luasPanen?.text(`Luas Panen: ${formatNumber(kecamatan.luaspanen)} ha`);
            detailRef.current.produksi?.text(`Produksi: ${formatNumber(kecamatan.produksi)} ton`);
            detailRef.current.produktivitas?.text(`Produktivitas: ${formatNumber(kecamatan.produktivitas)} ton/ha`);
            detailRef.current.kecamatanName?.text(`${kecamatan.kecamatanName}`);

            detailRef.current.kecamatanInfo?.transition().duration(300).style("opacity", 1);
        }
        else {
            info.transition().duration(300).style("opacity", 0);
        }
    }, [kecamatan]);

    useEffect(() => {
        if (detailRef.current.kecamatanInfo && containerWidth && containerHeight) {
            detailRef.current.kecamatanInfo
                .attr("transform", `translate(${containerWidth - 290}, ${containerHeight - 160})`);
        }
    }, [containerWidth, containerHeight]);

    return null;
}

export function hideKecamatanInfo(svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null) {
    if (!svg) return;

    svg.select(".kecamatan-info")
        .transition()
        .duration(300)
        .style("opacity", 0);
}