import Link from "next/link";
import { ReactNode } from "react";

const SideNavLink = ({
    children,
    href,
}: {
    children: ReactNode;
    href: string;
}) => {
    return (
        <Link
            href={href}
            className="px-4 py-2 rounded-sm bg-zinc-100 hover:bg-zinc-200 font-semibold transition cursor-pointer w-full"
        >
            {children}
        </Link>
    );
};

export default SideNavLink;
