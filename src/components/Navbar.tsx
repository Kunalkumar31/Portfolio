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
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all ${
        scrolled
          ? "bg-white shadow-md dark:bg-gray-900"
          : "bg-white/70 dark:bg-gray-900/70"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/"
            className="font-extrabold text-xl sm:text-2xl text-gray-900 dark:text-white"
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
                className={`transition relative ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-500 rounded" />
                )}
              </Link>
            );
          })}

          {/* Resume */}
          <a
            href="/KunalKumar_CV.pdf"
            target="_blank"
            className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
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
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t"
      >
        <div className="flex flex-col items-center gap-4 py-5 font-medium">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="/KunalKumar_CV.pdf"
            target="_blank"
            className="px-3 py-1.5 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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