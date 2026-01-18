"use client";
import React, { useState, useRef, useEffect } from 'react';

const FloatingButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize audio ref
    useEffect(() => {
        audioRef.current = new Audio("/sounds/SaveTik.io_7521658757839932680.mp3");
        audioRef.current.loop = true; // Maybe loop it? Usually background music loops.

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed top-6 right-6 z-50 hidden md:block">
            <button
                onClick={toggleAudio}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg shadow-zinc-200/20 transition-all duration-500 hover:scale-110 hover:shadow-orange-500/20 hover:border-orange-100/50"
            >
                {/* Pulse Effect when playing */}
                {isPlaying && (
                    <span className="absolute inset-0 rounded-full border border-orange-400/30 animate-ping-slow pointer-events-none"></span>
                )}
                <span className={`absolute inset-0 rounded-full transition-all duration-500 ${isPlaying ? 'bg-orange-50/50' : 'bg-orange-400/0 group-hover:bg-orange-400/5'}`}></span>

                {/* Icon */}
                {isPlaying ? (
                    // Pause Icon
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-orange-600 transition-all duration-300"
                    >
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    // Play Icon
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-zinc-800 transition-all duration-300 group-hover:text-orange-600 group-hover:translate-x-0.5 ml-0.5"
                    >
                        <path d="M5 3.868v16.264c0 .878.966 1.414 1.714.95l13.553-8.132a1.1 1.1 0 0 0 0-1.9L6.714 2.918C5.966 2.454 5 2.99 5 3.868z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default FloatingButton;
