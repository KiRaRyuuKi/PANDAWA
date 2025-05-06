import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { LogInSchema } from "./zod"
import { compareSync } from "bcrypt-ts"
import { Prisma } from "./prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(Prisma),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/auth",
        error: "/auth"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const validateFields = LogInSchema.safeParse(credentials);

                if (!validateFields.success) {
                    return null;
                }

                const { email, password } = validateFields.data;

                const user = await Prisma.user.findUnique({
                    where: { email }
                })

                if (!user || !user.password) {
                    throw new Error("User tidak ditemukan")
                }

                const passwordMatch = compareSync(password, user.password);

                if (!passwordMatch) {
                    throw new Error("Password tidak valid")
                }

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        }
    },
    debug: process.env.NODE_ENV === "development",
})