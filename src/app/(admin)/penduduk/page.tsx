import ComponentCard from "@/components/common/ComponentCard";
import TablePenduduk from "@/components/tables/TablePenduduk";


import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PANDAWA | Data Penduduk",
  description:
    "PANDAWA",
};

export default function CommodityPage() {
  return (
    <div>
      <div className="space-y-6">
        <ComponentCard title="Tabel Penduduk">
          <TablePenduduk />
        </ComponentCard>
      </div>
    </div>
  );
}
