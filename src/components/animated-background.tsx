"use client";
import React, { Suspense, useEffect, useState } from "react";
// Import hata kar direct load karenge taaki build error na aaye
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Sirf client-side par render hoga
  }, []);

  // Jab tak page load na ho, sirf black background dikhao
  if (!mounted) return <div className="w-full h-full bg-black" />;

  return (
    <div className="w-full h-full min-h-[500px]">
      <Suspense fallback={<div className="w-full h-full bg-black flex items-center justify-center text-blue-500 font-mono animate-pulse">BOOTING SYSTEM...</div>}>
        <Spline 
          scene="https://prod.spline.design/your-scene-id/scene.splinecode" 
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}
