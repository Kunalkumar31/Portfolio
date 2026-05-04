'use client'

import { motion } from 'framer-motion'

export default function ProjectCard({
  project,
}: {
  project: {
    title: string
    description: string
    tech: string[]
    github?: string
    live?: string
  }
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative p-5 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all overflow-hidden"
    >

      {/* subtle glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[11px] sm:text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 transition"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-5 text-sm">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition font-medium"
          >
            GitHub ↗
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-700 dark:hover:text-green-300 transition font-medium"
          >
            Live Demo ↗
          </a>
        )}

      </div>

    </motion.div>
  )
}