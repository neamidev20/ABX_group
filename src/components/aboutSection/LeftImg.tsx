import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

export default function LeftImg() {
    const t = useTranslations("about_section");
  return (
    <>
     <div className=" lg:w-[30%] h-fit relative flex justify-end items-center ">
                        <div className="absolute  w-[250px] lg:-right-16">
                            <div className="relative lg:flex hidden justify-center ">
                                <div className="absolute flex flex-col items-center gap-2 justify-center">
                                    <Image
                                        // className="h-[200px]"
                                        src="/images/fish-80.svg"
                                        width={110}
                                        height={110}
                                        alt="fish"
                                    />
                                    <span className="text-xl font-thin text-white text-center flex">
                                        60+ <br /> {t("text")}
                                    </span>
                                </div>{" "}
                                <Image
                                    className=" h-[200px] object-cover"
                                    src="/images/fish-20.svg" 
                                    width={1900}
                                    height={300}
                                    alt="fish"
                                    priority
                                />
                            </div>
                        </div>
                        <Image
                            className="object-cover object-bottom  h-[300px] lg:w-[830px] lg:h-[470px] bg-center "
                            src="/images/fish-35.jpg"
                            width={1900}
                            height={300}
                            alt="fish"
                            priority
                        />
                    </div></>
  )
}
