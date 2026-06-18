"use client";
import { getProductsContent } from "@/helpers";
import { Products } from "@/types";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import PopUp from "./PopUp";

export default function Carts() {
    const language = useLocale() as "fr" | "en" | "es";
    const [products, setProducts] = useState<Products[]>();
    const [showPopUp, setShowPopUp] = useState(false);
    const [productId, setProductId] = useState<number>();

    useEffect(() => {
        const fetchIndustries = async () => {
            const allProducts = await getProductsContent(language);
            setProducts(allProducts);
        };
        fetchIndustries();
    }, [language]);
    return (
        <section className="flex justify-center items-center relative">
            <ul className="flex flex-wrap justify-center items-center gap-10 px-2 w-full md:w-[85%] 2xl:w-[65%] ">
                {products?.map((product, index) => {
                    return (
                        <li
                            key={index}
                            className="flex justify-between md:gap-3 items-center w-[340px] md:w-[530px] 2xl:w-[550px]"
                        >
                            <Image
                                className="w-[80px] md:w-[100px]"
                                src={product.img}
                                width={100}
                                height={100}
                                alt="product"
                            />
                            <div>
                                <div className="flex flex-col md:flex-row text-sm">
                                    <h1 className="md:text-lg">
                                        {product.title}
                                    </h1>{" "}
                                    <div className=" hidden md:flex border-r-2 border-[#888] w-2 h-5 mx-1 " />
                                    <h2 className="text-xs text-secondary md:text-base">
                                        {product.scentific}
                                    </h2>
                                </div>
                                <p className="text-secondary hidden md:flex text-xs md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Odit a inventore nulla
                                    temporibus ut porro architecto! Corrupti
                                    expedita pariatur dignissimos earum
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <span className="text-[#363535]">35 $</span>
                                <button
                                    onClick={() => {
                                        setShowPopUp(true);
                                        setProductId(product.id);
                                    }}
                                    className="text-white bg-primary px-2 py-1 text-sm"
                                >
                                    Deatils
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {showPopUp && productId !== undefined && (
                <PopUp
                    handleShowPopUp={setShowPopUp}
                    product={products?.[productId]}
                />
            )}
        </section>
    );
}
