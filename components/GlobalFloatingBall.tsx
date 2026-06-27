"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

// 1. Properly typed Variants object
const ballVariants: Variants = {
  static: {
    x: "40vw",
    y: "15vh",
    scale: 1,
    opacity: 0.6,
  },
  moving: {
    opacity: [0.8],
    x: ["0vw", "70vw", "20vw", "90vw", "10vw", "50vw", "0vw"],
    y: ["0vh", "10vh", "80vh", "40vh", "90vh", "20vh", "0vh"],
    scale: [1, 1.15, 1, 1.1, 1],
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "easeInOut",
    },
  },
};

export function GlobalBigBall() {
  // Default to static on server/initial render to prevent layout shifts
  const [animationState, setAnimationState] = useState<"static" | "moving">(
    "static",
  );

  useEffect(() => {
    // Check screen size cleanly inside useEffect (safe from SSR window errors)
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setAnimationState("moving");
      } else {
        setAnimationState("static");
      }
    };

    // Run once on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      variants={ballVariants}
      animate={animationState} // TypeScript reads this perfectly now!
      className="pointer-events-none fixed top-0 left-0 w-[350px] h-[350px] md:w-[650px] md:h-[650px] 
                 bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500
                 rounded-full blur-[80px] md:blur-[170px] -z-20"
    ></motion.div>
  );
}
