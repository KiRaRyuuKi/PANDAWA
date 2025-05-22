"use client";

import ErrorPage from "@/components/status/StatusError";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
    const searchParams = useSearchParams();
    const message = searchParams.get("message") || "Operation completed successfully!";

    return (
        <ErrorPage
            type="success"
            message={message}
            buttonText="Continue"
            buttonLink="/"
        />
    );
}