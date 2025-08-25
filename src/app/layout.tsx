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
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
            </head>
            <body
                style={{
                    width: "100%",
                }}
            >
                {children}
            </body>
        </html>
    );
}
