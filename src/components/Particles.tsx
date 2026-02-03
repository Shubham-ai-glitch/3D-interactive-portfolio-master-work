"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { useMousePosition } from "@/utils/mouse";

export default function Particles({
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const initCanvas = useCallback(() => {
    if (canvasContainerRef.current && canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      if (context.current) context.current.scale(dpr, dpr);
    }
  }, [dpr]);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [initCanvas]);

  useEffect(() => {
    mouse.current.x = mousePosition.x;
    mouse.current.y = mousePosition.y;
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="absolute inset-0 -z-10" ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
