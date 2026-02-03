import React from "react";
import { config } from "@/data/config";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-500">
            About Me
          </h1>
          <p className="text-zinc-500 mt-2 font-mono italic">Kanpur, Uttar Pradesh</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-800 overflow-hidden">
              <img src="/assets/shubham-singh-kanpur-neet-student.jpg" alt="NEET Aspirant" className="w-full h-auto" />
              <div className="p-4 bg-zinc-900/50"><p className="text-blue-400 text-sm font-mono">NEET Aspirant @ Aakash Institute</p></div>
            </div>
            <div className="rounded-3xl border border-zinc-800 overflow-hidden">
              <img src="/assets/shubham-singh-cybersecurity-expert.jpg" alt="Cyber Expert" className="w-full h-auto" />
              <div className="p-4 bg-zinc-900/50"><p className="text-red-400 text-sm font-mono">Certified Cybersecurity Educator (CCEP)</p></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800">
              <h2 className="text-2xl font-bold mb-4">The Student & The Coder</h2>
              <p className="text-zinc-400 leading-relaxed">
                Currently in 11th grade (Science - PCB), I am preparing for NEET while maintaining a professional career in Tech. 
                I scored <span className="text-white font-bold">87% in Class 10th</span>. 
                My focus is on <span className="text-white font-bold">Frontend Development</span> and <span className="text-white font-bold">Ethical Hacking</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-zinc-800 rounded-2xl text-center">
                <p className="text-3xl font-bold text-blue-500">87%</p>
                <p className="text-xs text-zinc-500 uppercase mt-1">10th Score</p>
              </div>
              <div className="p-6 border border-zinc-800 rounded-2xl text-center text-red-500">
                <p className="text-3xl font-bold">CCEP</p>
                <p className="text-xs text-zinc-500 uppercase mt-1">Certified Educator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
