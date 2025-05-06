"use server";

import { LogInSchema } from "./zod";
import { SignIn } from "./auth";
import { error } from "console";
import { object } from "zod";

export const LogInCredentials = async(formData: FormData) => {
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
        await SignIn("credentials", { email, password, redirect: "/pages" })
    } catch (error: any) {
        if (error?.message === "CredentialsSignin") {
            return { message: "Invalid Credentials" };
        }

        return { message: "Something went wrong" };
    }

}