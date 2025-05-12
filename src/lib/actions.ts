"use server"

import { AuthSchema } from "./zod";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signIn } from "@/api/auth/auth";

export const AuthCredentials = async (
    prevState: { error?: string } | undefined,
    formData: FormData
) => {
    const validatedFields = AuthSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            error: 'Invalid fields',
            details: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;

    try {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        if (result?.error) {
            if (result.error === "CredentialsSignin") {
                return { error: "Invalid credentials. Please try again." };
            }
            return { error: result.error };
        }

        redirect("/dashboard");
        return { success: true };

    } catch (error) {
        console.error("Log in error:", error);

        if (error instanceof AuthError) {
            if (error.message.includes("AccessDenied")) {
                return { error: "Account not activated. Please check your email." };
            }
            return { error: error.message || "Authentication failed." };
        }

        return { error: "An unexpected error occurred. Please try again." };
    }
};