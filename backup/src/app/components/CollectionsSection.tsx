"use client";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CollectionsSection() {
  useEffect(() => {
    gsap.from(".collection-card", {
      scrollTrigger: { trigger: ".collections-section", start: "top 70%" },
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const collections = [
    {
      title: "ร้านสำหรับเดท",
      description: "บรรยากาศโรแมนติก แสงสลัว และเมนูแชร์กัน",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "ไวน์บาร์ธรรมชาติ",
      description: "สถานที่ที่ดีที่สุดสำหรับ pet-nat และ orange wine",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5"/></svg>,
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "พิซซ่าที่ดีที่สุด",
      description: "ตั้งแต่สไตล์ NY คลาสสิก ไปจนถึงเนเปิลส์เตาฟืน",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="collections-section py-24 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-title text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-950 mb-4">คอลเลกชันคัดสรร</h2>
          <p className="text-zinc-500 font-light">ไม่แน่ใจว่าจะไปไหน? ดูรายการที่เราคัดมาสำหรับทุกโอกาส</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <a key={index} href="#" className="collection-card group relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-96">
              <Image 
                src={collection.image} 
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-white mb-2">
                  <span className="inline-block mb-2 text-orange-400">{collection.icon}</span>
                  <h3 className="text-2xl font-medium tracking-tight">{collection.title}</h3>
                </div>
                <p className="text-zinc-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 leading-relaxed">{collection.description}</p>
                <div className="flex items-center text-white text-[10px] font-bold uppercase tracking-widest">
                  ดูรายการ
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
