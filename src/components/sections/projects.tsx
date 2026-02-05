"use client";
import React from "react";
import Image from "next/image";

const certs = [
  { 
    title: "Certified Cybersecurity Educator", 
    img: "/assets/cert2.jpg", 
    para: "Successfully qualified as a CCEP through Red Team Leaders, validating advanced proficiency in cybersecurity education and operations." 
  },
  { 
    title: "Ethical Hacking Specialist", 
    img: "/assets/cert1.jpg", 
    para: "Awarded by Cyber Ethics Academy for mastering ethical hacking methodologies and proactive defense strategies on Dec 20, 2025." 
  },
  { 
    title: "Advance Java Programming", 
    img: "/assets/cert3.jpg", 
    para: "Completed intensive Advance Java training from P-INFOWIZ, strengthening backend architecture skills on Jan 15, 2026." 
  }
];

export default function ProjectsSection() {
  return (
    <section id="achievements" className="py-24 px-10 space-y-32 bg-zinc-950">
      <h2 className="text-5xl font-bold text-center italic text-blue-500 uppercase tracking-tighter">My Achievements</h2>
      {certs.map((item, i) => (
        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20`}>
          <div className="flex-1 group">
            <Image 
              src={item.img} 
              alt={item.title} 
              width={800} 
              height={500} 
              className="rounded-3xl border-2 border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-blue-500/10" 
            />
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl font-bold text-white tracking-widest uppercase">{item.title}</h3>
            <p className="text-zinc-400 text-xl leading-relaxed font-mono italic">{item.para}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
