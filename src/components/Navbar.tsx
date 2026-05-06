"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all nav-glass ${
        scrolled ? "nav-glow" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/"
            className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Kunal Kumar
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">

          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link relative transition ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 nav-active"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Resume */}
          <a
            href="/KunalKumar_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden nav-glass border-t"
      >
        <div className="flex flex-col items-center gap-5 py-6 font-medium">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/KunalKumar_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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