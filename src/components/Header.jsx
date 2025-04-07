"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        {
            href: "",
            name: "Home",
        },
        {
            href: "",
            name: "Products",
        },
        {
            href: "",
            name: "Services",
        },
        {
            href: "",
            name: "About us",
        },
    ];
    return (
        <header>
            <div className="bg-bg-highlight flex justify-center text-xs md:text-base items-center gap-x-3 py-2 text-black">
                <p className="font-semibold flex   gap-x-2">
                    <img src="/assets/icons/percent.svg" alt="percent_image" />
                    30% off storewide — Limited time!
                </p>
                <p className="flex font-medium gap-x-1  border-b border-black">
                    Shop Now
                    <img
                        src="/assets/icons/right-arrow.svg"
                        alt="right-arrow-image"
                    />
                </p>
            </div>
            <div className="bg-bg-primery">
                <div className="flex w-[90%] mx-auto justify-between items-center py-4">
                    <Image
                        src={"/assets/logos/logo2.png"}
                        alt="company-logo"
                        height={40}
                        width={500}
                        className="w-30 h-10 object-contain"
                    />
                    <nav className="flex-1 flex justify-center gap-18">
                        {navLinks.map(({ href, name }) => (
                            <Link
                                key={name}
                                className="text-xl text-black font-medium font-sans hidden md:block"
                                href={href}
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>
                    {isMenuOpen ? (
                        <IoCloseSharp
                            className="block md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    ) : (
                        <FiMenu
                            className="block md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    )}
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute z-50 w-full bg-bg-primery px-4 py-6 shadow-md ">
                    <nav className="flex flex-col items-center gap-6 text-lg font-medium">
                        {navLinks.map(({ href, name }) => (
                            <Link
                                key={name}
                                href={href}
                                className="text-black"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
