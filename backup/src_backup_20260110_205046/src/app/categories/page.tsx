"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AmbientLightLite from "../components/AmbientLightLite";

// หมวดหมู่อาหารใหม่ตามที่กำหนด
const categories = [
    {
        id: "savory",
        name: "อาหารคาว",
        description: "อาหารหลักที่รับประทานในแต่ละมื้อ ประกอบด้วยกับข้าวต่างๆ",
        image: "/images/food1.jpg",
        count: 45,
    },
    {
        id: "single-dish",
        name: "อาหารจานเดียว",
        description: "อาหารที่ครบมื้อในจานเดียว ทานง่าย อิ่มท้อง",
        image: "/images/food2.jpg",
        count: 32,
    },
    {
        id: "snacks",
        name: "อาหารว่าง",
        description: "อาหารที่นิยมรับประทานระหว่างมื้อ หรือในงานพิธีต่างๆ",
        image: "/images/food3.jpg",
        count: 28,
    },
    {
        id: "desserts",
        name: "ของหวานไทย",
        description: "ขนมหวานไทยแท้ ทั้งแบบน้ำและแบบแห้ง",
        image: "/images/food4.jpg",
        count: 24,
    },
    {
        id: "drinks",
        name: "เครื่องดื่มไทย",
        description: "เครื่องดื่มสมุนไพรและเครื่องดื่มไทยโบราณ",
        image: "/images/food5.jpg",
        count: 18,
    },
    {
        id: "regional-north",
        name: "อาหารพื้นบ้านภาคเหนือ",
        description: "แกงฮังเล, ข้าวซอย, น้ำพริกอ่อง, ไส้อั่ว",
        image: "/images/north.jpg",
        count: 12,
    },
    {
        id: "regional-isan",
        name: "อาหารพื้นบ้านภาคอีสาน",
        description: "ส้มตำ, ลาบ, น้ำตก, แจ่ว, ไก่ย่าง",
        image: "/images/isan.jpg",
        count: 15,
    },
    {
        id: "regional-central",
        name: "อาหารพื้นบ้านภาคกลาง",
        description: "แกงเขียวหวาน, ผัดไทย, ต้มยำ, มัสมั่น",
        image: "/images/central.jpg",
        count: 20,
    },
    {
        id: "regional-south",
        name: "อาหารพื้นบ้านภาคใต้",
        description: "แกงไตปลา, ข้าวยำ, คั่วกลิ้ง, แกงเหลือง",
        image: "/images/south.jpg",
        count: 10,
    },
];

export default function CategoriesPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="bg-white min-h-screen text-zinc-900 antialiased selection:bg-blue-100 selection:text-blue-900 overflow-hidden relative">
            <Navbar />
            <AmbientLightLite />

            <main className="pt-32 pb-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header Section */}
                    <div className="text-center mb-20 flex flex-col items-center">
                        <div
                            className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm mb-6 shadow-sm transition-all duration-500 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{ transitionDelay: "0.1s" }}
                        >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 animate-pulse"></span>
                            <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">Discover by Taste</span>
                        </div>

                        <h1 className="font-serif-display text-5xl md:text-7xl font-medium text-zinc-950 mb-6 leading-tight">
                            <span
                                className={`block transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.15s" }}
                            >
                                ประเภทอาหาร
                            </span>
                            <span
                                className={`block bg-gradient-to-r from-zinc-300 to-zinc-200 bg-clip-text text-transparent italic transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.25s" }}
                            >
                                ที่คุณค้นหา
                            </span>
                        </h1>

                        <p
                            className={`text-zinc-500 max-w-lg mx-auto font-light leading-relaxed text-lg transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "0.35s" }}
                        >
                            รวบรวมทุกรสชาติความอร่อยในย่านนี้มาไว้ให้คุณเลือกสรร ตามสไตล์ที่คุณชอบ
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                        {categories.map((cat, index) => (
                            <Link
                                key={cat.id}
                                href="#"
                                className={`group relative block aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                                style={{ transitionDelay: `${0.3 + index * 0.04}s` }}
                            >
                                {/* Image with smooth transform */}
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover transition-all duration-500 ease-out group-hover:scale-110 saturate-[0.3] group-hover:saturate-100"
                                />

                                {/* Overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/30 to-transparent group-hover:from-zinc-900/50 group-hover:via-transparent transition-all duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                    {/* Icon Circle */}
                                    <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center mb-3 backdrop-blur-sm bg-white/10 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/50">
                                        <span className="text-xl font-serif-display font-medium">{cat.name.charAt(0)}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-serif-display font-medium text-white mb-1 transition-transform duration-500 group-hover:-translate-y-1">
                                        {cat.name}
                                    </h3>

                                    {/* Count */}
                                    <span className="text-[10px] uppercase tracking-widest text-white/60 transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white/90">
                                        {cat.count} ร้าน
                                    </span>
                                </div>

                                {/* Subtle Border Glow on Hover */}
                                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-500" />
                            </Link>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
