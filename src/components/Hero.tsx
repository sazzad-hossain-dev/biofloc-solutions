"use client";

import CustomBtn from "@/components/ui/CustomBtn";
import { HeroDatas } from "@/data";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    // Store the start time of the animation
    const startRef = useRef<number>(0);
    const frameRef = useRef<number>(0);

    // Throttle click navigation
    const handleSetIndex = (i: number) => {
        if (i !== index && !isChanging) {
            setIsChanging(true);
            setIndex(i);
            setTimeout(() => setIsChanging(false), 800); // match animation duration
        }
    };

    const heroData = HeroDatas[index];

    // Replace setInterval with requestAnimationFrame for smoother auto change
    useEffect(() => {
        const updateSlide = (timestamp: number) => {
            if (!startRef.current) startRef.current = timestamp; // Set initial timestamp
            const elapsed = timestamp - startRef.current;

            if (elapsed >= 10000) {
                // 10 seconds for the slide change
                setIndex((prevIndex) => (prevIndex + 1) % HeroDatas.length);
                startRef.current = timestamp; // Reset start time for the next cycle
            }

            frameRef.current = requestAnimationFrame(updateSlide); // Continue the frame loop
        };

        frameRef.current = requestAnimationFrame(updateSlide);

        return () => cancelAnimationFrame(frameRef.current); // Cleanup on component unmount
    }, []);

    return (
        <div
            className="relative w-full h-screen flex-center"
            role="region"
            aria-label="Hero Slider"
        >
            {/* Background Image */}
            <Image
                src={heroData.bg}
                alt={heroData.title}
                fill
                priority
                className="object-cover object-center z-[-1]"
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Animate content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="max-container flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10"
                >
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-6">
                        <h1 className="drop-shadow-md font-noto">
                            {heroData.title}
                        </h1>
                        <h4 className="drop-shadow font-noto ">
                            {heroData.description}
                        </h4>
                    </div>

                    {/* Right Card */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative h-[300px] sm:h-[350px] w-[90%] sm:w-[80%] rounded-2xl shadow-2xl overflow-hidden transition-all duration-500">
                            <Image
                                src={heroData.cardBg}
                                alt={heroData.title}
                                fill
                                priority
                                className="object-cover object-center z-[-1]"
                                sizes="(max-width: 768px) 90vw, 40vw"
                            />
                            <div className="absolute bottom-5 inset-x-0 font-noto flex justify-center">
                                <CustomBtn title={heroData.btnText} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 inset-x-0 flex justify-center gap-3">
                {HeroDatas.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleSetIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 w-16 rounded-full transition-all duration-300 ${
                            index === i ? "bg-gray-700" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>

            {/* Preload next slide image for smoother transition */}
            <link
                rel="preload"
                as="image"
                href={HeroDatas[(index + 1) % HeroDatas.length].bg}
            />
            <link
                rel="preload"
                as="image"
                href={HeroDatas[(index + 1) % HeroDatas.length].cardBg}
            />
        </div>
    );
};

export default Hero;
