"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LogoCarousel from "./components/LogoCarousel";
import Magnetic from "./components/Magnetic";
import AmbientLight from "./components/AmbientLight";
import Navbar from "./components/Navbar";
import FloatingButton from "./components/FloatingButton";



gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

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
        delay: 1,
      });

      // Featured section reveal on scroll
      gsap.from(".featured-card", {
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Stats counter animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="text-zinc-900 antialiased selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      <FloatingButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div ref={heroRef} className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center mb-16 relative">

            {/* Background 3D Logo Carousel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-0 pointer-events-none mix-blend-multiply">
              <LogoCarousel />
            </div>

            <h1 className="relative z-20 font-serif-display text-6xl md:text-9xl font-medium text-zinc-950 tracking-tight leading-tight mb-8 mix-blend-multiply flex flex-col items-center">
              <div className="overflow-hidden px-2 pt-4 -mt-4">
                <span className="hero-title-line block translate-y-full">ที่สุดแห่ง</span>
              </div>
              <div className="overflow-hidden px-2 pt-4 -mt-4">
                <span className="hero-title-line block italic text-zinc-400 translate-y-full">วงศ์สว่างซอย 11</span>
              </div>
            </h1>

            <p className="hero-animate relative z-20 text-lg md:text-xl text-zinc-500 mb-10 max-w-xl leading-relaxed font-light">
              คอลเลกชันร้านอาหารคัดสรร ตั้งแต่ร้านเล็กๆ ที่ซ่อนอยู่ตามตรอกซอกซอย ไปจนถึงร้านยอดฮิตที่ชาววงศ์สว่างพูดถึง
            </p>

            {/* CTA Buttons with Hierarchy */}
            <div className="hero-animate flex flex-col sm:flex-row gap-4 relative z-30">
              <Magnetic>
                <Link href="/restaurants" className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-zinc-900 text-white text-sm font-semibold tracking-wide hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all duration-300">
                  ค้นหาร้านอาหาร
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
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

        {/* Background ambient light - Interactive */}
        <AmbientLight />
      </section>
    </div>
  );
}
