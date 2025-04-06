"use client";

import { useEffect, useState } from "react";

const Hero = () => {
    const heroDatas = [
        {
            bg: "/assets/images/hero_bg_one.jpeg",
            title: "আপনার স্বপ্নের বায়োফ্লক ব্যবসা শুরু হোক আমাদের বিশ্বস্ত সমাধানের সাথে!",
            description:
                "সেরা মানের পণ্য | আধুনিক প্রযুক্তি | সর্বোচ্চ লাভের নিশ্চয়তা",
            btnText: "শুরু করুন আজই",
            cardBg: "/assets/images/card_bg_one.jpeg",
        },
        {
            bg: "/assets/images/hero_bg_two.jpeg",
            title: "আমাদের সাথে আপনার বায়োফ্লক ব্যবসার উন্নতি নিশ্চিত করুন!",
            description:
                "বিশ্বস্ত সরবরাহকারী | উন্নত প্রযুক্তি | লাভজনক সমাধান",
            btnText: "এখনই শুরু করুন",
            cardBg: "/assets/images/card_bg_one.jpeg",
        },
        {
            bg: "/assets/images/hero_bg_three.jpeg",
            title: "বিশ্বস্ত এবং লাভজনক বায়োফ্লক সমাধান - আজই শুরু করুন!",
            description:
                "সেরা মানের পণ্য | আধুনিক প্রযুক্তি | সর্বোচ্চ লাভের নিশ্চয়তা",
            btnText: "শুরু করুন আজই",
            cardBg: "/assets/images/card_bg_one.jpeg",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % heroDatas.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const heroData = heroDatas[index];

    return (
        <div
            style={{ backgroundImage: `url(${heroData.bg})` }}
            className="relative bg-cover bg-center min-h-screen w-full flex items-center justify-center mt-6"
        >
            <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10">
                <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight drop-shadow-md">
                        {heroData.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold drop-shadow">
                        {heroData.description}
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div
                        style={{ backgroundImage: `url(${heroData.cardBg})` }}
                        className="relative bg-cover bg-center h-[300px] sm:h-[350px] w-[90%] sm:w-[80%] rounded-2xl shadow-2xl overflow-hidden transition-all duration-500"
                    >
                        <div className="absolute bottom-5 inset-x-0 flex justify-center">
                            <button className="bg-[#EDA415] hover:bg-[#d49213] text-white text-base sm:text-lg font-bold px-6 py-2 rounded-full shadow-lg transition duration-300">
                                {heroData.btnText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 inset-x-0 flex justify-center gap-3">
                {heroDatas.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-16 rounded-full transition-all duration-300 ${
                            index === i ? "bg-gray-700" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Hero;
