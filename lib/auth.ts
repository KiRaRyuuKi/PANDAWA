import NextAuth from "next-auth"
import { Prisma } from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter" 
import Credentials from "next-auth/providers/credentials"
import { LogInSchema } from "./zod"
import { compareSync } from "bcrypt-ts"

export const { Handlers, SignIn, SignOut, Auth } = NextAuth({
    adapter: PrismaAdapter(Prisma),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/auth",
    },
    providers: [
        Credentials ({
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

                if(!user || !user.password) {
                    throw new Error("Not found")
                }

                const passwordMatch = compareSync(password, user.password);

                if(!passwordMatch) return null;

                return user;
            }
        })
    ],
})