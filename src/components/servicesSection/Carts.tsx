import { useTranslations } from "next-intl";

export default function Carts() {
    const t = useTranslations("services_section");
    return (
        <section>
            <ul className="flex flex-wrap justify-center items-center pt-16 text-sm md:text-base gap-y-10 md:gap-y-0 pb-10">
                <li className="flex flex-col bg-bg_image_serv-1 max-w-[350px] md:w-[350px] px-3 h-[320px]  md:h-[420px] text-sm md:text-base pt-8 items-center gap-5">
                    <span className="text-7xl lg:text-9xl font-thin text-[#1d1d1d] ">
                        01
                    </span>
                    <h2 className=" text-lg 2xl:text-xl text-primary">
                       {t("carts.cart_one.title")}
                    </h2>
                    <p className="text-[#4c4c4c] max-w-80 text-center">
                    {t("carts.cart_one.desc")}
                    </p>
                </li>
                <li className="flex flex-col text-white bg-primary max-w-[400px] px-3 md:w-[400px] h-[380px] md:h-[480px]  pt-8 items-center gap-5">
                    <span className="text-7xl lg:text-9xl font-thin  ">
                        02
                    </span>
                    <h2 className=" text-lg 2xl:text-xl text-center  ">
                    {t("carts.cart_two.title")}
                    </h2>
                    <p className="  max-w-80 text-center">
                    {t("carts.cart_two.desc")}
                    </p>
                </li>
                <li className="flex flex-col bg-bg_image_serv-2  max-w-[350px] md:w-[350px] px-3 h-[320px] md:h-[420px]  pt-8 items-center gap-5">
                    <span className="text-7xl lg:text-9xl font-thin text-[#1d1d1d] ">
                        03
                    </span>
                    <h2 className=" text-lg 2xl:text-xl text-primary">
                    {t("carts.cart_three.title")}
                    </h2>
                    <p className="text-[#4c4c4c] max-w-80 text-center">
                    {t("carts.cart_three.desc")}
                    </p>
                </li>
            </ul>
        </section>
    );
}
