"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface RestaurantProps {
    data: {
        name: string;
        description: string;
        location: string;
        price: string;
        cuisine: string;
        status: string;
        badge?: string;
        image: string;
    };
    className?: string;
}

export default function RestaurantCard({ data, className = "" }: RestaurantProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`group relative bg-white rounded-2xl overflow-hidden border border-zinc-100/80 shadow-sm transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-orange-500/8 hover:-translate-y-2 hover:border-orange-100 flex flex-col h-full ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative h-56 lg:h-64 overflow-hidden">
                <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Top Labels */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium rounded-md border border-white/10 shadow-lg">
                        {data.status}
                    </span>
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-medium rounded-md border border-white/10 shadow-lg">
                        {data.price}
                    </span>
                </div>

                {/* Badge */}
                {data.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {data.badge}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 lg:p-6 flex flex-col flex-grow relative bg-white">
                {/* Cuisine Tag */}
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold text-zinc-500 uppercase tracking-widest bg-zinc-50 border border-zinc-100 transition-all duration-300 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-100">
                        {data.cuisine}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-xl lg:text-2xl font-medium text-zinc-900 leading-snug mb-2 transition-colors duration-300 group-hover:text-orange-600">
                    {data.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-zinc-400 mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs font-medium">{data.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2 mb-5 flex-grow">
                    {data.description}
                </p>


            </div>
        </div>
    );
}
