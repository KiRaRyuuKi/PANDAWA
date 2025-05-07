import NextAuth from "next-auth"
import { prisma } from "@/lib/prisma"
import { AuthSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"

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

                if (!user || !user.password) {
                    return null;
                }

                const passwordMatch = compareSync(password, user.password);

                if (!passwordMatch) {
                    return null;
                }

                return user;
            }
        })
    ],
})