import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { AuthSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    pages: { signIn: "/auth" },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const validatedfields = AuthSchema.safeParse(credentials);

                if (!validatedfields.success) {
                    return null;
                }

                const { email, password } = validatedfields.data;

                const user = await prisma.user.findUnique({
                    where: { email }
                });

                if (!user || user.password !== password) {
                    throw new Error("No user found");
                }

                const passwordMatch = compareSync(password, user.password);

                if (!passwordMatch) return null;

                return user;
            }
        })
    ],
})