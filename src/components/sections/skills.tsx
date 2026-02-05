"use client";
import React, { useState, Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
// Direct path fix
import { SKILLS } from "../../data/constants"; 

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  function onSplineMouseDown(e: any) {
    // Ensuring SKILLS array exists before searching
    const skillName = e.target.name.toLowerCase();
    const skill = SKILLS?.find(s => s.name.toLowerCase() === skillName);
    if (skill) {
      setActiveSkill(skill.msg);
      setTimeout(() => setActiveSkill(null), 3000);
    }
  }

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="text-center mb-10 h-12">
        {activeSkill && (
          <p className="text-blue-400 animate-bounce text-2xl font-mono">{activeSkill}</p>
        )}
      </div>
      <div className="w-full h-[500px]">
        <Suspense fallback={<div className="text-zinc-500 text-center font-mono animate-pulse">Initializing Keyboard...</div>}>
          <Spline 
            scene="https://prod.spline.design/79rBf89-72jUu86I/scene.splinecode" 
            onSplineMouseDown={onSplineMouseDown}
          />
        </Suspense>
      </div>
    </section>
  );
}
