"use client";

import { signIn } from "next-auth/react";

const RootPage = () => {
    return (
        <div>
            RootPage
            <button onClick={() => signIn("discord")}>
                Sign in with Discord
            </button>
        </div>
    );
};

export default RootPage;
