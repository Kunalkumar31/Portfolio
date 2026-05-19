"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState("")

  // progress %
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          return 100
        }
        return p + 5
      })
    }, 98)
    return () => clearInterval(timer)
  }, [])

  // animated dots …
  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."))
    }, 600)
    return () => clearInterval(dotTimer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        opacity: progress === 100 ? 0 : 1,
        scale: progress === 100 ? 1.05 : 1
      }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden"
    >

      {/* subtle moving gradient */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.12), transparent 40%)",
            "radial-gradient(circle at 80% 80%, rgba(99,102,241,0.12), transparent 40%)",
            "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.12), transparent 40%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0"
      />

      <div className="text-center relative">

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 20, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          KUNAL KUMAR
        </motion.h1>

        {/* subtitle with dots */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6 }}
          className="mt-3 text-xs tracking-[0.4em] text-gray-500"
        >
          LOADING PORTFOLIO{dots}
        </motion.p>

        {/* progress bar */}
        <div className="w-56 h-[2px] bg-gray-200 dark:bg-gray-700 mt-8 mx-auto overflow-hidden">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full bg-gray-900 dark:bg-white"
          />
        </div>

        <p className="text-xs mt-2 text-gray-400">{progress}%</p>

      </div>
    </motion.div>
  )
}