import "./globals.css";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import ProviderSession from "@/components/providers/provider-session";
import Container from "@/components/container";
import SideNav from "@/components/side-nav/side-nav";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ProviderSession>
                    <Container>
                        <SideNav />
                        {children}
                    </Container>
                </ProviderSession>
            </body>
        </html>
    );
};

export default RootLayout;
