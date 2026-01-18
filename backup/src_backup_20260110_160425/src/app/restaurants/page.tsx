"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../components/Magnetic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { restaurants } from "@/data/restaurants";

gsap.registerPlugin(ScrollTrigger);

export default function RestaurantsPage() {
    const cardsRef = useRef<HTMLDivElement>(null);
    const lightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Reveal (Kinetic Typography)
            gsap.to(".hero-title-line", {
                y: 0,
                duration: 1.8,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.2,
            });

            gsap.from(".page-content-animate", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.8
            });

            gsap.from(".restaurant-card", {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "opacity,transform"
            });
        });

        // Interactive Light Effect
        const handleMouseMove = (e: MouseEvent) => {
            if (!lightRef.current) return;
            const { clientX, clientY } = e;
            const x = (clientX - window.innerWidth / 2) * 0.1;
            const y = (clientY - window.innerHeight / 2) * 0.1;

            gsap.to(lightRef.current, {
                x: x,
                y: y,
                duration: 2,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            ctx.revert();
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="bg-white min-h-screen text-zinc-900 antialiased selection:bg-orange-100 selection:text-orange-900 overflow-hidden relative">
            <Navbar />

            {/* Background ambient light - Interactive */}
            <div ref={lightRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[100px] -z-10 pointer-events-none transition-transform duration-1000 ease-out will-change-transform mix-blend-screen"></div>

            <main className="pt-40 pb-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 page-title flex flex-col items-center">
                        <div className="page-content-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 mb-6 transition-colors hover:bg-white hover:border-orange-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Selected List</span>
                        </div>

                        <h1 className="font-serif-display text-5xl md:text-7xl font-medium text-zinc-950 mb-6 leading-tight flex flex-col items-center">
                            <div className="overflow-hidden px-2 pt-4 -mt-4">
                                <span className="hero-title-line block translate-y-full">รวมร้านอาหาร</span>
                            </div>
                            <div className="overflow-hidden px-2 pt-4 -mt-4">
                                <span className="hero-title-line block text-zinc-400 italic translate-y-full">ที่คัดสรรมาเพื่อคุณ</span>
                            </div>
                        </h1>

                        <p className="page-content-animate text-zinc-500 max-w-lg mx-auto font-light leading-relaxed text-lg">
                            สำรวจร้านอาหารที่ดีที่สุดในย่าน ตั้งแต่ Street Food ไปจนถึง Fine Dining ที่เราอยากให้คุณได้ลอง
                        </p>
                    </div>

                    <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                        {restaurants.map((restaurant, index) => {
                            const isLarge = index % 9 === 0 || index % 9 === 5 || index % 9 === 7;

                            return (
                                <div
                                    key={index}
                                    className={`restaurant-card group flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-200/80 hover:border-orange-200/80 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-500 cursor-pointer ${isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"
                                        }`}
                                >
                                    <div className={`relative overflow-hidden w-full ${isLarge ? "aspect-[2/1]" : "aspect-[4/3]"}`}>
                                        <Image
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            width={isLarge ? 800 : 400}
                                            height={isLarge ? 400 : 300}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-900 shadow-sm border border-zinc-100/50">
                                            {restaurant.status}
                                        </div>
                                        {restaurant.badge && (
                                            <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/10 ${restaurant.badge === "ใหม่"
                                                ? "bg-orange-500 text-white"
                                                : "bg-zinc-900 text-white"
                                                }`}>
                                                {restaurant.badge}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col flex-1 relative bg-white">
                                        <div className="mb-4">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className={`font-serif-display font-medium text-zinc-900 group-hover:text-orange-600 transition-colors duration-300 ${isLarge ? "text-2xl" : "text-lg"}`}>
                                                    {restaurant.name}
                                                </h3>
                                                <div className="flex items-center gap-1 text-xs font-bold text-zinc-400 bg-zinc-100 px-2 py-1 rounded-full">
                                                    {restaurant.price}
                                                </div>
                                            </div>
                                            <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide">{restaurant.cuisine}</p>
                                        </div>

                                        <p className={`text-zinc-500 mb-8 leading-relaxed font-light ${isLarge ? "text-base line-clamp-3" : "text-sm line-clamp-2"}`}>
                                            {restaurant.description}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between pt-5 border-t border-zinc-100/80">
                                            <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium group-hover:text-zinc-900 transition-colors">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500">
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {restaurant.location}
                                            </div>

                                            <Magnetic>
                                                <button className="w-10 h-10 -mr-2 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 shadow-sm">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform">
                                                        <path d="M5 12h14" />
                                                        <path d="m12 5 7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </Magnetic>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
