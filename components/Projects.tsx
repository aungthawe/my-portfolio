"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing my skills, projects and experience using Next.js and Tailwind.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#", // replace later
  },
  {
    title: "Employee Management System",
    description: "CRUD application built with Spring Boot and PostgreSQL.",
    tech: ["Spring Boot", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Room Reservation AI",
    description:
      "Used AI model to auto-handle reservation data and validation.",
    tech: ["Gemini AI", "Firebase"],
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex justify-center items-center"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="mb-12 text-3xl font-bold text-gray-700"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group flex flex-col justify-between rounded-2xl bg-white/5 backdrop-blur-md border-white/10 hover:border-white/30 p-6 shadow-sm hover:shadow-md transition-shadow duration-200  hover:-translate-y-2 transform duration-400 transition-transform"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.45 }}
              custom={i}
              variants={cardVariants}
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-700">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/10 backdrop-blur-md text-gray-700 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="text-sm font-medium text-blue-500 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
