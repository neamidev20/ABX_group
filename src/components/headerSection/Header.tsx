"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Languages from "./Languages";
import { AlignJustifyIcon, X } from "lucide-react";
import NavbarMobile from "./NavbarMobile";
import Image from "next/image";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // Add event listener for scroll

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showMobileMenu]);

    return (
        <>
            <section
                className={`z-20 fixed w-full flex flex-col items-center bg-white`}
            >
                <div
                    className={`relative w-[95%] md:w-[85%]  2xl:w-[65%] text-[#1d1d1d]  flex justify-between items-center `}
                >
                    {/* logo */}
                    <Image
                        className="w-[90px] md:w-[120px] h-auto"
                        src="/icons/logo.svg"
                        alt="Logo"
                        width={200}
                        height={60}
                        priority
                    />

                    <div
                        className={`flex items-center gap-2 md:gap-10 xl:gap-14`}
                    >
                        {" "}
                        <Navbar />
                        <Languages />
                        {showMobileMenu ? (
                            <X
                                onClick={() =>
                                    setShowMobileMenu(!showMobileMenu)
                                }
                                className="cursor-pointer md:hidden hover:text-black"
                            />
                        ) : (
                            <AlignJustifyIcon
                                onClick={() =>
                                    setShowMobileMenu(!showMobileMenu)
                                }
                                className="cursor-pointer md:hidden hover:text-black"
                            />
                        )}
                    </div>
                </div>

                {showMobileMenu && <NavbarMobile handleShowMobileMenu={setShowMobileMenu} />}
            </section>
        </>
    );
}
