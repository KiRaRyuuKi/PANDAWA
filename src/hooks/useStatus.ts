"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

type ErrorCode = 404 | 500 | 503 | "maintenance" | "success";

export default function useCustomError() {
    const router = useRouter();

    const throwError = useCallback((code: ErrorCode, message?: string) => {
        let errorPath: string;
        let errorMessage = message;

        switch (code) {
            case 404:
                errorPath = "/not-found";
                break;
            case 500:
                errorPath = "/error?code=500";
                if (!errorMessage) errorMessage = "Internal server error";
                break;
            case 503:
                errorPath = "/error?code=503";
                if (!errorMessage) errorMessage = "Service unavailable";
                break;
            case "maintenance":
                errorPath = "/error?code=maintenance";
                if (!errorMessage) errorMessage = "System under maintenance";
                break;
            case "success":
                errorPath = "/success";
                break;
            default:
                errorPath = "/error";
        }

        if (errorMessage) {
            errorPath += errorPath.includes("?")
                ? `&message=${encodeURIComponent(errorMessage)}`
                : `?message=${encodeURIComponent(errorMessage)}`;
        }

        router.push(errorPath);
    }, [router]);

    const throwNotFound = useCallback((message?: string) => {
        throwError(404, message);
    }, [throwError]);

    const throwServerError = useCallback((message?: string) => {
        throwError(500, message);
    }, [throwError]);

    const throwServiceUnavailable = useCallback((message?: string) => {
        throwError(503, message);
    }, [throwError]);

    const throwMaintenance = useCallback((message?: string) => {
        throwError("maintenance", message);
    }, [throwError]);

    const showSuccess = useCallback((message?: string) => {
        throwError("success", message);
    }, [throwError]);

    return {
        throwError,
        throwNotFound,
        throwServerError,
        throwServiceUnavailable,
        throwMaintenance,
        showSuccess
    };
}