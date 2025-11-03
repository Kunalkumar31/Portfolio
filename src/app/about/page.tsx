"use client"

import { motion, Variants } from "framer-motion"

export default function About() {
    // Reusable animation
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            {/* Heading */}
            <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial="hidden"
                animate="show"
                variants={fadeUp}
            >
                About Me
            </motion.h1>

            {/* Main Intro */}
            <motion.p
                className="mt-8 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto"
                custom={1}
                initial="hidden"
                animate="show"
                variants={fadeUp}
            >
                Hi 👋 I’m{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    Kunal Kumar
                </span>
                , a{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Full Stack Developer
                </span>{" "}
                with expertise in{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                    MERN & Next.js
                </span>
                . I love transforming ideas into{" "}
                <span className="font-bold">interactive, scalable, and impactful</span>{" "}
                digital solutions, while exploring{" "}
                <span className="font-semibold text-indigo-400">AI-powered apps</span>{" "}
                that make technology smarter.
            </motion.p>

            {/* Animated Goal Line */}
            <motion.p
                className="mt-6 text-md md:text-lg text-gray-600 dark:text-gray-400 text-center italic"
                custom={2}
                initial="hidden"
                animate="show"
                variants={fadeUp}
            >
                ✨ My mission is simple: build apps that blend{" "}
                <span className="font-semibold">performance</span>,{" "}
                <span className="font-semibold">creativity</span>, and{" "}
                <span className="font-semibold">AI-driven innovation</span>.
            </motion.p>

            {/* Highlight Cards */}
            <div className="mt-14 grid gap-8 md:grid-cols-4 cursor-pointer">
                {[
                    { icon: "⚡", title: "Fast", desc: "Optimized apps with performance in mind." },
                    { icon: "💡", title: "Creative", desc: "Modern, clean, and engaging UI/UX." },
                    { icon: "🚀", title: "Scalable", desc: "Apps built with growth and reliability." },
                    { icon: "🤖", title: "AI-Driven", desc: "Integrating AI for smarter user experiences." },
                    { icon: "🔒", title: "Secure", desc: "Strong authentication & data protection practices." },
                    { icon: "📱", title: "Responsive", desc: "Seamless experience across all devices." },
                    { icon: "🛡️", title: "Reliable", desc: "Robust apps tested for stability and uptime." },
                    { icon: "🧩", title: "Maintainable", desc: "Clean, modular code for easier updates and scaling." }



                ].map((item, i) => (
                    <motion.div
                        key={item.title}
                        className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-2"
                        custom={i + 3}
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                    >
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Animated Stats */}
            <div className="mt-16 grid gap-8 md:grid-cols-3 text-center cursor-pointer">
                {[
                    { num: "7+", label: "Projects Completed" },
                    { num: "0-1", label: "Years of Experience" },
                    { num: "8+", label: "Technologies Mastered" },
                    { num: "5000+", label: "Hours of Coding Practice" },
                    { num: "10+", label: "Certifications Earned" },
                    { num: "100+", label: "DSA Problems Solved" },
                    { num: "10+", label: "Open Source Contributions" },
                    { num: "5+", label: "Coding Contest Participated" },
                    { num: "4+", label: "Internships & Training" },



                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className="p-6 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg"
                        custom={i + 7}
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                    >
                        <motion.h3
                            className="text-4xl font-extrabold"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            {stat.num}
                        </motion.h3>
                        <p className="mt-2 text-lg">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Call-to-action */}
            <motion.div
                className="mt-16 text-center"
                custom={10}
                initial="hidden"
                animate="show"
                variants={fadeUp}
            >
                <a
                    href="/contact"
                    className="inline-block px-8 py-3 text-lg bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-xl transition transform hover:scale-110"
                >
                    Let’s Connect
                </a>
            </motion.div>
        </section>
    )
}
