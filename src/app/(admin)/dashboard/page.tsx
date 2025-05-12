import React from "react";
import { auth } from "@/api/auth/auth"
import type { Metadata } from "next";
import { redirect } from "next/navigation"
import MonthlyChart from "@/components/common/MonthlyChart";
import MonthlyTarget from "@/components/common/MonthlyTarget";
import { DashboardMetrics } from "@/components/common/DashboardMetrics";


export const metadata: Metadata = {
  title:
    "PANDAWA",
  description: "Pantau Sumber Daya Alam Wilayah Bondowoso",
};

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/auth")
  }

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
