"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SideNavLink from "./side-nav-link";
import SideNavButton from "./side-nav-button";

const SideNav = () => {
    const { data: session, status } = useSession();

    console.log(session);

    return (
        <div className="sticky top-0 self-start px-6 py-4 border-r-2 border-zinc-200 min-h-screen w-full max-w-[240px]">
            <div className="flex flex-col items-start gap-y-2 whitespace-nowrap">
                <SideNavLink href={"/"}>Home</SideNavLink>
                {status === "authenticated" && session.user ? (
                    <>
                        <SideNavLink href={`/profiles/${session.user.id}`}>
                            Profile
                        </SideNavLink>

                        <SideNavButton onClick={() => void signOut()}>
                            Sign Out
                        </SideNavButton>
                    </>
                ) : (
                    <>
                        <SideNavButton onClick={() => void signIn("discord")}>
                            Sign In
                        </SideNavButton>
                    </>
                )}
            </div>
        </div>
    );
};

export default SideNav;
