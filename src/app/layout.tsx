import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Dumsa Wedding",
    description: "Dumsa Wedding Invitation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <head></head>
            <body>{children}</body>
        </html>
    );
}
