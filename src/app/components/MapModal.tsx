"use client";
import React, { useEffect } from "react";

interface MapModalProps {
    isOpen: boolean;
    onClose: () => void;
    restaurantName: string;
    location: string;
    mapEmbedUrl?: string;
}

export default function MapModal({ isOpen, onClose, restaurantName, location, mapEmbedUrl }: MapModalProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const query = encodeURIComponent(`${restaurantName} ${location}`);
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

    // Choose the source: explicit embed URL > API key embed > Basic search embed fallback
    const mapSrc = mapEmbedUrl
        ? mapEmbedUrl
        : (apiKey
            ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`
            : `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`);

    const navigationUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 opacity-100 animate-in fade-in duration-200"
        >
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            <div
                className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            >
                <div className="p-4 md:p-6 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <div>
                        <h3 className="text-xl md:text-2xl font-serif-display font-medium text-zinc-900 line-clamp-1">
                            {restaurantName}
                        </h3>
                        <p className="text-sm text-zinc-500 flex items-center gap-1 mt-1">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex-grow bg-zinc-100 relative h-[300px] md:h-[400px] w-full">
                    {!mapSrc && (
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm">
                            Map configuration missing
                        </div>
                    )}
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={mapSrc}
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
                <div className="p-4 md:p-6 border-t border-zinc-100 bg-zinc-50 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2.5 rounded-xl text-zinc-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 text-sm font-medium transition-all"
                    >
                        Close
                    </button>
                    <a
                        href={navigationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full bg-white text-zinc-900 shadow-lg shadow-zinc-200/50 border border-zinc-100 hover:shadow-xl hover:scale-105 hover:border-zinc-200 text-sm font-medium transition-all flex items-center gap-2"
                    >
                        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        นำทาง (Navigate)
                    </a>
                </div>
            </div>
        </div>
    );
}
