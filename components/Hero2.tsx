"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../assets/profile.jpg";
import { Download} from "lucide-react";
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
      className="relative w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl w-full px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* COLUMN 2: RIGHT-ALIGNED HIGH-RES PHOTO (Takes up 5 out of 12 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="md:col-span-5 flex justify-center md:justify-start"
        >
          {/* Container size maps strictly to a premium desktop frame dimension */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-white/5 backdrop-blur-md ring ring-1 ring-white/15 p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={profilePic}
                alt="Aung Thawe Thit Oo"
                fill
                priority
                placeholder="blur"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                sizes="(max-width: 768px) 320px, 400px"
              />
            </div>
          </div>
        </motion.div>
        {/* COLUMN 1: LEFT-ALIGNED TEXT DATA (Takes up 7 out of 12 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left md:col-span-7 flex flex-col justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Hi, I`m <span className="text-purple-900">Aung Thawe Thit Oo</span>.
            Welcome to my corner of the web.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-700 md:text-xl font-light leading-relaxed max-w-xl"
          >
            Exploring the boundaries of software, mastering new languages, and
            building cool things along the way.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-6 py-3 bg-black text-white rounded-full transition-all text-sm font-medium shadow-sm"
              onClick={() => handleScroll("projects")}
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-white/30 backdrop-blur-md ring ring-1 ring-white/10 text-black rounded-full px-6 py-3 text-sm font-medium shadow-sm transition-colors duration-400 hover:bg-gray-900 hover:text-white transition-all"
              onClick={() => handleScroll("contact")}
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" // Direct reference to your root public folder file
              download="Aung_Thawe_Thit_Oo_Resume.pdf" // Sets the exact filename when downloaded
              className="cursor-pointer bg-white/30 backdrop-blur-md ring ring-1 ring-white/10 text-black rounded-full px-6 py-3 text-sm font-medium shadow-sm flex items-center gap-2 transition-colors duration-400 hover:bg-gray-900 hover:text-white transition-all"
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
