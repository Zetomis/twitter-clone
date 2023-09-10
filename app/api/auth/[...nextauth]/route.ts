import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import DiscordProvider from "next-auth/providers/discord";

const authOptions: AuthOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
    callbacks: {},
    secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
