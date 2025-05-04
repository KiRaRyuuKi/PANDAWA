"use client";

import ErrorPage from "@/components/status/error/StatusError";
import { useEffect } from "react";

interface GlobalErrorProps {
    error: Error;
    reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    useEffect(() => {
        // Log error ke layanan analitik atau monitoring
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <ErrorPage
                    type="500"
                    title="Critical Error"
                    message="A critical error has occurred. Our team has been notified."
                    buttonText="Try Again"
                    buttonLink="#"
                />
            </body>
        </html>
    );
}