"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/Kunalkumar31", icon: <Github size={18} />, label: "GitHub" },
    { href: "https://linkedin.com/in/kunalkumar31", icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: "mailto:kunalkumarofficial31@gmail.com", icon: <Mail size={18} />, label: "Email" },
  ];

  return (
    <footer className="relative mt-20 border-t border-gray-200 dark:border-gray-800">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-500/10 blur-3xl rounded-full"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        {/* Left */}
        <div className="space-y-2">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a
              href="mailto:kunalkumarofficial31@gmail.com"
              className="font-semibold text-indigo-600 hover:text-indigo-500 transition"
            >
              Kunal Kumar
            </a>
          </p>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            Building scalable & AI-powered digital experiences
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Bottom Note */}
      <motion.div
        className="pb-6 flex justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center text-center leading-relaxed max-w-xs sm:max-w-md">

          Designed & built with

          <Heart
            size={14}
            className="text-red-500 animate-pulse shrink-0"
          />

          by{" "}

          <a
            href="mailto:kunalkumarofficial31@gmail.com"
            className="font-semibold text-indigo-600 hover:text-indigo-500 transition"
          >
            Kunal Kumar
          </a>

        </p>
      </motion.div>
    </footer>
  );
}