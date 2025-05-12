import ComponentCard from "@/components/common/ComponentCard";
import TableKecamatan from "@/components/tables/TableKecamatan";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PANDAWA | Commodity",
  description:
    "PANDAWA",
};

export default function CommodityPage() {
  return (
    <div>
      <div className="space-y-6">
        <ComponentCard title="Table Kecamatan">
          <TableKecamatan />
        </ComponentCard>
      </div>
    </div>
  );
}
