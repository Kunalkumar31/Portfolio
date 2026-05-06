"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  FileText,
  Sparkles,
  Briefcase, Rocket, Brain
} from "lucide-react";

export default function Hero() {
  const roles = useMemo(
    () => [
      "Full-Stack Engineer (MERN & Next.js)",
      "Building Scalable, AI-Driven Products",
      "Turning Ideas into Production Systems",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 min-h-screen bg-white dark:bg-gray-900 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px] bg-purple-500/10 blur-3xl rounded-full top-10 sm:top-20 left-1/2 -translate-x-1/2 -z-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center w-full max-w-3xl"
      >

        {/* Profile */}
        <motion.div variants={item}>
          <Image
            src="/Me_P.png"
            alt="Kunal Kumar"
            width={120}
            height={120}
            className="sm:w-[140px] sm:h-[140px] rounded-full border border-gray-300 dark:border-gray-700 shadow-md"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="mt-5 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          Hi, I’m{" "}
          <span className="font-extrabold">Kunal Kumar</span>
        </motion.h1>

        {/* Role */}
        <AnimatePresence mode="wait">
          <motion.p
            key={roles[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-2 sm:mt-3 text-sm sm:text-lg text-gray-600 dark:text-gray-400"
          >
            {roles[index]}
          </motion.p>
        </AnimatePresence>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs sm:max-w-xl md:max-w-2xl"
        >
          I build{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            scalable, high-performance web applications
          </span>{" "}
          and{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            AI-powered systems
          </span>{" "}
          that solve real-world problems — from idea to production.
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          variants={item}
          className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300">
            <Briefcase size={14} />
            1+ Years Experience
          </span>

          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300">
            <Rocket size={14} />
            10+ Projects Built
          </span>

          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300">
            <Brain size={14} />
            AI & Scalable Systems
          </span>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={item}
          className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 max-w-xs sm:max-w-xl"
        >
          {["React",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "WebSockets",
            "Tailwind CSS",
            "TypeScript",
            "AWS",
            "Docker",
            "REST APIs",
            "OpenAI API",
            "Git",].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {tech}
                </span>
              )
            )}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto px-5 py-3 flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-black hover:scale-105 transition"
          >
            <Code size={18} /> View Projects
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-5 py-3 flex items-center justify-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Mail size={18} /> Let’s Work Together
          </Link>

          <a
            href="/KunalKumar_CV.pdf"
            download
            className="w-full sm:w-auto px-5 py-3 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FileText size={18} /> Download Resume
          </a>
        </motion.div>

        {/* Social */}
        <motion.div
          variants={item}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {[
            { href: "https://github.com/Kunalkumar31", icon: <Github size={18} /> },
            { href: "https://linkedin.com/in/kunalkumar31", icon: <Linkedin size={18} /> },
            { href: "mailto:kunalkumarofficial31@gmail.com", icon: <Mail size={18} /> },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 sm:mt-10 flex flex-col items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
        ><div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center max-w-xs sm:max-w-md md:max-w-lg mx-auto">
            <Sparkles size={14} className="text-indigo-500 shrink-0" />
            <span className="leading-relaxed">
              Engineering <span className="font-medium text-gray-800 dark:text-gray-200">scalable</span> &{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">production-grade</span> applications
            </span>
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-gray-300 dark:bg-gray-700"></div>

          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium text-center max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed">
            Actively open to{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              freelance
            </span>
            ,{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              full-time
            </span>{" "}
            &{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              remote opportunities
            </span>
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
        >
          <span className="text-xs sm:text-sm">Scroll to explore</span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}