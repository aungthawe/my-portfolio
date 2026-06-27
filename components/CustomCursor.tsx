"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  // Add a state to conditionally render the cursor on desktop only
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Check if it's a mobile/touch device or narrow viewport
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isMobileViewport = window.innerWidth < 768;

    // If it's mobile, stop execution immediately and do not listen to events
    if (isTouchDevice || isMobileViewport) {
      return;
    }

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  useEffect(() => {
    // Break out of the second listener hook if we're hidden (on mobile)
    if (!isVisible) return;

    const interactiveElements = Array.from(
      document.querySelectorAll(
        "a, button, .interactive, input, textarea, select, label",
      ),
    );
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [isVisible]); // Triggers cleanly once visibility is computed

  // Render absolutely nothing if on a mobile or tablet screen
  if (!isVisible) return null;

  return (
    <>
      {/* Core Dot */}
      <motion.div
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="fixed w-2 h-2 bg-black rounded-full pointer-events-none z-50"
      />

      {/* Smooth Halo */}
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: hovered ? 1.5 : 1,
          opacity: hovered ? 0.7 : 0.3,
          borderColor: hovered ? "#000000ff" : "#000000",
          borderWidth: hovered ? 3 : 1,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed w-10 h-10 border border-black rounded-full pointer-events-none z-40"
      />
    </>
  );
}
