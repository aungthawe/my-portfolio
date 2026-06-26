"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex flex-col items-center justify-center "
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* MAIN BIO PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 ,delay: 0.15}}
          className="rounded-2xl border border-gray-100 bg-white/20 backdrop-blur-sm border-white/10 p-8 shadow-md hover:shadow-lg transition-shadow duration-200 hover:-translate-y-2 transform duration-400 transition-transform"
        >
          <h2 className="mb-8 text-3xl font-bold text-gray-700">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            I`m Aung Thawe Thit Oo—a tech enthusiast, certified IT Engineer, and
            JLPT N3/N4 language learner. I build software because I love
            creating, and I study artificial intelligence because I’m fascinated
            by the future. Outside of tech, my life is a mix of reading books,
            exploring historical landmarks, staying active with fitness, and
            enjoying life as a twin. Welcome to my personal corner of the
            internet.
          </p>
        </motion.div>

        {/* DETAILS SUB-GRID */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* THE TECH SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-2xl border border-gray-100 bg-white/10 backdrop-blur-sm border-white/10 p-8 shadow-md hover:shadow-lg transition-shadow duration-200 hover:-translate-y-2 transform duration-400 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              The Tech Side
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Deeply passionate about software development and artificial
              intelligence. I back my curiosity with solid fundamentals, holding
              an ITPEC Fundamental IT Engineer certification.
            </p>
          </motion.div>

          {/* INTERESTS & BACKGROUND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="rounded-2xl border border-gray-100 bg-white/10 backdrop-blur-sm border-white/10 p-8 shadow-md hover:shadow-lg transition-shadow duration-200 hover:-translate-y-2 transform duration-400 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Focus & Lifestyle
            </h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>• AI Study & Core Architecture Exploration</li>
              <li>• Japanese Language Tracking (JLPT N3/N4)</li>
              <li>• Reading, History Exploration & Fitness Workouts</li>
            
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
