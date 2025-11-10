"use client"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="border-b bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm"
        >
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text"
                >
                    Kunal Kumar
                </Link>


                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center font-medium">
                    <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                        About
                    </Link>
                    <Link href="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                        Contact
                    </Link>
                    <a
                        href="/KunalKumar_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume
                    </a>
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
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white dark:bg-gray-900 border-t shadow-sm"
                >
                    <div className="flex flex-col items-center gap-4 py-4 font-medium">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                        <Link href="/projects" onClick={() => setIsOpen(false)}>
                            Projects
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
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
            )}
        </motion.nav>
    )
}
