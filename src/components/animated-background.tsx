"use client";
import React, { Suspense, useEffect, useRef, useState, useCallback } from "react";
import { Application, SPEObject } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";

gsap.registerPlugin(ScrollTrigger);

// ... STATES wala logic waisa hi rahega ...

export default function AnimatedBackground() {
  const splineRef = useRef<Application | null>(null);
  const { isLoading } = usePreloader();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const onLoad = useCallback((splineApp: Application) => {
    splineRef.current = splineApp;
  }, []);

  useEffect(() => {
    if (splineRef.current && !isLoading) {
      // GSAP Animations with ScrollTrigger
      ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        onEnter: () => {
          // Hero state logic
        }
      });
    }
  }, [isLoading, isDesktop]); // Dependencies fixed for Netlify

  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Suspense fallback={<div className="bg-black w-full h-full" />}>
        <Spline
          scene="/assets/skills-keyboard.spline" // Make sure this path is correct
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}
