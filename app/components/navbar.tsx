"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Home, Briefcase, LogIn, UserRound } from 'lucide-react';
import clsx from "clsx";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation items with titles, links, and icons
    const navItems = [
        { title: "Home", href: "/", icon: <Home /> },
        { title: "Services", href: "#", icon: <Briefcase /> },
        { title: "Log In", href: "/login", icon: <LogIn /> },
        { title: "Sign Up", href: "/signup", icon: <UserRound /> }
    ];

    return (
        <main className="flex justify-between items-center py-6 px-5 max-w-7xl mx-auto w-full">
            {/* Desktop Navigation */}
            <nav className="md:flex md:w-full md:justify-between md:items-center md:font-bold">
                {/* Logo */}
                <div className="text-2xl font-bold md:text-3xl">Worklify<span className="text-[#14E2A1]">.</span></div>

                {/* Desktop Menu Items */}
                <div className="hidden md:text-[24px] md:flex md:justify-between md:items-center md:gap-12 font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={clsx(
                                "font-semibold text-base text-black active:text-[#14E2A1] transition-colors",
                                {
                                    "text-[#14E2A1]": pathname === item.href,
                                    "hidden md:flex md:justify-center md:w-[6.5rem] md:h-14 md:px-[16px] md:py-[8px] md:text-white md:items-center md:bg-black md:rounded-[5px] md:text-lg": item.title === "Sign Up"
                                }
                            )}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
                aria-label="Toggle menu"
            >
                <div className="relative w-10 h-10">
                    <Bars3Icon
                        className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'} h-10 w-10 text-gray-900`}
                        strokeWidth={2}
                    />
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:hidden`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Sliding Menu */}
            <div
                className={`fixed rounded-tl-[10px] rounded-bl-[10px] top-0 right-0 h-screen w-64 bg-[#F6F5FA]/50 transform transition-transform duration-300 ease-in-out 
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                shadow-lg z-50 lg:hidden backdrop-blur-lg`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <XMarkIcon
                            className="h-10 w-10 text-gray-900"
                            strokeWidth={2}
                        />
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="px-8 pt-8">
                    <div className="flex flex-col space-y-8 justify-start">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={clsx(
                                    "font-semibold text-base text-black active:text-[#14E2A1] transition-colors",
                                    { "text-[#14E2A1]": pathname === item.href }
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="flex gap-2">
                                    {item.icon}
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </main>
    );
}