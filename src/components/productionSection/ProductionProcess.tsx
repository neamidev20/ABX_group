import { useTranslations } from "next-intl";

export default function ProductionProcess() {
    const t = useTranslations("production_section");
    return (
        <section className=" flex flex-col   items-center py-20 md:px- ">
            <h1 className="text-xl md:text-3xl lg:text-4xl py-6 text-center">
                <span className=" font-light text-primary">
                    {t("title.part_one")}
                </span>{" "}
                <span className="font-bold text-primary">
                    {t("title.part_two")}
                </span>
            </h1>
            <div className="w-full hidden  min-[1104px]:flex justify-evenly 2xl:px-16   relative my-8 gap-x-10"></div>
            <ul className="relative  text-[#1d1d1d] flex flex-wrap justify-center items-start text-sm md:text-base gap-10 px-3">
                <div className="border-b hidden  min-[1104px]:flex border-[#dbd9d9] w-full top-2.5 absolute" />
                <li className="flex flex-col max-w-80 justify-center items-center gap-5">
                    <span className="bg-primary w-5 h-5 rounded-full z-10 hidden  min-[1104px]:flex"></span>
                    <span className="text-7xl lg:text-9xl font-thin text-primary">
                        01
                    </span> 
                    <h2 className=" md:text-lg 2xl:text-xl uppercase">
                        {t("carts.cart_one.title")}
                    </h2>
                    <p className="text-[#4c4c4c] max-w-80 text-center">
                        {t("carts.cart_one.desc")}
                    </p>
                </li>
                <li className="flex flex-col max-w-80 justify-center items-center gap-5">
                    <span className="bg-[#79a1bb] w-5 h-5 rounded-full z-10 hidden  min-[1104px]:flex"></span>
                    <span className="text-7xl lg:text-9xl font-thin text-[#79a1bb]">
                        02
                    </span>
                    <h2 className="md:text-lg 2xl:text-xl uppercase">
                        {t("carts.cart_two.title")}
                    </h2>
                    <p className="text-[#4c4c4c] max-w-80 text-center  ">
                        {t("carts.cart_two.desc")}
                    </p>
                </li>{" "}
                <li className="flex flex-col max-w-80 justify-center items-center gap-5">
                    {/* hidden min-[1464px]:block */}
                    <span className="bg-[#577587] w-5 h-5 rounded-full z-10 hidden  min-[1104px]:flex"></span>
                    <span className="text-7xl lg:text-9xl font-thin text-[#577587]">
                        03
                    </span>
                    <h2 className="md:text-lg 2xl:text-xl uppercase">
                        {t("carts.cart_three.title")}
                    </h2>
                    <p className="text-[#4c4c4c] max-w-80 text-center  ">
                        {t("carts.cart_three.desc")}
                    </p>
                </li>
                <li className="flex flex-col max-w-80 justify-center items-center gap-5">
                    <span className="bg-[#0d395e] w-5 h-5 rounded-full z-10 hidden min-[1464px]:block"></span>
                    <span className="text-7xl lg:text-9xl font-thin text-[#0d395e]">
                        04
                    </span>
                    <h2 className="md:text-lg 2xl:text-xl uppercase">
                        {t("carts.cart_four.title")}
                    </h2>
                    <p className="text-[#4c4c4c] max-w-80 text-center lg:order-5">
                        {t("carts.cart_four.desc")}
                    </p>
                </li>
            </ul>
        </section>
    );
}
