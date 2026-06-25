"use client";
import { motion } from "framer-motion";

export default function Hero2() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center "
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-6xl font-bold mb-6"
        >
          Hi, I’m <span className="text-purple-900">Aung Thawe Thit Oo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg text-gray-900 md:text-xl"
        >
          Student and I love to create beautiful and functional web applications.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer px-6 py-3 bg-black text-white rounded-full transition-all"
            onClick={() => handleScroll("projects")}
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-white/30 backdrop-blur-md ring ring-1 ring-white/10 text-black rounded-full px-6 py-3"
            onClick={() => handleScroll("contact")}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
