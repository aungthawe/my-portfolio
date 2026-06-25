"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex flex-col items-center justify-center "
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-gray-100 bg-white/5 backdrop-blur-md border-white/10 p-8 shadow-sm hover:shadow-md transition-shadow duration-200 hover:-translate-y-2 transform duration-400 transition-transform"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-700">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            I am a frontend developer who loves crafting clean, modern, and
            accessible web experiences. My focus is building high-quality UI
            using React, TypeScript, and modern styling tools like Tailwind CSS.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="rounded-2xl border border-gray-100 bg-white/5 backdrop-blur-md border-white/10 p-8 shadow-sm hover:shadow-md transition-shadow duration-200 hover:-translate-y-2 transform duration-400 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-700">What I Do</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>UI Design & Frontend Development</li>
              <li>Responsive Websites</li>
              <li>Performance User Experiences Optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="rounded-2xl border border-gray-100 bg-white/5 backdrop-blur-md border-white/10 p-8 shadow-sm hover:shadow-md transition-shadow duration-200 hover:-translate-y-2 transform duration-400 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-700">Tech Stack</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
