"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const NyanCat = () => {
  const [pos, setPos] = useState({ x: -100, y: 50 });
  const [randY, setRandY] = useState(50);

  const moveCat = useCallback(() => {
    setPos((prev) => ({
      x: prev.x > (typeof window !== "undefined" ? window.innerWidth + 100 : 1000) ? -100 : prev.x + 2,
      y: randY
    }));
  }, [randY]);

  useEffect(() => {
    const interval = setInterval(moveCat, 30);
    return () => clearInterval(interval);
  }, [moveCat]);

  useEffect(() => {
    setRandY(Math.floor(Math.random() * 80) + 10);
  }, [pos.x === -100]); 

  return (
    <div style={{ position: 'fixed', left: pos.x, top: `${pos.y}%`, zIndex: 99, pointerEvents: 'none' }}>
      <Image 
        src="/assets/nyan-cat.gif" 
        alt="Nyan Cat Animation" 
        width={100} 
        height={50} 
        unoptimized 
      />
    </div>
  );
};

export default NyanCat;
