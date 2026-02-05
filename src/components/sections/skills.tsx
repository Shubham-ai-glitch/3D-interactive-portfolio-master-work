"use client";
import React, { useState, Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { SKILLS } from "@/data/constants";

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Jab key tap hogi, ye function trigger hoga
  function onSplineMouseDown(e: any) {
    const skill = SKILLS.find(s => s.name.toLowerCase() === e.target.name.toLowerCase());
    if (skill) {
      setActiveSkill(skill.msg);
      // 3 second baad message gayab ho jayega
      setTimeout(() => setActiveSkill(null), 3000);
    }
  }

  return (
    <section id="skills" className="py-24 bg-black flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-white uppercase italic tracking-tighter">Skills</h2>
        <p className="text-zinc-500 font-mono mt-2">
          {activeSkill ? (
            <span className="text-blue-400 animate-bounce block text-2xl">{activeSkill}</span>
          ) : (
            "(hint: press a key on the keyboard)"
          )}
        </p>
      </div>

      <div className="w-full h-[500px] md:h-[700px]">
        <Suspense fallback={<div className="text-white text-center">Loading Keyboard...</div>}>
          <Spline 
            scene="https://prod.spline.design/your-scene-id/scene.splinecode" 
            onSplineMouseDown={onSplineMouseDown}
          />
        </Suspense>
      </div>
    </section>
  );
}
