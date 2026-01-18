"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MethodologySection() {
  useEffect(() => {
    gsap.from(".method-card", {
      scrollTrigger: { trigger: ".method-section", start: "top 75%" },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/>
          <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2m-7.5-2L5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2"/>
        </svg>
      ),
      title: "คัดสรรโดยผู้เชี่ยวชาญ",
      description: "ทีมบรรณาธิการและนักวิจารณ์ของเราค้นหาร้านที่ดีที่สุดในเมือง เพื่อคุณจะได้ไม่เสียมื้ออาหาร",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.5 3L8 9l4 13 4-13-2.5-6"/>
          <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"/>
        </svg>
      ),
      title: "ร้านซ่อนเร้น",
      description: "เราไปไกลกว่ากระแส เพื่อแนะนำร้านครอบครัว ป๊อปอัพ และร้านโปรดในละแวก",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      ),
      title: "เน้นภาพถ่าย",
      description: "การถ่ายภาพคือหัวใจของการเล่าเรื่อง จับบรรยากาศและศิลปะการจัดจาน",
    },
  ];

  return (
    <section className="method-section py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-title mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-950 mb-4">วิธีการคัดสรร</h2>
          <p className="text-zinc-500 max-w-xl font-light">เราไปเยือนทุกร้านแบบไม่เปิดเผยตัวและจ่ายเต็มราคา เพื่อนำเสนอรีวิวที่ซื่อสัตย์และไม่ลำเอียง</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="method-card group p-8 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-50 group-hover:border-orange-100 transition-all text-zinc-900 group-hover:text-orange-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
