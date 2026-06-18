// Function to dynamically import the translation file based on language
export async function loadTranslations(language: "en" | "fr" | "es") {
    const translations = await import(`../../messages/${language}.json`);
    return translations;
}

export const getNavLinks = async (language: "en" | "fr" | "es") => {
    const navTranslations = await loadTranslations(language);

    return [
        { name: navTranslations.navbar.home, href: "#home" },
        { name: navTranslations.navbar.about, href: "#about-us" },
        { name: navTranslations.navbar.specialties, href: "#specialties" },
        { name: navTranslations.navbar.services, href: "#services" },
        { name: navTranslations.navbar.products, href: "#products" },
        { name: navTranslations.navbar.contact, href: "#contact-us" },
    ];
};

import { industriesdithoutTitleAndText } from "@/components/specialitySection/Slides";
import { Industry, Products } from "@/types";

export async function getIndustries(language: "en" | "fr" | "es") {
    const translations = await loadTranslations(language);

    const mergedIndustries = industriesdithoutTitleAndText.map((industry) => {
        const translatedSlide = translations.speciality_section.slides.find(
            (slide: Industry) => slide.id === industry.id
        );

        return {
            ...industry,
            title1: translatedSlide?.title1 || industry.title1,
            text1: translatedSlide?.text1 || industry.text1,
            title2: translatedSlide?.title2 || industry.title2,
            text2: translatedSlide?.text2 || industry.text2,
            scentific1: translatedSlide?.scentific1 || industry.scentific1,
            scentific2: translatedSlide?.scentific2 || industry.scentific2,
        };
    });
    return mergedIndustries;
}

export const ProductsInfo: Products[] = [
    {
        id: 1,
        img: "/images/speciality/saber.png",
    },
    {
        id: 2,
        img: "/images/speciality/poulpe.png",
    },
    {
        id: 3,
        img: "/images/speciality/calamar.png",
    },
    {
        id: 4,
        img: "/images/speciality/sardine.png",
    },
    {
        id: 5,
        img: "/images/speciality/sepia.png",
    },
    {
        id: 6,
        img: "/images/speciality/almendrita.png",
    },
    {
        id: 7,
        img: "/images/speciality/maquerau.png",
    },
    {
        id: 8,
        img: "/images/speciality/puntilla.png",
    },
];

export async function getProductsContent(language: "en" | "fr" | "es") {
    const translations = await loadTranslations(language);

    const mergedProducts = ProductsInfo.map((productInfo) => {
        
        const translatedCart = translations.products_section.carts.find(
            (cart: Products) => cart.id === productInfo.id
        );

        return {
            ...productInfo,
            title: translatedCart?.title || productInfo.title,
            text: translatedCart?.text || productInfo.text,
            scentific: translatedCart?.scentific || productInfo.scentific,
        };
    });
    return mergedProducts;
}
