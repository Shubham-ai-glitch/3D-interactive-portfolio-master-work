"use client";
import React, { Suspense, useEffect, useState } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Sirf browser mein load hoga
  }, []);

  if (!mounted) return <div className="bg-black w-full h-full" />;

  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="bg-black w-full h-full animate-pulse text-white flex items-center justify-center font-mono">Loading 3D Keyboard...</div>}>
        {/* Aapka asli scene URL yahan aayega */}
        <Spline scene="https://prod.spline.design/your-scene-id/scene.splinecode" />
      </Suspense>
    </div>
  );
}
