import { Metadata } from "next";
import AppAuth from "@/layout/AppAuth";

export const metadata: Metadata = {
  title: "PANDAWA",
  description: "Pantau Sumber Daya Alam Bondowoso",
};

export default function AuthPage() {
  return <AppAuth />;
}