"use client";

import { motion, Variants } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "VillageConnect",
    description:
      "Connect rural communities with services, schemes, forums, and real-time chat.",
    tech: ["MERN", "Tailwind CSS", "Socket.io"],
    github:
      "https://github.com/Kunalkumar31/VillageConnect-Empowering-Rural-Communities-through-Digital-Access.git",
  },
  {
    title: "Orderbook Viewer",
    description: "Real-time orderbook visualizer for exchanges.",
    tech: ["Next.js", "WebSockets", "Recharts"],
    github:
      "https://github.com/Kunalkumar31/Real-time-orderbook-simulator.git",
  },
  {
    title: "LMS Platform",
    description:
      "Full-featured LMS with roles, quizzes, and AI recommendations.",
    tech: ["MERN", "Socket.io", "OpenAI"],
    github: "https://github.com/Kunalkumar31/LMS_project.git",
  },
  {
    title: "Weather App",
    description:
      "Weather app with dark mode, local storage, and reviews section.",
    tech: ["React", "OpenWeatherMap API", "Tailwind CSS"],
    github: "https://github.com/Kunalkumar31/Weather-App.git",
    live: "https://weather-app-jet-eight-56.vercel.app/",
  },
  {
    title: "BlossomCart UI",
    description:
      "Designed with modern layout principles to deliver a smooth, user-friendly shopping experience across all devices.",
    tech: ["MERN","Tailwind CSS"],
    github: "https://github.com/Kunalkumar31/blossomcraft-ui.git",
    live: "https://blossomcraft-ui.vercel.app/",
  },
  {
    title: "JavaScript Password Generator",
    description:
      "Secure password generator with options for length, symbols, numbers, and copy-to-clipboard.",
    tech: ["JavaScript", "HTML", "CSS"],
    github:
      "https://github.com/Kunalkumar31/JavaScript--Based-Secure-Password-Generator.git",
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", 
      stiffness: 100,
      damping: 18,
    },
  },
};

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <motion.p
        className="text-center mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A curated selection of projects showcasing my work in full-stack
        development, real-time systems, and modern web technologies.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
