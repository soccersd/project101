"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import Magnetic from "./Magnetic";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

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

    return (
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none px-4">
            <nav ref={navRef} className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-zinc-200/20 rounded-full px-2 py-2 flex items-center justify-between gap-6 md:gap-12 min-w-[320px] md:min-w-[600px] max-w-4xl transition-all duration-300">

                {/* Logo */}
                <div className="pl-6">
                    <Link href="/" className="font-serif-display text-xl font-bold text-zinc-900 tracking-tight hover:text-orange-600 transition-colors">
                        Provisions.
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center bg-zinc-100/50 rounded-full p-1 border border-zinc-200/30">
                    <Link href="/restaurants" className="px-5 py-2 rounded-full text-xs font-medium text-zinc-600 hover:bg-white hover:text-zinc-900 hover:shadow-sm transition-all duration-300">
                        ร้านอาหาร
                    </Link>

                    <Link href="/categories" className="px-5 py-2 rounded-full text-xs font-medium text-zinc-600 hover:bg-white hover:text-zinc-900 hover:shadow-sm transition-all duration-300">
                        ประเภทอาหาร
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pr-2">
                    <Magnetic>
                        <button className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-white hover:shadow-md transition-all duration-300 group">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                        </button>
                    </Magnetic>
                    <Magnetic>
                        <Link href="/restaurants" className="hidden sm:flex h-10 px-5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider items-center hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                            รายชื่อ 2026
                        </Link>
                    </Magnetic>
                </div>
            </nav>
        </div>
    );
}
