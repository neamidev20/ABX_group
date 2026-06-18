import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
export default function CoreValues() {
    const t = useTranslations("about_section");
    return (
        <>
            <h2 className="text-lg md:text-4xl py-3 text-[#1d1d1d]">
                {t("part_two.title")}
            </h2>
            <ul className="grid md:grid-cols-2 gap-y-5 xl:text-xl">
                <li className="flex items-center gap-3 w-fit">
                    {" "}
                    <Image
                        className=""
                        src="/icons/check.svg"
                        width={30}
                        height={30}
                        alt="fish"
                    />{" "}
                    <p className="whitespace-nowrap text-xs md:text-base">
                        {t("part_two.core_one")}
                    </p>
                </li>
                <li className="flex items-center gap-3 ">
                    {" "}
                    <Image
                        className=""
                        src="/icons/check.svg"
                        width={30}
                        height={30}
                        alt="fish"
                    />
                    <p className="whitespace-nowrap text-xs md:text-base">
                        {t("part_two.core_two")}
                    </p>
                </li>
                <li className="flex items-center gap-3 ">
                    {" "}
                    <Image
                        className=""
                        src="/icons/check.svg"
                        width={30}
                        height={30}
                        alt="fish"
                    />
                    <p className="whitespace-nowrap text-xs md:text-base">
                        {t("part_two.core_three")}
                    </p>
                </li>
                <li className="flex items-center gap-3  flex-nowrap">
                    {" "}
                    <Image
                        className=""
                        src="/icons/check.svg"
                        width={30}
                        height={30}
                        alt="fish"
                    />
                    <p className="whitespace-nowrap text-xs md:text-base">
                        {" "}
                        {t("part_two.core_four")}
                    </p>
                </li>
            </ul>
        </>
    );
}
