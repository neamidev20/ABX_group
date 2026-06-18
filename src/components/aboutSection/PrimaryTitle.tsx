import Image from "next/image";
import React from "react";

export default function PrimaryTitle() {
    return (
        <>
            <div className="flex items-center gap-3">
                {" "}
                <Image
                    className=""
                    src="/icons/small-fish-right.svg"
                    width={30}
                    height={30}
                    alt="fish"
                />
                <h2 className="text-[#5c5c5c] py-6 font-semibold">ABXGROUP</h2>
                <Image
                    className=""
                    src="/icons/small-fish-left.svg"
                    width={30}
                    height={30}
                    alt="fish"
                />
            </div>
        </>
    );
}
