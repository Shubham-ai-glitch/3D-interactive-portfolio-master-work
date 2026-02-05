"use client";
import React, { Suspense, useEffect, useState } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function AnimatedBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Sirf browser ready hone par load hoga
  }, []);

  if (!isLoaded) return <div className="bg-black w-full h-full" />;

  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="bg-black w-full h-full flex items-center justify-center text-white font-mono">Loading 3D Scene...</div>}>
        <Spline scene="https://prod.spline.design/your-scene-id/scene.splinecode" />
      </Suspense>
    </div>
  );
}
