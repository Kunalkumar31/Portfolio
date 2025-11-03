"use client"

import { motion } from "framer-motion"
import ProjectCard from "../../components/ProjectCard"

const projects = [
  {
    title: "VillageConnect",
    description: "Connect rural communities with services, schemes, forums, and real-time chat.",
    tech: ["MERN", "Tailwind CSS", "Socket.io"],
    github: "https://github.com/Kunalkumar31/VillageConnect-Empowering-Rural-Communities-through-Digital-Access.git",
    // live: "#", // add live URL if deployed
  },
  {
    title: "Orderbook Viewer",
    description: "Real-time orderbook visualizer for exchanges.",
    tech: ["Next.js", "WebSockets", "Recharts"],
    github: "https://github.com/Kunalkumar31/Real-time-orderbook-simulator.git", // add GitHub link
    // live: "#",   // add live URL
  },
  {
    title: "LMS Platform",
    description: "Full-featured LMS with roles, quizzes, and AI recommendations.",
    tech: ["MERN", "Socket.io", "OpenAI"],
    github: "https://github.com/Kunalkumar31/LMS_project.git",
    // live: "#",
  },
  {
    title: "Weather App",
    description: "Weather app with dark mode, local storage, and reviews section.",
    tech: ["React", "OpenWeatherMap API", "Tailwind CSS"],
    github: "https://github.com/Kunalkumar31/Weather-App.git",
    live: "https://weather-app-jet-eight-56.vercel.app/",
  },
  {
    title: "BloosmCart-UI",
    description:
      "Responsive e-commerce home page UI with catalog highlights and cart section, built for a clean and modern user experience.",
    tech: ["MERN", "Stripe API", "Tailwind CSS"],
    github: "https://github.com/Kunalkumar31/blossomcraft-ui.git",
    live: "https://blossomcraft-ui.vercel.app/",
  },
  {
    title: "JavaScript Password Generator",
    description: "Secure password generator with options for length, symbols, numbers, and copy-to-clipboard.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Kunalkumar31/JavaScript--Based-Secure-Password-Generator.git",
    // live: "#",
  },
];


// Variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80 },
  },
} as const


export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Projects Showcase
      </motion.h1>

      <motion.p
        className="text-center mt-3 text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        A collection of my favorite projects — built with love, code, and lots of ☕
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
