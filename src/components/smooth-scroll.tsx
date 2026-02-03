"use client";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {})

  useEffect(() => {
    if (lenis) {
      // Scroll logic
    }
  }, [lenis]); // Lenis dependency added

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}
export default SmoothScroll;
