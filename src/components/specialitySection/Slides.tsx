"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { getIndustries } from "@/helpers";
import { useLocale } from "next-intl";
import { Industry } from "@/types";

export const industriesdithoutTitleAndText: Industry[] = [
    {
        id: 1,
        img1: "/images/speciality/saber.png",
        img2: "/images/speciality/poulpe.png",
    },
    {
        id: 2,

        img1: "/images/speciality/calamar.png",
        img2: "/images/speciality/sardine.png",
    },
    {
        id: 3,

        img1: "/images/speciality/sepia.png",
        img2: "/images/speciality/almendrita.png",
    },
    {
        id: 4,

        img1: "/images/speciality/puntilla.png",
        img2: "/images/speciality/maquerau.png",
    },
     
];

export default function Sliders() {
    const language = useLocale() as "fr" | "en";
    const [industries, setIndustries] = useState<Industry[]>();

    useEffect(() => {
        const fetchIndustries = async () => {
            const industriess = await getIndustries(language);
            setIndustries(industriess);
        };
        fetchIndustries();
    }, [language]);
    // 0d4472
    // 1e93e2

    return (
        <div className="w-full mx-auto mt-12 py-10">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                grid={{
                    rows: 2,
                }}
                loop={true}
                autoplay={{ delay: 22000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 }, // For mobile, 1 slide per view
                    1024: { slidesPerView: 2 }, // For screen widths >= 1024px, 2 slides per view
                    1524: { slidesPerView: 3 }, // For screen widths >= 1524px, 3 slides per view
                }}
                className="h-fit md:h-[850px] w-full"
            >
                {industries?.map((industry) => (
                    <SwiperSlide key={industry.id}>
                        <main className="shadow[0px_8px_24px_#d7d1d1] space-y-5 cursor-grab">
                            <div className=" flex flex-col justify-center sm:w-full sm:flex-row gap-3 overflow-hidden">
                                <Image
                                    width={380}
                                    height={300}
                                    priority
                                    src={industry.img1}
                                    alt={industry?.title1 || "Industry Image"}
                                    className=" h-[300px] w-full sm:h-[350px] sm:w-[50%]  object-cover px-2"
                                />
                                <div className={` ${industry.id % 2 === 0 ? "text-primary":"text-white"} flex flex-col justify-center p-3 md:p-6   lg:p-3 sm:w-[50%] bg-cover bg-center ${industry.id % 2 === 0 ? "bg-bg_image_spec_white":"bg-bg_image_spec_dark"}`}>
                                    {/* {industry.icons} */}
                                    <h3 className="text-xl md:text-2xl lg:text-xl   font-semibold capitalize ">
                                        {industry.title1}
                                    </h3>
                                    <h4 className=" ">
                                    {industry.scentific1}
                                    </h4>
                                    <p className={`mt-5 text-sm   ${industry.id % 2 !== 0 ? "font-thin":"font-normal"}`}>
                                        {industry.text1}
                                    </p>
                                    
                                </div>
                            </div>
                            <div className=" flex flex-col justify-center sm:w-full sm:flex-row gap-3   overflow-hidden">
                                <Image
                                    width={380}
                                    height={300}
                                    priority
                                    src={industry.img2}
                                    alt={industry?.title2 || "Industry Image"}
                                    className=" h-[300px] w-full sm:h-[350px] sm:w-[50%] object-cover px-2"
                                />
                                <div className={`${industry.id % 2 === 0 ? "text-white":"text-primary"} flex flex-col justify-center p-3 md:p-6  sm:w-[50%] bg-cover bg-center ${industry.id % 2 === 0 ? "bg-bg_image_spec_dark":"bg-bg_image_spec_white"}   lg:p-3`}>
                                    <h3 className="text-xl md:text-2xl lg:text-xl   font-semibold capitalize ">
                                        {industry.title2}
                                    </h3>
                                    <h4 className=" ">
                                    {industry.scentific2}
                                    </h4>
                                    <p className={`mt-5 text-sm   ${industry.id % 2 === 0 ? "font-thin":"font-normal"}`}>
                                        {industry.text2}
                                    </p>
                                </div>
                            </div>
                        </main>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
