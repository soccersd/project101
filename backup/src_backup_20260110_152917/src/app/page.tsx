"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";
import LogoCarousel from "./components/LogoCarousel";
import Magnetic from "./components/Magnetic";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Title Reveal (Kinetic Typography)
      gsap.to(".hero-title-line", {
        y: 0,
        duration: 1.8,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2,
      });

      // Other elements stagger fade in
      gsap.from(".hero-animate", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1, // Start after title begins
      });
    });

    // Interactive Light Effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!lightRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * 0.1;
      const y = (clientY - window.innerHeight / 2) * 0.1;

      gsap.to(lightRef.current, {
        x: x,
        y: y,
        duration: 2,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="text-zinc-900 antialiased selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div ref={heroRef} className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16 relative">

            {/* Background 3D Logo Carousel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-0 opacity-50 pointer-events-none mix-blend-multiply">
              <LogoCarousel />
            </div>

            {/* Rotating Stamp */}
            <div className="absolute top-0 right-0 md:-right-12 -top-12 md:top-0 hidden md:flex items-center justify-center animate-spin-slow opacity-20 hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
              <svg viewBox="0 0 100 100" width="140" height="140" className="fill-zinc-900">
                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text className="text-[10px] uppercase font-bold tracking-widest">
                  <textPath xlinkHref="#curve">
                    • ก่อตั้ง 2567 • คู่มือที่ดีที่สุดสำหรับนักชิม
                  </textPath>
                </text>
              </svg>
            </div>



            <h1 className="relative z-20 font-serif-display text-6xl md:text-9xl font-medium text-zinc-950 tracking-tight leading-tight mb-8 mix-blend-multiply flex flex-col items-center">
              <div className="overflow-hidden px-2 pt-4 -mt-4">
                <span className="hero-title-line block translate-y-full">ที่สุดแห่ง</span>
              </div>
              <div className="overflow-hidden px-2 pt-4 -mt-4">
                <span className="hero-title-line block italic text-zinc-400 translate-y-full">คู่มือร้านอาหาร</span>
              </div>
            </h1>

            <p className="hero-animate relative z-20 text-lg md:text-xl text-zinc-500 mb-10 max-w-xl leading-relaxed font-light">
              คอลเลกชันร้านอาหารคัดสรร ตั้งแต่ร้านเล็กๆ ที่ซ่อนอยู่ตามตรอกซอกซอย ไปจนถึงร้านระดับมิชลินสตาร์ที่คุณไม่ควรพลาด
            </p>

            <div className="hero-animate flex flex-col sm:flex-row gap-4 relative z-30">
              <Magnetic>
                <button className="button type1 group">
                  <span className="btn-txt flex items-center gap-2 text-sm">
                    ค้นหาร้านอาหาร
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </Magnetic>
              <Magnetic>
                <button className="button type1 group">
                  <span className="btn-txt text-sm">
                    ร้านแนะนำจากบรรณาธิการ
                  </span>
                </button>
              </Magnetic>
            </div>
          </div>


        </div>

        {/* Background ambient light */}
        {/* Background ambient light - Interactive */}
        <div ref={lightRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[100px] -z-10 pointer-events-none transition-transform duration-1000 ease-out will-change-transform mix-blend-screen"></div>
      </section>



      {/* Restaurant Grid */}





    </div>
  );
}
