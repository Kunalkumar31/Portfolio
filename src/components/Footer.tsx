"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/Kunalkumar31", icon: <Github size={20} />, label: "GitHub" },
    { href: "https://linkedin.com/in/kunalkumar31", icon: <Linkedin size={20} />, label: "LinkedIn" },
    { href: "mailto:kunalkumarofficial31@gmail.com", icon: <Mail size={20} />, label: "Email" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 border-t border-gray-300 dark:border-gray-700">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Copyright */}
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-indigo-600">
            <a href="mailto:kunalkumarofficial31@gmail.com">Kunal Kumar</a>
          </span>
          . All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-transform"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              {link.icon} <span className="hidden sm:inline">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.p
        className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Designed & Developed by{" "}
        <span className="font-semibold text-indigo-600">
          <a href="mailto:kunalkumarofficial31@gmail.com">Kunal Kumar</a>
        </span>
      </motion.p>
    </footer>
  );
}
