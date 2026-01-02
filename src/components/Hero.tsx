"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";
import { Github, Linkedin, Mail, Code, FileText } from "lucide-react";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "AI & Real-time Systems Enthusiast",
  ];
  const [index, setIndex] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const bgCircleRef = useRef<HTMLDivElement>(null);

  // Cycle roles every 3 seconds
  useEffect(() => {
    const rolesCount = roles.length;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rolesCount);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Animations on mount
  useEffect(() => {
    if (heroRef.current && bgCircleRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate hero content
      tl.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      // Animate background circles
      gsap.to(bgCircleRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 min-h-screen overflow-hidden font-mono bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">

      {/* Animated Background Circle */}
      <div
        ref={bgCircleRef}
        className="absolute w-[500px] h-[500px] bg-purple-200/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      ></div>

      {/* Hero Content */}
      <div ref={heroRef} className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <Image
          src="/Me_P.png"
          alt="Kunal Kumar"
          width={160}
          height={160}
          className="rounded-full border-2 border-gray-700 shadow-lg"
          priority
        />

        {/* Heading */}
        <motion.div className="mt-6" variants={container} initial="hidden" animate="show">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
            variants={item}
          >
            Hi, I’m Kunal Kumar
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={roles[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="mt-2 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300"
            >
              {roles[index]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 space-y-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item}>
            🚀 Full Stack Developer with 1+ years of experience in MERN & Next.js, building scalable, real-time, and AI-powered applications.
          </motion.p>
          <motion.p variants={item}>
            💡 Expert in REST/MySQL APIs, WebSockets, MongoDB, and cloud deployment (AWS & Docker) for efficient, robust solutions.
          </motion.p>
          <motion.p variants={item}>
            🤖 Passionate about AI-driven tools using OpenAI API, including chatbots, recommendation engines, and automated workflows.
          </motion.p>
          <motion.p variants={item}>
            🎯 Strong problem-solving skills, delivering high-quality results, and collaborating effectively in cross-functional teams.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Link
              href="/projects"
              className="px-6 py-3 flex items-center justify-center gap-2 border rounded text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
              <Code size={20} /> View Projects
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <a
              href="/KunalKumar_CV.pdf"
              download
              className="px-6 py-3 flex items-center justify-center gap-2 border rounded text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
              <FileText size={20} /> Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="mt-8 flex gap-6 justify-center"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {[
            { href: "https://github.com/Kunalkumar31", icon: <Github size={26} /> },
            { href: "https://www.linkedin.com/in/kunalkumar31/", icon: <Linkedin size={26} /> },
            { href: "mailto:kunalkumarofficial31@gmail.com", icon: <Mail size={26} /> },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-transform"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
