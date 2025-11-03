'use client'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }: { project: { title: string, description: string, tech: string[], github?: string, live?: string } }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-5 bg-white dark:bg-gray-800 shadow-lg rounded-xl border hover:shadow-xl"
    >
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded dark:bg-indigo-700 dark:text-white"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
