"use client";

import ErrorPage from "@/components/status/error/StatusError";
import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    let errorType = "500";

    if (error.message.includes("503")) {
        errorType = "503";
    } else if (error.message.includes("maintenance")) {
        errorType = "maintenance";
    }

    return (
        <ErrorPage
            type={errorType}
            buttonText="Try Again"
            buttonLink="#"
            message={error.message}
        />
    );
}