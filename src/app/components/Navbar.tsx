"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

import Magnetic from "./Magnetic";
import SearchOverlay from "./SearchOverlay";

const navLinks = [
    { href: "/", label: "หน้าแรก" },
    { href: "/restaurants", label: "ร้านอาหาร" },
    { href: "/services", label: "ร้านบริการ" },
    { href: "/about", label: "เกี่ยวกับเรา" },
    { href: "/contact", label: "ติดต่อเรา" },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });

        return () => ctx.revert();
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Keyboard shortcut: Ctrl+K or Cmd+K to open search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <div className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center pointer-events-none px-3 md:px-4">
                <nav ref={navRef} className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-zinc-200/20 rounded-full px-2 py-2 flex items-center justify-between gap-3 md:gap-12 w-full md:min-w-[600px] max-w-4xl transition-all duration-300">

                    {/* Logo */}
                    <div className="pl-4 md:pl-6">
                        <Link href="/" className="font-serif-display text-lg md:text-xl font-bold text-zinc-900 tracking-tight hover:text-orange-600 transition-colors">
                            Provisions.
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center bg-zinc-100/50 rounded-full p-1 border border-zinc-200/30">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${pathname === link.href
                                        ? "bg-white text-zinc-900 shadow-sm"
                                        : "text-zinc-600 hover:bg-white hover:text-zinc-900 hover:shadow-sm"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1.5 md:gap-2 pr-1 md:pr-2">
                        {/* Search Button */}
                        <Magnetic>
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-white hover:shadow-md transition-all duration-300 group"
                                aria-label="ค้นหา"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-[18px] md:h-[18px] group-hover:scale-110 transition-transform">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </button>
                        </Magnetic>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden w-9 h-9 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-white hover:shadow-md transition-all duration-300"
                            aria-label="เมนู"
                        >
                            <div className="flex flex-col gap-[4px] items-center justify-center w-4">
                                <span
                                    className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-4 rotate-45 translate-y-[5.5px]" : "w-4"
                                        }`}
                                />
                                <span
                                    className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-3"
                                        }`}
                                />
                                <span
                                    className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "w-4 -rotate-45 -translate-y-[5.5px]" : "w-4"
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-zinc-950/50 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ animation: "mobileMenuFadeIn 0.2s ease-out" }}
                    />

                    {/* Menu Panel */}
                    <div
                        className="absolute top-20 left-3 right-3 bg-white rounded-2xl shadow-2xl shadow-zinc-900/20 border border-zinc-100 overflow-hidden"
                        style={{ animation: "mobileMenuSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    >
                        <div className="p-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${pathname === link.href
                                            ? "bg-orange-50 text-orange-600"
                                            : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 active:bg-zinc-100"
                                        }`}
                                >
                                    {pathname === link.href && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                    )}
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Search shortcut in mobile menu */}
                        <div className="border-t border-zinc-100 p-2">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setTimeout(() => setIsSearchOpen(true), 100);
                                }}
                                className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-200 w-full active:bg-zinc-100"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                    <path d="m21 21-4.35-4.35" strokeWidth="2" />
                                </svg>
                                ค้นหาร้าน...
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Overlay */}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Mobile Menu Animations */}
            <style jsx global>{`
                @keyframes mobileMenuFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes mobileMenuSlideDown {
                    from { opacity: 0; transform: translateY(-10px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </>
    );
}
