"use client";
import { motion } from "framer-motion";
import { educationData, EducationItem } from "@/data/education";

export default function Education() {
  // Simple helper function to color-code tags based on categorical types
  const getTagStyle = (type: EducationItem["type"]) => {
    switch (type) {
      case "experience":
        return "bg-emerald-500/10 text-emerald-700 border-emerald-500/20";
      case "certification":
        return "bg-purple-500/10 text-purple-700 border-purple-500/20";
      case "language":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      default:
        return "bg-yellow-500/10 text-gray-700 border-yellow-500/20";
    }
  };

  return (
    <section
      id="education"
      className="min-h-screen overflow-hidden flex flex-col items-center justify-center py-20"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-left"
        >
          <h2 className="text-3xl font-bold text-gray-700 tracking-tight">
            Education & Experience
          </h2>
          <p className="mt-2 text-gray-500 font-light">
            My formal background, independent studies, and professional
            certifications.
          </p>
        </motion.div>

        {/* DYNAMIC GRID LAYOUT */}
        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white/5 backdrop-blur-md border-white/10 p-8 shadow-sm hover:shadow-md transition-shadow duration-200 hover:-translate-y-1 transform duration-300 transition-transform"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-700 group-hover:text-purple-900 transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <h4 className="text-sm font-medium text-purple-800 mb-3 tracking-wide uppercase">
                  {item.institution}
                </h4>

                <p className="text-sm leading-relaxed text-gray-600 font-light">
                  {item.description}
                </p>

                {item.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getTagStyle(item.type)}`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
