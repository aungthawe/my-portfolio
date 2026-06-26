"use client";

import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import * as LucideIcons from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex justify-center items-center py-20"
    >
      <div className="mx-auto max-w-4xl px-6 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="mb-12 text-3xl font-bold text-gray-700"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => {
            // Dynamically select the icon from the Lucide bundle package
            const IconComponent =
              LucideIcons[project.iconName] || LucideIcons.FolderGit2;

            return (
              <motion.div
                key={project.title}
                className="group flex flex-col justify-between rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div>
                  {/* TOP CARD BAR: DYNAMIC ICON */}
                  <div className="mb-4 text-purple-900 group-hover:scale-110 transition-transform duration-300 origin-left">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-gray-700">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* TECH BADGES */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-blue-500/10 backdrop-blur-md border border-blue-500/20 text-blue-700 px-2 py-1 rounded-full shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ACTION FOOTER: GITHUB CONNECT */}
                  <motion.a
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-900 hover:text-purple-700 p-2 hover:bg-black/10 rounded-full transition-colors duration-200"
                  >
                    View Project{" "}
                    <svg
                      height="14"
                      width="14"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
