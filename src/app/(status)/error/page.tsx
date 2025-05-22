"use client";

import ErrorPage from "@/components/status/StatusError";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function DynamicErrorPage() {
    const searchParams = useSearchParams();
    const code = searchParams.get("code") || "500";
    const message = searchParams.get("message") || undefined;

    useEffect(() => {
        console.log(`Displaying error page: ${code}, message: ${message}`);
    }, [code, message]);

    return (
        <ErrorPage
            type={code}
            message={message}
        />
    );
}