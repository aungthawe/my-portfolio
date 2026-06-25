"use client";

import { motion } from "framer-motion";

export function GlobalBigBall() {
  return (
    <motion.div
      initial={{ opacity: 0.6}}
      animate={{
        opacity: [0.8],
        x: ["0vw", "70vw", "20vw", "90vw", "10vw", "50vw", "0vw"],
        y: ["0vh", "10vh", "80vh", "40vh", "90vh", "20vh", "0vh"],
        scale: [1, 1.15, 1, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "easeInOut",
      }}
      className="pointer-events-none fixed top-0 left-0 w-[650px] h-[650px]
                 bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500
                 rounded-full blur-[170px] -z-20"
    ></motion.div>
  );
}

export function GlobalSmallBall() {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{
        opacity: [0.3, 0.5],
        x: ["-20vw", "120vw", "-10vw", "130vw", "-10vw", "90vw", "-20vw"],
        y: ["-20vh", "120vh", "-30vh", "110vh", "-10vh", "80vh", "-20vh"],
        scale: [0.9, 1.05],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none fixed w-[450px] h-[450px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-blue-400 rounded-full blur-[100px] -z-50"
    />
  );
}
