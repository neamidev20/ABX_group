import React from "react";
import { useTranslations } from "next-intl";
import Sliders from "./Slides";

export default function Speciality() {
    const t = useTranslations("speciality_section");

    return (
        <section
            className="w-full min-h-screen flex flex-col justify-center py-10 md:py-20 "
        >
            <h1 className="text-xl md:text-3xl lg:text-4xl text-center">
                <span className=" font-light text-primary">{t("title.part_one")}</span>{" "}
                <span className="font-bold text-primary">{t("title.part_two")}</span>
            </h1>
            <Sliders />
        </section>
    );
}
