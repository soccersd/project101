"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteSection() {
  useEffect(() => {
    gsap.from(".quote-content", {
      scrollTrigger: { trigger: ".quote-section", start: "top 70%" },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="quote-section py-24 bg-white text-zinc-900 relative overflow-hidden border-y border-zinc-100">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none"></div>
      <div className="quote-content max-w-7xl mx-auto px-6 relative z-10 text-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-8 text-zinc-300">
          <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        </svg>
        <blockquote className="font-serif-display text-2xl md:text-4xl font-medium leading-tight tracking-tight max-w-4xl mx-auto mb-10 text-zinc-900 italic">
          &ldquo;Provisions กลายเป็นเข็มทิศที่ขาดไม่ได้สำหรับการนำทางในโลกอาหารที่เปลี่ยนแปลงตลอดเวลา ถ้าอยู่ในลิสต์นี้ คุ้มค่าที่จะรอ&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-zinc-900 uppercase tracking-wider">เจมส์ สเตอร์ลิง</p>
            <p className="text-xs text-zinc-500">หัวหน้านักวิจารณ์อาหาร, The Daily</p>
          </div>
          <div className="w-px h-8 bg-zinc-200"></div>
          <div className="flex text-orange-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
