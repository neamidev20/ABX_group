import Image from "next/image";
import MasonryGallery from "./MasonryGallery";
import { useTranslations } from "next-intl";
const images = [
    "/images/about/img3.png",
    "/images/about/img2.png",
    "/images/about/img5.png",
    "/images/about/img1.png",
    "/images/about/img8.png",

    "/images/about/img6.png",
    "/images/about/img10.png",
    "/images/about/img4.png",
];
export default function CompanyGallery() {
    const t = useTranslations("about_section.company_gallery");
    return (
        <section className="flex flex-col text-secondary  gap-8 justify-center items-center py-16">
            <p className="text-xs md:text-base  text-center px-4 lg:px-16">
                {t("desc")}
            </p>

            <ul className="flex flex-wrap justify-center items-center gap-10">
                <li className="flex flex-col items-center gap-3 w-fit">
                    {" "}
                    <Image
                        className="fill-primary w-[50px] lg:w-[80px]"
                        src="/icons/about/validate.svg"
                        width={80}
                        height={25}
                        alt="fish"
                    />{" "}
                    <p className="whitespace-nowrap text-xs md:text-base">
                        {t("feats.one")}
                    </p>
                </li>
                <li className="flex flex-col items-center gap-3 ">
                    {" "}
                    <Image
                        className=" w-[50px] lg:w-[80px]"
                        src="/icons/about/boat.svg"
                        width={80}
                        height={25}
                        alt="fish"
                    />
                    <p className="whitespace-nowrap text-xs md:text-base">
                        {t("feats.two")}
                    </p>
                </li>
                <li className="flex flex-col items-center gap-3 ">
                    {" "}
                    <Image
                        className=" w-[50px] lg:w-[80px]"
                        src="/icons/about/earth.svg"
                        width={80}
                        height={25}
                        alt="fish"
                    />
                    <p className="whitespace-nowrap text-xs md:text-base">
                        {t("feats.three")}
                    </p>
                </li>
                <li className="flex flex-col items-center gap-3  flex-nowrap">
                    {" "}
                    <Image
                        className=" w-[50px] lg:w-[80px]"
                        src="/icons/about/packaging.svg"
                        width={80}
                        height={25}
                        alt="fish"
                        priority
                    />
                    <p className="whitespace-nowrap text-xs md:text-base">
                        {" "}
                        {t("feats.four")}
                    </p>
                </li>
            </ul>
            <div className="p-6">
                <h1 className="text-xl md:text-3xl   text-center mb-6">
                    <span className=" font-light text-primary">
                        {t("title.part_one")}
                    </span>{" "}
                    <span className="font-bold text-primary">
                        {t("title.part_two")}
                    </span>
                </h1>
                <MasonryGallery images={images} />
            </div>
        </section>
    );
}
