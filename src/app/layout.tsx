import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const josefin = Josefin_Sans({
    variable: "--font-josefin",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
    title: "APX Group - Seafood Export & Processing",
    description:
        "Leading Moroccan company specializing in seafood export, processing, and packaging, ensuring quality, freshness, and sustainability.",
    icons: {
        icon: "/icons/group-logo.svg",
    },
    openGraph: {
        type: "website",
        title: "APX Group - Seafood Export & Processing",
        description:
            "Leading Moroccan company specializing in seafood export, processing, and packaging, ensuring quality, freshness, and sustainability.",
        url: "https://www.apxgroup.com",
        images: "/icons/logo.svg",
        siteName: "APX Group",
    },
    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1",
    keywords:
        "seafood export, fish processing, Moroccan seafood, sustainable fishing, frozen seafood, seafood packaging",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
     return (
        <html lang="en">
            <body className={`${josefin.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
