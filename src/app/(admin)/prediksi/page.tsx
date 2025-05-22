import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import TablePrediction from "@/components/tables/TablePrediksi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PANDAWA | Prediction",
  description:
    "PANDAWA",
};

export default function PredictionPage() {
  return (
    <div>
      <div className="space-y-6">
        <ComponentCard title="Table Prediction">
          <TablePrediction />
        </ComponentCard>
      </div>
    </div>
  );
}
