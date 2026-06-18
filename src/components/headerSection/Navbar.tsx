"use client";
import { getNavLinks } from "@/helpers";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [navLinks, setNavLinks] = useState<{ name: string; href: string }[]>(
        []
    );

    const language = useLocale() as "en" | "fr";
    useEffect(() => {
        const fetchNavLinks = async () => {
            const links = await getNavLinks(language);
            setNavLinks(links);
        };

        fetchNavLinks();
    }, [language]);
    return (
        <nav className="hidden md:flex justify-between items-center">
            <ul className="flex items-center gap-1 lg:gap-3 xl:gap-6 cursor-pointer capitalize">
                {navLinks?.map((link, index) => {
                    return (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="hover:text-primary font-medium duration-150 text-sm lg:text-base"
                            >
                                {link.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
