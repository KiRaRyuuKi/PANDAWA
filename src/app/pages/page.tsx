import type { Metadata } from "next";
import { DashboardMetrics } from "@/components/pages/DashboardMetrics";
import React from "react";
import MonthlyTarget from "@/components/pages/MonthlyTarget";
import MonthlyChart from "@/components/pages/MonthlyChart";

export const metadata: Metadata = {
  title:
    "PANDAWA",
  description: "Pantau Sumber Daya Alam Wilayah Bondowoso",
};

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <DashboardMetrics />

        <MonthlyChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>
    </div>
  );
}
