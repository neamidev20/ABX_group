import { useTranslations } from "next-intl";
import PersVideo from "./PersVideo";
import CoreValues from "./CoreValues";
import LeftImg from "./LeftImg";
import PrimaryTitle from "./PrimaryTitle";
import CompanyGallery from "./CompanyGallery";
export default function Info() {
    const t = useTranslations("about_section");
    return (
        <div
            id="about-us"
            className="w-full  py-16 flex flex-col items-center justify-center "
        >
            <main className="flex flex-col lg:w-[90%] 2xl:w-[65%]">
                <div className="flex flex-col lg:flex-row gap-16 ">
                    <LeftImg />
                    <section className="p-4 md:p-9 lg:py-0 relative lg:w-[70%]">
                        <div className="">
                            {/* title */}
                            <PrimaryTitle />
                            {/* desctiption */}
                            <h1 className="text-lg md:text-4xl text-[#1d1d1d]">
                                {t("part_one.title")}
                            </h1>
                            <div className=" gap-6 text-[#5c5c5c]">
                                <p className="py-3 text-sm md:text-base">
                                    <span className="font-semibold">
                                        ABXGROUP
                                    </span>{" "}
                                    {t("part_one.desc_one")}
                                </p>
                                <p className="text-sm md:text-base">
                                    {t("part_one.desc_two.part_one")}
                                    <span className="font-semibold">
                                        ABXGROUP
                                    </span>{" "}
                                    {t("part_one.desc_two.part_two")}
                                </p>
                                <CoreValues />
                            </div>
                        </div>
                    </section>
                </div>
                <PersVideo />
                <CompanyGallery />
            </main>
        </div>
    );
}
