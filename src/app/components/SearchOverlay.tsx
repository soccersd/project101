"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { restaurants } from "@/data/restaurants";
import { services } from "@/data/services";

interface SearchItem {
    name: string;
    description: string;
    location: string;
    cuisine: string;
    image: string;
    type: "restaurant" | "service";
    hours?: string;
    tel?: string;
}

// Merge all data
const allItems: SearchItem[] = [
    ...restaurants.map((r) => ({ ...r, type: "restaurant" as const })),
    ...services.map((s) => ({ ...s, type: "service" as const })),
];

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchItem[]>([]);
    const [activeFilter, setActiveFilter] = useState<"all" | "restaurant" | "service">("all");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Focus input when overlay opens
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setTimeout(() => inputRef.current?.focus(), 150);
        } else {
            document.body.style.overflow = "";
            setQuery("");
            setResults([]);
            setActiveFilter("all");
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Search logic
    const doSearch = useCallback(
        (searchQuery: string, filter: "all" | "restaurant" | "service") => {
            if (!searchQuery.trim()) {
                setResults([]);
                return;
            }
            const q = searchQuery.toLowerCase().trim();
            const filtered = allItems.filter((item) => {
                const matchType = filter === "all" || item.type === filter;
                const matchText =
                    item.name.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.cuisine.toLowerCase().includes(q) ||
                    item.location.toLowerCase().includes(q);
                return matchType && matchText;
            });
            setResults(filtered);
        },
        []
    );

    useEffect(() => {
        doSearch(query, activeFilter);
    }, [query, activeFilter, doSearch]);

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKey);
        }
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    const handleItemClick = (item: SearchItem) => {
        onClose();
        if (item.type === "restaurant") {
            router.push("/restaurants");
        } else {
            router.push("/services");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-zinc-950/60 backdrop-blur-md"
                onClick={onClose}
                style={{ animation: "searchFadeIn 0.2s ease-out" }}
            />

            {/* Content - full height on mobile, centered on desktop */}
            <div
                className="relative w-full h-full md:h-auto md:max-w-2xl md:mx-4 md:mt-[10vh]"
                style={{ animation: "searchSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
                {/* Search Box */}
                <div className="bg-white md:rounded-2xl shadow-2xl shadow-zinc-900/20 overflow-hidden border-0 md:border border-zinc-100 h-full md:h-auto flex flex-col">
                    {/* Search Input Area */}
                    <div className="flex items-center gap-3 px-4 md:px-6 py-4 md:py-5 border-b border-zinc-100 flex-shrink-0">
                        <svg
                            className="w-5 h-5 text-zinc-400 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="11" cy="11" r="8" strokeWidth="2" />
                            <path d="m21 21-4.35-4.35" strokeWidth="2" />
                        </svg>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="ค้นหาร้านอาหาร, ร้านบริการ..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1 text-base md:text-lg text-zinc-900 placeholder:text-zinc-300 outline-none bg-transparent font-light"
                        />
                        {/* Close button - X on mobile, ESC badge on desktop */}
                        <button
                            onClick={onClose}
                            className="md:hidden w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-600 active:bg-zinc-200 transition-all flex-shrink-0"
                            aria-label="ปิด"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button
                            onClick={onClose}
                            className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-400 text-[10px] font-semibold tracking-wider uppercase hover:bg-zinc-200 hover:text-zinc-600 transition-all flex-shrink-0"
                        >
                            ESC
                        </button>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2.5 md:py-3 border-b border-zinc-50 bg-zinc-50/50 flex-shrink-0 overflow-x-auto">
                        {[
                            { key: "all" as const, label: "ทั้งหมด" },
                            { key: "restaurant" as const, label: "ร้านอาหาร" },
                            { key: "service" as const, label: "ร้านบริการ" },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveFilter(tab.key)}
                                className={`px-3 md:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === tab.key
                                    ? "bg-zinc-900 text-white shadow-md"
                                    : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 active:bg-zinc-200"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Results */}
                    <div className="flex-1 overflow-y-auto overscroll-contain md:max-h-[50vh]">
                        {query.trim() === "" ? (
                            /* Empty State */
                            <div className="flex flex-col items-center justify-center py-12 md:py-16 px-6">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 md:w-7 md:h-7 text-orange-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
                                        <path d="m21 21-4.35-4.35" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <p className="text-zinc-400 text-sm font-light">
                                    พิมพ์ชื่อร้าน, ประเภท, หรือสถานที่
                                </p>
                                <p className="text-zinc-300 text-xs font-light mt-1">
                                    เช่น &quot;ก๋วยเตี๋ยว&quot;, &quot;ตัดผม&quot;, &quot;ซักผ้า&quot;
                                </p>
                            </div>
                        ) : results.length === 0 ? (
                            /* No Results */
                            <div className="flex flex-col items-center justify-center py-12 md:py-16 px-6">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-4">
                                    <span className="text-2xl md:text-3xl">😔</span>
                                </div>
                                <p className="text-zinc-500 text-sm font-medium">ไม่พบผลลัพธ์</p>
                                <p className="text-zinc-300 text-xs font-light mt-1">
                                    ลองค้นหาด้วยคำอื่น
                                </p>
                            </div>
                        ) : (
                            /* Results List */
                            <div className="py-2">
                                <div className="px-4 md:px-6 py-2">
                                    <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                                        พบ {results.length} ผลลัพธ์
                                    </span>
                                </div>
                                {results.map((item, index) => (
                                    <button
                                        key={`${item.type}-${index}`}
                                        onClick={() => handleItemClick(item)}
                                        className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-3.5 hover:bg-orange-50/50 active:bg-orange-50 transition-all duration-200 group text-left"
                                    >
                                        {/* Image */}
                                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-100 group-hover:border-orange-200 transition-colors">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-1.5 md:gap-2 mb-0.5">
                                                <h4 className="text-[13px] md:text-sm font-medium text-zinc-900 truncate group-hover:text-orange-600 transition-colors">
                                                    {item.name}
                                                </h4>
                                                <span
                                                    className={`flex-shrink-0 px-1.5 md:px-2 py-0.5 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-wider ${item.type === "restaurant"
                                                        ? "bg-orange-50 text-orange-500 border border-orange-100"
                                                        : "bg-blue-50 text-blue-500 border border-blue-100"
                                                        }`}
                                                >
                                                    {item.type === "restaurant"
                                                        ? "อาหาร"
                                                        : "บริการ"}
                                                </span>
                                            </div>
                                            <p className="text-[11px] md:text-xs text-zinc-400 truncate">
                                                {item.cuisine} · {item.location}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        <svg
                                            className="w-4 h-4 text-zinc-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0 hidden md:block"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Keyboard hint - desktop only */}
                <div className="hidden md:flex justify-center mt-4">
                    <p className="text-zinc-400/60 text-xs font-light">
                        กด <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-400/80 font-mono text-[10px] border border-zinc-400/20">ESC</kbd> เพื่อปิด
                    </p>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes searchFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes searchSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @media (min-width: 768px) {
                    @keyframes searchSlideUp {
                        from {
                            opacity: 0;
                            transform: translateY(-20px) scale(0.98);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }
                }
            `}</style>
        </div>
    );
}
