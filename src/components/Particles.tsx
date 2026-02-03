"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { useMousePosition } from "@/utils/mouse";

interface ParticlesProps {
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const initCanvas = useCallback(() => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  }, [dpr]);

  const circleParams = useCallback(() => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const pX = x + Math.random() * canvasSize.current.w;
    const pY = y + Math.random() * canvasSize.current.h;
    const size = Math.floor(Math.random() * 2) + 0.1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return { x, y, translateX, translateY, pX, pY, size, alpha, targetAlpha, dx, dy, magnetism };
  }, []);

  const drawCircle = useCallback((circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  }, [dpr]);

  const animate = useCallback(() => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      circles.current.forEach((circle: any, i: number) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.current.h - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat((closestEdge / 20).toFixed(2));
        if (remapClosestEdge < 1) {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        } else {
          circle.alpha = circle.targetAlpha;
        }
        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
        circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;
        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.current.h + circle.size
        ) {
          circles.current.splice(i, 1);
          const newCircle = circleParams();
          drawCircle(newCircle);
        } else {
          drawCircle(circle, true);
        }
      });
      window.requestAnimationFrame(animate);
    }
  }, [circleParams, drawCircle, ease, staticity]);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);
    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, [initCanvas, animate]); // Fixed Dependencies

  useEffect(() => {
    mouse.current.x = mousePosition.x;
    mouse.current.y = mousePosition.y;
  }, [mousePosition.x, mousePosition.y]); // Fixed Dependencies

  useEffect(() => {
    initCanvas();
  }, [refresh, initCanvas]); // Fixed Dependencies

  return (
    <div className="absolute inset-0 -z-10" ref={canvasContainerRef} aria-hidden="true">
