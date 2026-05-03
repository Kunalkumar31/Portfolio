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
    title: "EfficioBoard",
    description:
      "Lightweight Kanban board to visually manage tasks and workflows.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kunalkumar31/EfficioBoard.git"
  },
  {
    title: "SnakeX",
    description:
      "Modern remake of the classic Snake game with smooth gameplay.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kunalkumar31/SnakeX.git"
  },
  {
    title: "Weather App",
    description:
      "Weather app with dark mode, local storage, and reviews.",
    tech: ["React", "OpenWeatherMap API", "Tailwind CSS"],
    github: "https://github.com/Kunalkumar31/Weather-App.git",
    live: "https://weather-app-jet-eight-56.vercel.app/",
  },
  {
    title: "BlossomCart UI",
    description:
      "Modern e-commerce UI delivering smooth shopping experience.",
    tech: ["MERN", "Tailwind CSS"],
    github: "https://github.com/Kunalkumar31/blossomcraft-ui.git",
    live: "https://blossomcraft-ui.vercel.app/",
  },
  {
    title: "Password Generator",
    description:
      "Secure password generator with customizable options.",
    tech: ["JavaScript", "HTML", "CSS"],
    github:
      "https://github.com/Kunalkumar31/JavaScript--Based-Secure-Password-Generator.git",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

export default function Projects() {
  return (
    <section className="relative max-w-6xl mx-auto py-24 px-6">

      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-100/40 via-purple-100/30 to-pink-100/40 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-pink-900/10 blur-3xl"></div>

      {/* Badge */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Featured Projects
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-center mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        A curated collection of real-world applications showcasing my skills in
        full-stack development, real-time systems, performance optimization,
        and modern web technologies.
      </motion.p>

      {/* Grid */}
      <motion.div
        className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}