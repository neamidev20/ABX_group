import React from "react";
import Carts from "./Carts";
import { useTranslations } from "next-intl";

export default function Products() {
    const t = useTranslations("products_section");
    return (
        <section
            id="services"
            className="w-full min-h-screen flex flex-col justify-center bg-bg_image_products py-10"
        >
            <h1 className="text-xl md:text-3xl lg:text-4xl text-center py-16">
                <span className=" font-light text-primary">{t("title.part_one")}</span>{" "}
                <span className="font-bold text-primary">{t("title.part_two")}</span>
            </h1>
            <Carts/>
        </section>
    );
}
