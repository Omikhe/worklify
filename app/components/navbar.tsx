"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Home, Briefcase, LogIn, UserRound } from 'lucide-react';
import clsx from "clsx";

// Type definition for navigation items
interface NavItem {
    title: string;
    href: string;
    icon: React.ReactNode;
}

export default function Navbar() {
    // Hook to get current pathname for active link highlighting
    const pathname = usePathname();

    // State to manage mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation items with consistent structure
    const navItems: NavItem[] = [
        { title: "Home", href: "/", icon: <Home /> },
        { title: "Services", href: "/services", icon: <Briefcase /> },
        { title: "Log In", href: "/login", icon: <LogIn /> },
        { title: "Sign Up", href: "/signup", icon: <UserRound /> }
    ];

    // Close mobile menu
    const handleMenuClose = () => setIsMenuOpen(false);

    // Toggle mobile menu
    const handleMenuToggle = () => setIsMenuOpen(prev => !prev);

    return (
        <header className="sticky top-0 z-50 bg-white flex justify-between items-center py-6 px-5 max-w-7xl mx-auto w-full text-[#05120E]">
            {/* Navigation container */}
            <nav className="md:flex md:w-full md:justify-between md:items-center md:font-bold">
                {/* Logo with accent */}
                <Link
                    href="/"
                    className="text-2xl font-bold md:text-3xl"
                >
                    Worklify<span className="text-[#14E2A1]">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:text-[24px] lg:flex md:justify-between md:items-center md:gap-12 font-medium">
                    {navItems.map((item) => (
                        <DesktopNavLink
                            key={item.title}
                            item={item}
                            currentPath={pathname}
                            onClose={handleMenuClose}
                        />
                    ))}
                </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <MobileMenuToggle
                isMenuOpen={isMenuOpen}
                onToggle={handleMenuToggle}
            />

            {/* Mobile Menu Overlay */}
            <MobileMenuOverlay
                isMenuOpen={isMenuOpen}
                onClose={handleMenuClose}
            />

            {/* Mobile Sliding Menu */}
            <MobileSlidingMenu
                isMenuOpen={isMenuOpen}
                navItems={navItems}
                currentPath={pathname}
                onClose={handleMenuClose}
            />
        </header>
    );
}

// Desktop Navigation Link Component
interface DesktopNavLinkProps {
    item: NavItem;
    currentPath: string | null;
    onClose: () => void;
}

const DesktopNavLink: React.FC<DesktopNavLinkProps> = ({
    item,
    currentPath,
    onClose
}) => (
    <Link
        href={item.href}
        className={clsx(
            "font-semibold text-base text-black hover:text-[#0BB574] transition-colors",
            {
                "text-[#0BB574]": currentPath === item.href,
                "hidden md:flex md:justify-center md:w-auto md:h-auto md:px-[16px] md:py-[8px] md:text-white md:items-center md:bg-[#05120E] md:rounded-[5px] md:text-lg": item.title === "Sign Up"
            }
        )}
        onClick={onClose}
    >
        {item.title}
    </Link>
);

// Mobile Menu Toggle Component
interface MobileMenuToggleProps {
    isMenuOpen: boolean;
    onToggle: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
    isMenuOpen,
    onToggle
}) => (
    <button
        onClick={onToggle}
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
);

// Mobile Menu Overlay Component
interface MobileMenuOverlayProps {
    isMenuOpen: boolean;
    onClose: () => void;
}

const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({
    isMenuOpen,
    onClose
}) => (
    <div
        className={`fixed inset-0 bg-black/20 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:hidden`}
        onClick={onClose}
    />
);

// Mobile Sliding Menu Component
interface MobileSlidingMenuProps {
    isMenuOpen: boolean;
    navItems: NavItem[];
    currentPath: string | null;
    onClose: () => void;
}

const MobileSlidingMenu: React.FC<MobileSlidingMenuProps> = ({
    isMenuOpen,
    navItems,
    currentPath,
    onClose
}) => (
    <div
        className={`fixed rounded-tl-[10px] rounded-bl-[10px] top-0 right-0 h-screen w-64 bg-[#F6F5FA]/50 transform transition-transform duration-300 ease-in-out 
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        shadow-lg z-50 lg:hidden backdrop-blur-lg`}
    >
        {/* Close Button */}
        <div className="flex justify-end p-4">
            <button
                onClick={onClose}
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
                            "font-semibold text-base text-black active:text-[#0BB574] transition-colors",
                            { "text-[#0BB574]": currentPath === item.href }
                        )}
                        onClick={onClose}
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
);