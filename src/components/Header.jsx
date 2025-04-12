"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", name: "Home" },
        { href: "/products", name: "Products" },
        { href: "/services", name: "Services" },
        { href: "/about-us", name: "About us" },
    ];

    return (
        <header className="shadow-sm transition-all duration-300">
            <div className="bg-bg-highlight flex font-noto justify-center text-xs md:text-base items-center gap-x-3 py-2 text-black px-4">
                <p className="font-semibold flex gap-x-2 items-center animate-fade-in">
                    <img
                        src="/assets/icons/percent.svg"
                        alt="percent"
                        className="w-4 h-4"
                    />
                    30% off storewide — Limited time!
                </p>
                <p className="flex items-center font-medium gap-x-1 border-b border-black cursor-pointer hover:opacity-80 transition-opacity duration-300">
                    Shop Now
                    <img
                        src="/assets/icons/right-arrow.svg"
                        alt="arrow"
                        className="w-3 h-3"
                    />
                </p>
            </div>

            <div className="bg-bg-primery">
                <div className="flex max-container px-4 justify-between items-center py-4">
                    <Image
                        src="/assets/logos/logo2.png"
                        alt="company-logo"
                        height={40}
                        width={500}
                        className="w-32 h-10 object-contain transition-opacity duration-500 opacity-90 hover:opacity-100"
                    />

                    <nav className="flex-1 justify-center hidden md:flex gap-10 transition-all">
                        {navLinks.map(({ href, name }) => (
                            <Link
                                key={name}
                                href={href}
                                className={`text-lg font-medium font-lato transition-all duration-300 hover:text-green-600 ${
                                    pathname === href
                                        ? "border-b-2 border-green-500 pb-1"
                                        : ""
                                }`}
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block transition-transform hover:scale-110 duration-200">
                        <FaCartPlus size={25} />
                    </div>

                    <div className="flex items-center gap-6 md:hidden">
                        <FaCartPlus
                            size={25}
                            className="transition-transform hover:scale-110 duration-200"
                        />
                        {isMenuOpen ? (
                            <IoCloseSharp
                                size={25}
                                className="transition-transform hover:scale-110 duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ) : (
                            <FiMenu
                                size={25}
                                className="transition-transform hover:scale-110 duration-200"
                                onClick={() => setIsMenuOpen(true)}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden absolute z-50 w-full bg-bg-primery/90 backdrop-blur-sm px-4 py-6 shadow-md animate-fadein transition-all  ${
                    isMenuOpen
                        ? "top-full opacity-100"
                        : "-top-96 opacity-0 pointer-events-none"
                }`}
            >
                <nav className="flex flex-col items-center gap-6 text-lg font-medium">
                    {navLinks.map(({ href, name }) => (
                        <Link
                            key={name}
                            href={href}
                            className={`text-black font-poppins transition-all duration-200 hover:text-green-600 ${
                                pathname === href
                                    ? "border-b-2 border-green-500 pb-1"
                                    : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
