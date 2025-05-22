import GridShape from "@/components/common/GridShape";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ErrorType = "404" | "500" | "503" | "maintenance" | "success" | string;

interface ErrorPageProps {
    type: ErrorType;
    title?: string;
    message?: string;
    buttonText?: string;
    buttonLink?: string;
}

const errorMessages: Record<ErrorType, string> = {
    "404": "We can't seem to find the page you are looking for!",
    "500": "Internal server error. Please try again later.",
    "503": "Service temporarily unavailable. Please try again later.",
    "maintenance": "We're currently undergoing scheduled maintenance. Please check back soon.",
    "success": "Operation completed successfully!",
};

const errorTitles: Record<ErrorType, string> = {
    "404": "Page Not Found",
    "500": "Server Error",
    "503": "Service Unavailable",
    "maintenance": "Maintenance Mode",
    "success": "Success",
};

// Custom image dimensions for specific error types
const imageConfig: Record<string, { width: number; height: number }> = {
    "404": { width: 472, height: 152 },
    "500": { width: 472, height: 152 },
    "503": { width: 472, height: 152 },
    "maintenance": { width: 172, height: 152 },
    "success": { width: 172, height: 152 },
    "default": { width: 472, height: 152 }
};

export default function ErrorPage({
    type,
    title,
    message,
    buttonText = "Back to Home Page",
    buttonLink = "/",
}: ErrorPageProps) {
    const errorTitle = title || errorTitles[type] || "Error";
    const errorMessage = message || errorMessages[type] || "An error has occurred.";
    const imagePath = `/images/error/${type}`;

    // Get image dimensions based on error type or use default
    const { width, height } = imageConfig[type] || imageConfig.default;

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
            <GridShape />
            <div className="mx-auto w-full max-w-[472px] text-center sm:max-w-[672px]">
                <h1 className="mb-12 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
                    {errorTitle}
                </h1>

                <Image
                    src={`${imagePath}.svg`}
                    alt={type}
                    className="dark:hidden mx-auto"
                    width={width}
                    height={height}
                />
                <Image
                    src={`${imagePath}-dark.svg`}
                    alt={type}
                    className="hidden dark:block mx-auto"
                    width={width}
                    height={height}
                />

                <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
                    {errorMessage}
                </p>

                <Link
                    href={buttonLink}
                    className="inline-flex items-center justify-center rounded-3xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                >
                    {buttonText}
                </Link>
            </div>
            <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
                &copy; {new Date().getFullYear()} - PANDAWA
            </p>
        </div>
    );
}