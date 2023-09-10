import { ReactNode } from "react";

const SideNavButton = ({
    children,
    onClick,
}: {
    children: ReactNode;
    onClick: () => void;
}) => {
    return (
        <button
            type="button"
            className="px-4 py-2 rounded-sm bg-zinc-100 hover:bg-zinc-200 font-semibold transition cursor-pointer w-full text-left"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SideNavButton;
