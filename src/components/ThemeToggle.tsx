"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  // Initialize theme based on system preference or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
      setDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      setDark(false)
    }
  }, [])

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className=" cursor-pointer px-3 py-1 rounded-full border dark:border-gray-600 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-lg"
      aria-label="Toggle theme"
      title="Toggle Light/Dark Mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  )
}
