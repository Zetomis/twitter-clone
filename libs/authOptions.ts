import { AuthOptions } from "next-auth";

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

export default authOptions;
