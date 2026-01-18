"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AmbientLightLite from "../components/AmbientLightLite";

const contactInfo = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: "ที่อยู่",
        content: "วงศ์สว่าง ซอย 11\nกรุงเทพมหานคร 10400",
        color: "from-orange-500 to-amber-500"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        title: "โทรศัพท์",
        content: "02-XXX-XXXX\n08X-XXX-XXXX",
        color: "from-emerald-500 to-teal-500"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
        title: "อีเมล",
        content: "hello@provisions.guide\npress@provisions.guide",
        color: "from-violet-500 to-purple-500"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "เวลาทำการ",
        content: "จันทร์ - ศุกร์: 9:00 - 18:00\nเสาร์: 10:00 - 15:00",
        color: "from-pink-500 to-rose-500"
    },
];

export default function ContactPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    useEffect(() => {
        const t = setTimeout(() => {
            setIsLoaded(true);
        }, 10);
        return () => clearTimeout(t);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert("ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับเร็วๆ นี้");
    };

    return (
        <div className="bg-white min-h-screen text-zinc-900 antialiased selection:bg-orange-100 selection:text-orange-900 overflow-hidden relative">
            <Navbar />
            <AmbientLightLite />

            <main className="pt-32 pb-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50/80 backdrop-blur-sm mb-6 transition-all duration-500 hover:bg-white hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{ transitionDelay: "0.1s" }}
                        >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 animate-pulse"></span>
                            <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">Get In Touch</span>
                        </div>

                        <h1 className="font-serif-display text-5xl md:text-7xl font-medium text-zinc-950 mb-6 leading-tight">
                            <span
                                className={`block transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.15s" }}
                            >
                                ติดต่อเรา
                            </span>
                            <span
                                className={`block bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-transparent italic transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                style={{ transitionDelay: "0.25s" }}
                            >
                                เราพร้อมช่วยเหลือคุณ
                            </span>
                        </h1>

                        <p
                            className={`text-zinc-500 max-w-lg mx-auto font-light leading-relaxed text-lg transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: "0.35s" }}
                        >
                            มีคำถาม ข้อเสนอแนะ หรืออยากแนะนำร้านอาหาร? ติดต่อเราได้เลย เรายินดีรับฟังทุกความคิดเห็น
                        </p>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className={`group bg-white rounded-2xl border border-zinc-200/80 p-6 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {info.icon}
                                </div>
                                <h3 className="font-semibold text-zinc-900 mb-2">{info.title}</h3>
                                <p className="text-sm text-zinc-500 whitespace-pre-line leading-relaxed">{info.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form & Map */}
                    <div
                        className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: "0.8s" }}
                    >
                        {/* Contact Form */}
                        <div className="bg-zinc-50/50 rounded-3xl p-8 md:p-10 border border-zinc-100">
                            <h2 className="font-serif-display text-2xl font-medium text-zinc-900 mb-6">
                                ส่งข้อความถึงเรา
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            ชื่อ
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                                            placeholder="ชื่อของคุณ"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            อีเมล
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                                            placeholder="email@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                                        หัวข้อ
                                    </label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none"
                                        required
                                    >
                                        <option value="">เลือกหัวข้อ</option>
                                        <option value="general">สอบถามทั่วไป</option>
                                        <option value="restaurant">แนะนำร้านอาหาร</option>
                                        <option value="feedback">ข้อเสนอแนะ</option>
                                        <option value="partnership">ความร่วมมือ</option>
                                        <option value="press">สื่อมวลชน</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                                        ข้อความ
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all outline-none resize-none"
                                        placeholder="เขียนข้อความของคุณที่นี่..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-14 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    ส่งข้อความ
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13" />
                                        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-200 min-h-[500px]">
                            {/* Decorative Map Background */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,#e4e4e7_1px,transparent_1px),linear-gradient(180deg,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                            </div>

                            {/* Center Pin */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-6 h-6 bg-orange-500 rounded-full animate-ping absolute"></div>
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/30 relative z-10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Location Label */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-zinc-100">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white flex-shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-zinc-900">Provisions Guide Office</h3>
                                            <p className="text-sm text-zinc-500 mt-1">วงศ์สว่าง ซอย 11, กรุงเทพมหานคร</p>
                                            <a href="#" className="inline-flex items-center gap-1 text-sm text-orange-600 font-medium mt-2 hover:text-orange-700 transition-colors">
                                                เปิดใน Google Maps
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Teaser */}
                    <div
                        className={`mt-20 text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: "1s" }}
                    >
                        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="font-serif-display text-2xl md:text-3xl font-medium mb-4">
                                    มีคำถามที่พบบ่อย?
                                </h3>
                                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                                    อ่านคำตอบสำหรับคำถามที่ถูกถามบ่อยที่สุด ก่อนติดต่อเราโดยตรง
                                </p>
                                <button className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-zinc-900 text-sm font-semibold hover:bg-orange-500 hover:text-white hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300">
                                    อ่าน FAQ
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}
