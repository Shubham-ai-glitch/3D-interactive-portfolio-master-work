"use client";
import React, { Suspense, useEffect, useState } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures component only runs on client
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-black" />; // Black screen until mounted
  }

  return (
    <div className="w-full h-full min-h-[400px]">
      <Suspense fallback={<div className="w-full h-full bg-black animate-pulse flex items-center justify-center text-zinc-500 font-mono">Initializing 3D Keyboard...</div>}>
        <Spline 
          scene="https://prod.spline.design/79rBf89-72jUu86I/scene.splinecode" 
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}
