"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add sticky shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "shadow-md bg-white dark:bg-gray-900" : "bg-white/80 dark:bg-gray-900/80"
      } border-b backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
       <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(99, 102, 241, 0.8)" }}
  transition={{ duration: 0.5 }}
>
  <Link
    href="/"
    className="font-extrabold text-2xl text-gray-900 dark:text-gray-100 tracking-tight"
  >
    Kunal Kumar
  </Link>
</motion.div>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-medium">
          {["/", "/about", "/projects", "/contact"].map((href, idx) => {
            const label = href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2);
            return (
              <motion.div key={idx} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={href}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                >
                  {label}
                </Link>
              </motion.div>
            );
          })}
          <motion.a
            href="/KunalKumar_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Resume
          </motion.a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t shadow-sm"
      >
        <div className="flex flex-col items-center gap-4 py-4 font-medium">
          {["/", "/about", "/projects", "/contact"].map((href, idx) => {
            const label = href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2);
            return (
              <Link key={idx} href={href} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            );
          })}
          <a
            href="/KunalKumar_CV.pdf"
            download
            className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.nav>
  );
}
