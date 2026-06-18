import Contact from "@/components/contactSection/Contact";
import Footer from "@/components/footerSection/Footer";
import Hero from "@/components/heroSection/Hero";
import About from "@/components/aboutSection/About";
import Speciality from "@/components/specialitySection/Speciality";
import ProductionProcess from "@/components/productionSection/ProductionProcess";
import Services from "../../components/servicesSection/Services";
import { routing } from "@/i18n/routing";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Products from "@/components/productsSection/Products";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
export default function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    console.log("locale", locale);
    setRequestLocale(locale);
    return (
        <section className="flex flex-col">
            <Hero />
            <div className="w-full bg-cover bg-center bg-bg_image_info  py-16 flex flex-col">
                <About />
                <ProductionProcess />
                <Speciality />
            </div>
            <Services />
            <Products />
            <Contact />
            <Footer />
        </section>
    );
}
