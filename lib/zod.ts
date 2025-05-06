import { object, string } from "zod";

export const LogInSchema = object ({
    email: string().email("Invalid Email"),
    password: string()
        .min(8, "Pass")
        .max(32, "Pass")
})