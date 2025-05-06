import { object, string } from "zod";

export const AuthSchema = object({
    email: string().email("Email tidak valid"),
    password: string()
        .min(8, "Password minimal 8 karakter")
        .max(32, "Password maksimal 32 karakter")
});