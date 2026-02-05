"use client";
import React, { useState, Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
// Make sure this path exactly matches your folder structure
import { SKILLS } from "../../data/constants"; 

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  function onSplineMouseDown(e: any) {
    // Spline key tapping logic
    const skill = SKILLS.find(s => s.name.toLowerCase() === e.target.name.toLowerCase());
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
