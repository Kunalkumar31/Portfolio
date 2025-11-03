"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowDown, Code, FileText } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const roles = ["Full Stack Developer", "MERN & Next.js Specialist", "AI & Real-time Systems Enthusiast"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Animated Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* Profile Image */}
      <motion.img
        src="/PS_PIC.png"
        alt="Kunal Kumar"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-600 shadow-lg relative z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Heading and Roles */}
      <motion.div className="relative z-10" variants={container} initial="hidden" animate="show">
        {/* Animated Gradient Name */}
        <motion.h1
          className="mt-6 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient"
          variants={item}
        >
          Hi, I’m Kunal Kumar
        </motion.h1>

        {/* Typing Animated Roles */}
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="mt-2 text-lg md:text-2xl font-medium text-indigo-500 dark:text-indigo-400 typing-text"
        >
          {roles[index]}
        </motion.p>
      </motion.div>

      {/* Description */}
      <motion.div className="mt-6 max-w-3xl text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-3">
        <motion.p variants={item}>
          🚀 <span className="font-semibold">Professional Full Stack Developer</span>  
          specializing in <span className="text-indigo-600 font-semibold">MERN & Next.js</span>, building  
          <span className="font-medium"> scalable, real-time, and AI-driven applications</span>.
        </motion.p>
        <motion.p variants={item}>
          💡 Experienced in <span className="italic">REST/MySQL APIs, WebSockets, Cloud Deployments (AWS & Docker), Authentication</span>  
          and Database Management (MongoDB & MySQL).
        </motion.p>
        <motion.p variants={item}>
          🤖 Passionate about <span className="text-indigo-600 font-semibold">AI integrations</span> with OpenAI API for chatbots, recommendation systems, and automation.
        </motion.p>
        <motion.p variants={item}>
          🎯 Recognized for problem-solving, adaptability, and delivering high-quality solutions.  
          Open to challenging projects & innovative collaborations.
        </motion.p>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div className="mt-6 flex flex-wrap justify-center gap-4" variants={item}>
        <Link
          href="/projects"
          className="px-6 py-3 flex items-center gap-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          <Code size={20} /> View Projects
        </Link>
        <a
          href="/kunal-cv-Shared.pdf"
          download
          className="px-6 py-3 flex items-center gap-2 border rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <FileText size={20} /> Download Resume
        </a>
      </motion.div>

  {/* Social Icons */}
<motion.div
  className="mt-8 flex gap-6 justify-center"
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  }}
>
  {[
    {
      href: "https://github.com/Kunalkumar31",
      icon: <Github size={28} />,
    },
    {
      href: "https://www.linkedin.com/in/kunalkumar31/",
      icon: <Linkedin size={28} />,
    },
    {
      href: "mailto:kunalkumarofficial31@gmail.com",
      icon: <Mail size={28} />,
    },
  ].map((item, index) => (
    <motion.a
      key={index}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 transition-transform transform hover:text-indigo-600"
      whileHover={{ scale: 1.3, rotate: 10 }}
      whileTap={{ scale: 0.9, rotate: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.2 }}
    >
      {item.icon}
    </motion.a>
  ))}
</motion.div>

      {/* Scroll Down Indicator */}
      <motion.div className="absolute bottom-6 flex flex-col items-center text-gray-500 dark:text-gray-400 animate-bounce">
        <ArrowDown size={24} />
        <span className="text-sm">Scroll</span>
      </motion.div>
    </section>
  )
}
