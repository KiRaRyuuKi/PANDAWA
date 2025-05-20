import NextAuth from "next-auth"
import { prisma } from "@/lib/prisma"
import { AuthSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"
import { NextResponse } from "next/server"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    pages: { signIn: "/auth" },
    providers: [
        Google,
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

                return {
                    id: user.id
                };
            }
        })
    ],

    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const protectedRoutes = ["/dashboard", "/kecamatan", "/commodity", "/penduduk", "/prediction", "/profile"];

            if (!isLoggedIn && protectedRoutes.includes(nextUrl.pathname)) {
                return NextResponse.redirect(new URL("/auth", nextUrl))
            }

            if (isLoggedIn && nextUrl.pathname.startsWith("/auth")) {
                return Response.redirect(new URL("/dashboard", nextUrl))
            }

            return true;
        },

        jwt({ token, user }) {
            if (user) token.email = user.email ?? "";
            return token;
        },

        session({ session, token }) {
            session.user.id = token.sub;
            session.user.email = token.email ?? "";
            return session;
        }
    }
})
