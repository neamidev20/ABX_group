"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function PersVideo() {
    const [playing, setPlaying] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (playing && videoRef.current) {
            videoRef.current.muted = true; // Mute initially
            videoRef.current
                .play()
                .then(() => {
                    setTimeout(() => {
                        if (videoRef.current) {
                            videoRef.current.muted = false;
                        }
                    }, 500);
                })
                .catch((error) => console.error("Autoplay blocked:", error));
        }
    }, [playing]); // Run when `playing` changes
    const handlePlay = () => {
        setPlaying(true);
    };
    return (
        <section className="pt-20 flex flex-col gap-10  justify-center items-center">
            <h1 className="text-xl md:text-3xl p-6 text-center">
                <span className="font-bold text-primary">ABXGROUP:</span>{" "}
                <span className=" font-light text-primary">
                    Your Trusted Partner in Fish Export
                </span>{" "}
            </h1>{" "}
            <div className="relative flex justify-center items-center px-5">
                {!playing && (
                    <>
                        <Image
                            width={200}
                            height={200}
                            src="/images/thumbnail-img.png" // Your thumbnail image
                            alt="Video Thumbnail"
                            className="w-full h-[250px] md:h-[410px]  lg:h-[700px]"
                        />
                        <Image
                            className=" absolute cursor-pointer w-[40px] opacity-70 md:w-[80px] lg:w-[90px]"
                            width={100}
                            height={100}
                            src="/icons/play-icon.svg" // Your thumbnail image
                            alt="Video Thumbnail"
                            onClick={handlePlay} // Click to play the video
                        />
                    </>
                )}

                {playing && (
                    <>
                        <video
                            ref={videoRef}
                            src="/videos/abx-group.mp4"
                            controls
                            className="w-full lg:h-[700px]"
                        />
                    </>
                )}
            </div>
        </section>
    );
}
