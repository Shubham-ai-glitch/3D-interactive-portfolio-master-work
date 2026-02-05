"use client";
import React from "react";
import Image from "next/image";

const certs = [
  { 
    title: "Certified Cybersecurity Educator", 
    img: "/assets/cert2.jpg", 
    para: "Successfully qualified as a CCEP through Red Team Leaders on Dec 7, 2025. Validates expertise in red team operations." 
  },
  { 
    title: "Cybersecurity & Ethical Hacking", 
    img: "/assets/cert1.jpg", 
    para: "Awarded by Cyber Ethics Academy on Dec 20, 2025. Mastered ethical hacking and proactive defense strategies." 
  },
  { 
    title: "Advance Java (online)", 
    img: "/assets/cert3.jpg", 
    para: "Completed Advance Java course from P-INFOWIZ on Jan 15, 2026. Specialized in scalable software solutions." 
  }
];

export default function ProjectsSection() {
  return (
    <section id="achievements" className="py-24 px-10 space-y-32 bg-zinc-950">
      <h2 className="text-5xl font-bold text-center italic text-blue-500 uppercase tracking-tighter">My Achievements</h2>
      <div className="max-w-6xl mx-auto space-y-40">
        {certs.map((item, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
            <div className="flex-1 group">
              <div className="relative overflow-hidden rounded-3xl border-2 border-zinc-800 shadow-2xl">
                <Image src={item.img} alt={item.title} width={800} height={500} className="grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
              </div>
            </div>
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h3 className="text-4xl font-bold text-white tracking-widest uppercase">{item.title}</h3>
              <p className="text-zinc-400 text-xl leading-relaxed font-mono italic">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
