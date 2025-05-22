"use client";

import ErrorPage from "@/components/status/Error";
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