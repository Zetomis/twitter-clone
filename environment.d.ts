import { NextAuth } from "next-auth/next";

namespace NodeJS {
    interface ProcessEnv {
        DISCORD_CLIENT_ID: string;
        DISCORD_CLIENT_SECRET: string;
        SECRET: string;
    }
}

declare module "next-auth" {
    interface Session {
        user: {
            email: string;
            name: string;
            imageUrl: string;
            id: string;
        };
    }
}
