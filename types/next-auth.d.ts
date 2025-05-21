import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
        } & DefaultSession['user'];
    }

    interface User {
        email?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        sub: string;
        email?: string;
    }
}