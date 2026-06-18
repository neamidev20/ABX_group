import { Products } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
interface PopUpProps {
    handleShowPopUp: (show: boolean) => void;
    product?: Products;
}

export default function PopUp({ handleShowPopUp, product }: PopUpProps) {
    return (
        <section className="w-full   h-screen bg-[#3333337e] shadow-lg fixed top-0 z-20 flex justify-center items-center ">
            <div className="w-fit  lg:w-[700px] h-auto bg-white rounded-xl relative">
                {" "}
                <X
                    className="absolute right-3 top-3 cursor-pointer bg-secondary md:bg-transparent hover:bg-secondary hover:text-white rounded duration-200"
                    onClick={() => {
                        handleShowPopUp(false);
                    }}
                />
                <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center">
                    <Image
                        className="w-[350px] rounded-t-xl  md:rounded-l-lg md:rounded-r-none"
                        src={product?.img || ""}
                        width={500}
                        height={500}
                        alt="product"
                    />
                    <ul className="w-full flex flex-col px-7 md:px-16 text-sm  gap-4 py-6 md:py-0">
                        <li className="text-primary text-xl md:text-2xl py-1 ">{product?.title}</li>
                        <li>N.S <br/> <span className="text-secondary">Asidia</span> </li>
                        <li>Code FAO <br/> <span className="text-secondary">OAL</span> </li>
                        <li>Code SH <br/> <span className="text-secondary">07890091</span> </li>
                        <li>Zone FAO <br/> <span className="text-secondary">34</span> </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
