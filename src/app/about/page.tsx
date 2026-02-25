"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FloatingButton from "../components/FloatingButton";
import AmbientLightLite from "../components/AmbientLightLite";

const features = [
    {
        title: "รูปภาพร้าน",
        description: "ภาพถ่ายจริงจากหน้าร้าน เพื่อให้รู้จักร้านก่อนไปถึง"
    },
    {
        title: "ประเภทของร้าน",
        description: "แบ่งหมวดหมู่ทั้งร้านอาหารและร้านบริการ ค้นหาง่าย"
    },
    {
        title: "เวลาเปิด–ปิด",
        description: "ข้อมูลเวลาทำการของแต่ละร้าน ไม่ต้องเสียเที่ยว"
    },
    {
        title: "เบอร์โทรศัพท์",
        description: "ติดต่อร้านค้าได้โดยตรง สอบถามหรือสั่งจองล่วงหน้า"
    },
    {
        title: "แผนที่ตั้งร้าน",
        description: "แผนที่ Google Maps ในตัว นำทางไปถึงร้านได้ทันที"
    },
];

const objectives = [
    "เพื่อรวบรวมข้อมูลร้านอาหารและร้านบริการในซอยวงศ์สว่าง 11",
    "เพื่อพัฒนาเว็บไซต์ที่ใช้งานง่ายและเข้าถึงได้สะดวก",
    "เพื่อสนับสนุนร้านค้าในชุมชนให้เป็นที่รู้จักมากขึ้น",
];

const creators = [
    {
        name: "นางสาวจุฑามณี ทองคำ",
        initial: "จ",
    },
    {
        name: "นางสาวอาริยา หาญพิชัย",
        initial: "อ",
    },
];

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
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
                    {/* Header */}
                    <div className="text-center mb-20 flex flex-col items-center">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50/80 backdrop-blur-sm mb-6 transition-all duration-500 hover:bg-white hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{ transitionDelay: "0.1s" }}
                        >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 animate-pulse"></span>
                            <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">About Us</span>
                        </div>

                        <h1 className="font-serif-display text-5xl md:text-7xl font-medium text-zinc-950 mb-6 leading-tight">
                            <span
                                className={`block transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.15s" }}
                            >
                                เกี่ยวกับเรา
                            </span>
                            <span
                                className={`block bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-transparent italic transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.25s" }}
                            >
                                Provisions Guide
                            </span>
                        </h1>

                        <p
                            className={`text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed text-lg transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "0.35s" }}
                        >
                            จัดทำขึ้นเพื่อรวบรวมข้อมูลร้านอาหารและร้านบริการภายในซอยวงศ์สว่าง 11
                            โดยมีวัตถุประสงค์เพื่ออำนวยความสะดวกให้แก่ประชาชน นักศึกษา
                            และผู้ที่พักอาศัยในบริเวณดังกล่าว สามารถค้นหาข้อมูลร้านค้าได้อย่างรวดเร็วและง่ายต่อการตัดสินใจ
                        </p>
                    </div>

                    {/* Features Section */}
                    <div
                        className={`mb-24 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: "0.5s" }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-zinc-900 mb-4">
                                ข้อมูลที่แสดงในเว็บไซต์
                            </h2>
                            <p className="text-zinc-500 max-w-lg mx-auto">
                                เว็บไซต์นี้แสดงรายละเอียดของร้านค้า เพื่อให้ผู้ใช้งานสามารถเข้าถึงข้อมูลได้ครบถ้วน
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100 hover:bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300 text-center ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                    style={{ transitionDelay: `${0.6 + index * 0.08}s` }}
                                >
                                    <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Objectives Section */}
                    <div
                        className={`mb-24 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: "0.7s" }}
                    >
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-zinc-900 mb-4">
                                    วัตถุประสงค์
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {objectives.map((objective, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start gap-4 p-5 bg-gradient-to-r from-zinc-50 to-white rounded-xl border border-zinc-100 hover:border-orange-200 hover:shadow-md hover:shadow-orange-50 transition-all duration-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                                        style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                            {index + 1}
                                        </div>
                                        <p className="text-zinc-700 leading-relaxed pt-0.5">{objective}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Creators Section */}
                    <div
                        className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: "0.9s" }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-zinc-900 mb-4">
                                ผู้จัดทำ
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {creators.map((creator, index) => (
                                <div
                                    key={index}
                                    className={`group text-center transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                    style={{ transitionDelay: `${1.0 + index * 0.15}s` }}
                                >
                                    <div className="relative mb-4 mx-auto w-28 h-28">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 scale-110 transition-all duration-300"></div>
                                        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-100 to-amber-50 border-4 border-white shadow-lg group-hover:scale-95 transition-transform duration-300 flex items-center justify-center">
                                            <span className="text-3xl font-bold bg-gradient-to-br from-orange-500 to-amber-600 bg-clip-text text-transparent">
                                                {creator.initial}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-zinc-900 text-sm">{creator.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
