"use client";
import React from "react";
import Image from "next/image";

const logos = [
    "/logos/wongnai.png",
    "/logos/tripadvisor.png",
    "/logos/logo1.jpeg",
    "/logos/logo2.webp",
    "/logos/logo3.webp",
    "/logos/wongnai.png",
    "/logos/tripadvisor.png",
    "/logos/logo1.jpeg",
    "/logos/logo2.webp",
    "/logos/logo3.webp",
];

export default function LogoCarousel() {
    return (
        <div className="w-full h-[300px] flex items-center justify-center overflow-hidden [perspective:1000px] opacity-80 pointer-events-none select-none mask-image-gradient">
            <div
                className="relative w-[160px] h-[100px] [transform-style:preserve-3d] animate-rotate-slow"
                style={{ "--quantity": 10 } as React.CSSProperties}
            >
                {logos.map((src, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl flex items-center justify-center p-4 shadow-xl"
                        style={{
                            "--index": index,
                            transform: `rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(450px)`,
                        } as React.CSSProperties}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt={`Partner logo ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-rotate-slow {
          animation: autoRotate 30s linear infinite;
        }
        @keyframes autoRotate {
          from { transform: rotateX(-5deg) rotateY(0deg); }
          to { transform: rotateX(-5deg) rotateY(360deg); }
        }
        .mask-image-gradient {
            mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
        </div>
    );
}
