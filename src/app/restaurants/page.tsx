"use client";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import FloatingButton from "../components/FloatingButton";
import AmbientLightLite from "../components/AmbientLightLite";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "@/data/restaurants";

export default function RestaurantsPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Quick load trigger instead of heavy GSAP with delays
        const t = setTimeout(() => {
            setIsLoaded(true);
        }, 10);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="bg-white min-h-screen text-zinc-900 antialiased selection:bg-orange-100 selection:text-orange-900 overflow-hidden relative">
            <Navbar />
            <FloatingButton />
            <AmbientLightLite />

            <main className="pt-32 pb-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header - Fast CSS Animations */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50/80 backdrop-blur-sm mb-6 transition-all duration-500 hover:bg-white hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{ transitionDelay: "0.1s" }}
                        >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 animate-pulse"></span>
                            <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">Selected List</span>
                        </div>

                        <h1 className="font-serif-display text-5xl md:text-7xl font-medium text-zinc-950 mb-6 leading-tight">
                            <span
                                className={`block transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.15s" }}
                            >
                                รวมร้านอาหาร
                            </span>
                            <span
                                className={`block bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-transparent italic transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.25s" }}
                            >
                                ที่คัดสรรมาเพื่อคุณ
                            </span>
                        </h1>

                        <p
                            className={`text-zinc-500 max-w-lg mx-auto font-light leading-relaxed text-lg transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "0.35s" }}
                        >
                            สำรวจร้านอาหารที่ดีที่สุดในย่าน ตั้งแต่ Street Food ไปจนถึง Fine Dining ที่เราอยากให้คุณได้ลอง
                        </p>
                    </div>

                    {/* Restaurant Grid - Staggered CSS Animations */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                        {restaurants.map((restaurant, index) => {
                            const isLarge = index % 9 === 0 || index % 9 === 5 || index % 9 === 7;

                            return (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                                    style={{ transitionDelay: `${0.4 + index * 0.05}s` }}
                                >
                                    <RestaurantCard
                                        data={restaurant}
                                        className={isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>

        </div>
    );
}
