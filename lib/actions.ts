"use server";

import { LogInSchema } from "./zod";
import { signIn } from "./auth";
import { redirect } from "next/navigation";

function isAuthError(error: unknown): error is { type: string } {
    return typeof error === "object" && error !== null && "type" in error;
}

export async function loginAction(formData: FormData) {
    const validateFields = LogInSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validateFields.success) {
        return {
            error: validateFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validateFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        redirect("/dashboard");
    } catch (error) {
        if (isAuthError(error)) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Email atau password salah" };
                default:
                    return { error: "Terjadi kesalahan saat login" };
            }
        }

        return { error: "Terjadi kesalahan saat login" };
    }
}

export async function loginWithGoogle() {
    try {
        await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
        return { error: "Terjadi kesalahan saat login dengan Google" };
    }
}
