"use client";

import React from "react";
import { motion, TargetAndTransition } from "framer-motion";

type Skill = {
  name: string;
  percent: number;
  icon: React.ReactNode;
};

type Category = {
  title: string;
  skills: Skill[];
};

/* Simple inline SVG icons mapped to key names (keeps dependency-free) */
const Icon = ({ name }: { name: string }) => {
  const commonProps = {
    width: 20,
    height: 20,
    className: "inline-block align-middle mr-3",
  };
  switch (name.toLowerCase()) {
    case "html":
      return (
        <svg
          {...commonProps}
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9h90l-8 90-37 10-37-10L19 9z" fill="#E44F26" />
          <path d="M64 115v-9.5l29-7.8 6.7-75.2H64" fill="#F16529" />
          <path
            d="M64 52h18l1.2-13H64v-9.9h37.8l-1.6 18.3L64 52z"
            fill="#fff"
          />
        </svg>
      );
    case "css":
    case "tailwind":
      return (
        <svg
          {...commonProps}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6c-2 0-3 1-5 1s-2 0-4-1v10c2 1 3 1 5 1 2 0 3-1 5-1s2 0 4 1V7c-2-1-3-1-5-1z"
            fill="#06B6D4"
          />
        </svg>
      );
    case "javascript":
      return (
        <svg {...commonProps} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="24" fill="#F7DF1E" />
          <path
            d="M38 34h16v60H38zM86 93c-1 7-6 12-14 12-8 0-15-6-15-17 0-10 6-16 15-16 6 0 10 2 12 4l-5 11c-1-1-3-2-6-2-3 0-5 2-5 6 0 4 2 6 5 6 4 0 6-3 7-8l6 3z"
            fill="#000"
          />
        </svg>
      );
    case "typescript":
      return (
        <svg
          {...commonProps}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M7 7h6v2H9v8H7V7z" fill="#fff" />
        </svg>
      );
    case "react":
      return (
        <svg
          {...commonProps}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <path
            d="M12 2c2.7 0 6.6 2.8 8.4 5.6 1.6 2.5 1.6 4.9 0 7.4C18.6 20.1 14.7 23 12 23s-6.6-2.8-8.4-5.6c-1.6-2.5-1.6-4.9 0-7.4C5.4 4.8 9.3 2 12 2z"
            stroke="#61DAFB"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      );
    case "java":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <path
            d="M6 2s4 1 6 4"
            stroke="#5382A1"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <rect
            x="6"
            y="10"
            width="12"
            height="6"
            rx="2"
            fill="#5382A1"
            opacity="0.15"
          />
        </svg>
      );
    case "spring boot":
    case "spring":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#6DB33F" strokeWidth="1.2" />
        </svg>
      );
    case "sql":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#0172C6" />
        </svg>
      );
    case "firebase":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l3 7 6 1-8 6L6 10l6-8z" fill="#FFCA28" />
        </svg>
      );
    case "c#":
    case "csharp":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#9B4F96" />
        </svg>
      );
    case "odata":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#4A90E2" />
        </svg>
      );
    case "c++":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#00599C" />
        </svg>
      );
    case "blazor":
      return (
        <svg {...commonProps} viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16v16H4z" fill="#512BD4" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps} viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="#CBD5E1" />
        </svg>
      );
  }
};

/* Data: categories and skills with percents (from your list + reasonable defaults) */
const categories: Category[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", percent: 80, icon: <Icon name="html" /> },
      { name: "CSS / Tailwind", percent: 85, icon: <Icon name="css" /> },
      { name: "JavaScript", percent: 65, icon: <Icon name="javascript" /> },
      { name: "TypeScript", percent: 60, icon: <Icon name="typescript" /> },
      { name: "React", percent: 65, icon: <Icon name="react" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", percent: 65, icon: <Icon name="java" /> },
      { name: "Spring Boot", percent: 55, icon: <Icon name="spring" /> },
      { name: "C#", percent: 40, icon: <Icon name="csharp" /> },
      { name: "OData", percent: 35, icon: <Icon name="odata" /> },
    ],
  },
  {
    title: "Database ",
    skills: [
      { name: "SQL", percent: 70, icon: <Icon name="sql" /> },
      { name: "Firebase", percent: 40, icon: <Icon name="firebase" /> },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "C++", percent: 40, icon: <Icon name="c++" /> },
      { name: "Blazor", percent: 30, icon: <Icon name="blazor" /> },
    ],
  },
];

// const barVariants = {
//   hidden: { width: 0 },
//   show: (p: number) => ({
//     width: `${p}%`,
//     transition: { duration: 2.0, ease: "easeOut" },
//   }),
// };

const barVariants = {
  hidden: { width: 0 },
  // Explicitly typing the return value of the function fixes the assignment error
  show: (p: number): TargetAndTransition => ({
    width: `${p}%`,
    transition: { duration: 2.0, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="mb-12 text-3xl font-bold text-gray-700"
        >
          Skills
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="group rounded-2xl bg-white/5 backdrop-blur-md border-white/10 hover:border-gray-300 transition-border p-5 shadow-sm hover:shadow-md transition-shadow duration-200 hover:-translate-y-2 transform duration-400 transition-transform"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              custom={idx}
            >
              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                {cat.title}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    {/* label + icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="rounded-full bg-white/8 backdrop-blur-md p-2 ring-1 ring-white/10">
                          {s.icon}
                        </span>
                        <span className="ml-3 text-sm font-medium text-gray-800">
                          {s.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-500">
                        {s.percent}%
                      </span>
                    </div>

                    {/* bar background */}
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        custom={s.percent}
                        variants={barVariants}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
