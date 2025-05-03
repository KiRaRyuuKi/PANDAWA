import { Metadata } from "next";
import ErrorPage from "@/components/status/error/StatusError";

export const metadata: Metadata = {
  title: "PANDAWA",
  description: "Pantau Sumber Daya Alam Bondowoso",
};

export default function NotFound() {
  return <ErrorPage type="404" />;
}