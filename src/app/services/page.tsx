"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AmbientLightLite from "../components/AmbientLightLite";
import RestaurantCard from "../components/RestaurantCard";
import MapModal from "../components/MapModal";
import { services } from "@/data/services";

export default function ServicesPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    useEffect(() => {
        const t = setTimeout(() => {
            setIsLoaded(true);
        }, 10);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="bg-white min-h-screen text-zinc-900 antialiased selection:bg-orange-100 selection:text-orange-900 overflow-hidden relative">
            <Navbar />
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
                            <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">Service Directory</span>
                        </div>

                        <h1 className="font-serif-display text-5xl md:text-7xl font-medium text-zinc-950 mb-6 leading-tight">
                            <span
                                className={`block transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.15s" }}
                            >
                                รวมร้านบริการ
                            </span>
                            <span
                                className={`block bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-transparent italic transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.25s" }}
                            >
                                ใกล้บ้านคุณ
                            </span>
                        </h1>

                        <p
                            className={`text-zinc-500 max-w-lg mx-auto font-light leading-relaxed text-lg transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "0.35s" }}
                        >
                            รวมบริการครบครันในย่าน ไม่ว่าจะซักผ้า ตัดผม หรือซ่อมรถ เราช่วยคุณหาได้ง่ายๆ
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                        {services.map((service, index) => {
                            const isLarge = index % 9 === 0 || index % 9 === 5 || index % 9 === 7;

                            return (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                                    style={{ transitionDelay: `${0.4 + index * 0.05}s` }}
                                >
                                    <RestaurantCard
                                        data={service}
                                        className={isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"}
                                        onClick={() => setSelectedService(service)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>

            {/* Map Modal */}
            <MapModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                restaurantName={selectedService?.name || ""}
                location={selectedService?.location || ""}
                mapEmbedUrl={selectedService?.mapEmbedUrl}
            />

        </div>
    );
}
