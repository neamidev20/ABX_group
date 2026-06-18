
import { useTranslations } from "next-intl";
import Carts from "./Carts";


export default function Services() { 
    const t = useTranslations("services_section");

    return (
        <section
            id="services"
            className="w-full min-h-screen flex flex-col justify-center bg-bg_image_services py-10"
        >
            <h1 className="text-xl md:text-3xl lg:text-5xl text-center text-white">
                <span className=" font-light">{t("title.part_one")}</span>{" "}
                <span className="font-bold">{t("title.part_two")}</span>
            </h1>
             <Carts/>
        </section>
    );
}
