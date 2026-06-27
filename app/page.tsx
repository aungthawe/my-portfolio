"use client";
import Navbar from "@/components/Navbar";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact2";

import Education from "@/components/Educations";
import Hero2 from "@/components/Hero2";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero2 />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
