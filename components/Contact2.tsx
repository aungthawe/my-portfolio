"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Define your destination email address
    const myEmail = "aungthawe.stu@gmail.com";

    // 2. Format a professional email body including the user's name and email context
    const emailBody = `Name: ${form.name}\n\nMessage:\n${form.message}`;

    // 3. Cleanly encode parameters to handle spaces and special characters perfectly
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
    const body = encodeURIComponent(emailBody);

    // 4. Construct the mailto string and trigger browser client launch
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;

    setForm({ name: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex justify-center items-center"
    >
      <div className="px-6 w-4xl mx-auto">
        <motion.h2
          className="mb-8 text-3xl font-bold text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          Contact
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white/5 backdrop-blur-md border-white/10 p-8 shadow-sm  hover:shadow-md transition-shadow duration-200 hover:-translate-y-2 transform duration-400 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85 }}
        >
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-lg bg-white/10 backdrop-blur-md border-white/10  px-4 py-2 text-gray-800 outline-none focus:ring-2 focus:ring-gray-300 hover:bg-white/20 transition-colors duration-250"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full rounded-lg bg-white/10 backdrop-blur-md border-white/10 px-4 py-2 text-gray-800 outline-none focus:ring-2 focus:ring-gray-300 hover:bg-white/20 transition-colors duration-250"
              required
            />
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            className="rounded-full border border-gray-300 px-6 py-3 text-gray-700 transition-colors duration-400 hover:bg-gray-900 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
