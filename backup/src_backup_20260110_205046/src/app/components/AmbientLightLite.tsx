"use client";
import { useEffect, useRef } from "react";

// Lightweight CSS-based ambient light for subpages (restaurants, categories)
// Much faster than Three.js version, good for content-heavy pages
export default function AmbientLightLite() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            containerRef.current.style.setProperty("--mouse-x", `${x}px`);
            containerRef.current.style.setProperty("--mouse-y", `${y}px`);
        };

        let ticking = false;
        const throttledMouseMove = (e: MouseEvent) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleMouseMove(e);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("mousemove", throttledMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", throttledMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
            style={{
                "--mouse-x": "0px",
                "--mouse-y": "0px"
            } as React.CSSProperties}
        >
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/60" />

            {/* Primary Orb - Mouse Following */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full opacity-40"
                style={{
                    background: "radial-gradient(circle, rgba(251,146,60,0.5) 0%, rgba(251,146,60,0) 70%)",
                    top: "20%",
                    left: "30%",
                    transform: "translate(calc(-50% + var(--mouse-x)), calc(-50% + var(--mouse-y)))",
                    transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
                    willChange: "transform"
                }}
            />

            {/* Secondary Orb - Coral */}
            <div
                className="absolute w-[800px] h-[800px] rounded-full opacity-30 animate-float-slow"
                style={{
                    background: "radial-gradient(circle, rgba(253,186,116,0.6) 0%, rgba(253,186,116,0) 70%)",
                    top: "-10%",
                    right: "-10%",
                }}
            />

            {/* Tertiary Orb - Amber */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full opacity-35 animate-float-reverse"
                style={{
                    background: "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(249,115,22,0) 70%)",
                    bottom: "10%",
                    left: "-5%",
                }}
            />

            {/* Subtle Peach Fill */}
            <div
                className="absolute w-[400px] h-[400px] rounded-full opacity-25 animate-pulse-slow"
                style={{
                    background: "radial-gradient(circle, rgba(254,215,170,0.5) 0%, rgba(254,215,170,0) 70%)",
                    top: "60%",
                    right: "20%",
                }}
            />

            {/* Soft blur overlay */}
            <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>
    );
}
