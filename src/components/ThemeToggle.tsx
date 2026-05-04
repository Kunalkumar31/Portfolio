"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  // Init theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;

    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // prevent hydration mismatch flash
  if (dark === null) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors bg-gray-300 dark:bg-gray-700"
    >
      {/* Sliding thumb */}
      <motion.div
        animate={{ x: dark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
          dark ? "bg-black" : "bg-white"
        }`}
      >
        {dark ? (
          <Moon size={14} className="text-yellow-400" />
        ) : (
          <Sun size={14} className="text-orange-500" />
        )}
      </motion.div>
    </button>
  );
}