"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device uses touch or coarse pointer
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    let ringX = -100;
    let ringY = -100;
    let animFrame: number;

    const animateRing = () => {
      ringX += (pos.x - ringX) * 0.15;
      ringY += (pos.y - ringY) * 0.15;
      setRingPos({ x: ringX, y: ringY });
      animFrame = requestAnimationFrame(animateRing);
    };

    animFrame = requestAnimationFrame(animateRing);
    window.addEventListener("mousemove", moveCursor);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, [data-cursor-hover]")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(animFrame);
    };
  }, [pos.x, pos.y]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
        aria-hidden="true"
      />
      <div
        className={`cursor-ring ${hovered ? "hovered" : ""}`}
        style={{ left: ringPos.x, top: ringPos.y }}
        aria-hidden="true"
      />
    </>
  );
}
