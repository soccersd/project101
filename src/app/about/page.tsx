"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FloatingButton from "../components/FloatingButton";
import AmbientLightLite from "../components/AmbientLightLite";

const team = [
    {
        name: "สมชาย ใจดี",
        role: "บรรณาธิการบริหาร",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
        bio: "อดีตนักชิมระดับมืออาชีพ ผ่านการลองร้านมากกว่า 500 ร้านในกรุงเทพฯ"
    },
    {
        name: "วิมล สุขสันต์",
        role: "บรรณาธิการอาหาร",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
        bio: "เชฟผู้หลงใหลในอาหารท้องถิ่น กับประสบการณ์ในร้านอาหารระดับ Fine Dining"
    },
    {
        name: "ณัฐพล อารมณ์ดี",
        role: "ช่างภาพ",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
        bio: "ช่างภาพอาหารมืออาชีพ เชี่ยวชาญการถ่ายภาพที่ทำให้คุณหิว"
    },
    {
        name: "พิมพ์ลดา รักษ์ย่าน",
        role: "นักเขียน",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
        bio: "นักเขียนผู้หลงใหลในเรื่องราวเบื้องหลังร้านอาหารและคนทำอาหาร"
    },
];

const values = [
    {
        icon: "",
        title: "ความซื่อสัตย์",
        description: "เราไปทุกร้านแบบไม่เปิดเผยตัวตน และจ่ายเงินเต็มราคาเอง เพื่อให้ได้รีวิวที่เป็นกลางที่สุด"
    },
    {
        icon: "",
        title: "คุณภาพ",
        description: "เราเลือกเฉพาะร้านที่ผ่านการทดสอบหลายครั้ง ไม่ใช่แค่ไปครั้งเดียวแล้วเขียน"
    },
    {
        icon: "",
        title: "ความหลากหลาย",
        description: "เรานำเสนอร้านทุกระดับราคา ตั้งแต่ Street Food ไปจนถึง Fine Dining"
    },
    {
        icon: "",
        title: "ความรักในท้องถิ่น",
        description: "เราสนับสนุนร้านท้องถิ่น และช่วยให้ของดีในย่านถูกค้นพบ"
    },
];

export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
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
                            <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">Our Story</span>
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
                            className={`text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed text-lg transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "0.35s" }}
                        >
                            เราเชื่อว่าทุกมื้ออาหารคือโอกาสที่จะค้นพบสิ่งพิเศษ Provisions คือไกด์ที่จะพาคุณไปยังร้านที่ดีที่สุดในย่าน โดยทีมบรรณาธิการที่รักในอาหารและชุมชนท้องถิ่น
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div
                        className={`mb-24 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: "0.5s" }}
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-amber-50 rounded-3xl -rotate-2"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                                    alt="Our Mission"
                                    width={800}
                                    height={600}
                                    className="relative rounded-2xl object-cover w-full aspect-[4/3] shadow-xl"
                                />
                            </div>
                            <div>
                                <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-zinc-900 mb-6">
                                    พันธกิจของเรา
                                </h2>
                                <p className="text-zinc-600 leading-relaxed mb-6">
                                    Provisions เกิดจากความหงุดหงิดที่หาร้านอาหารดีๆ ในย่านได้ยาก รีวิวออนไลน์ส่วนใหญ่ถูกจ่ายมา หรือไม่ก็มาจากคนที่ไปแค่ครั้งเดียว
                                </p>
                                <p className="text-zinc-600 leading-relaxed mb-6">
                                    เราจึงตั้งใจสร้างไกด์ที่เชื่อถือได้ โดยทีมที่ไปกินจริง จ่ายเงินเอง และกลับไปหลายครั้งก่อนจะเขียนรีวิว ไม่มีโฆษณาแฝง ไม่มีการรับเงินจากร้าน
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {team.slice(0, 3).map((member, i) => (
                                            <Image
                                                key={i}
                                                src={member.image}
                                                alt={member.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-zinc-500">
                                        ทีมงาน 4 คน ที่รักในอาหาร
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div
                        className={`mb-24 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: "0.6s" }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-zinc-900 mb-4">
                                สิ่งที่เรายึดมั่น
                            </h2>
                            <p className="text-zinc-500 max-w-lg mx-auto">
                                หลักการที่เราใช้ในการคัดเลือกและรีวิวร้านอาหาร
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className={`bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100 hover:bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                    style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
                                >
                                    <div className="text-3xl mb-4">{value.icon}</div>
                                    <h3 className="font-semibold text-zinc-900 mb-2">{value.title}</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Section */}
                    <div
                        className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: "0.8s" }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="font-serif-display text-3xl md:text-4xl font-medium text-zinc-900 mb-4">
                                พบทีมบรรณาธิการ
                            </h2>
                            <p className="text-zinc-500 max-w-lg mx-auto">
                                คนตัวเล็กๆ ที่รักในอาหาร และมุ่งมั่นที่จะค้นหาร้านดีๆ มาให้คุณ
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className={`group text-center transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                    style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
                                >
                                    <div className="relative mb-4 mx-auto w-32 h-32">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 scale-105 transition-all duration-300"></div>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={128}
                                            height={128}
                                            className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-95 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-zinc-900 mb-1">{member.name}</h3>
                                    <p className="text-sm text-orange-600 mb-2">{member.role}</p>
                                    <p className="text-xs text-zinc-500 leading-relaxed">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
