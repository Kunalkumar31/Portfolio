"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
    // Animation variants
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
    };

    return (
        <section className="max-w-7xl mx-auto py-16 px-5 md:px-8 lg:px-10">
            {/* Heading */}
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial="hidden"
                animate="show"
                variants={fadeUp}
            >
                About Me
            </motion.h1>

            {/* Intro */}
            <motion.p
                className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto"
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
                skilled in{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                    MERN & Next.js
                </span>
                . I love building{" "}
                <span className="font-bold">
                    interactive, scalable, and impactful digital solutions
                </span>{" "}
                while exploring{" "}
                <span className="font-semibold text-indigo-400">AI-powered apps</span>{" "}
                that make technology smarter.
            </motion.p>

            {/* Goal Line */}
            <motion.p
                className="mt-6 text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-400 text-center italic"
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
            <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                {[
                    { icon: "⚡", title: "Fast", desc: "Optimized apps with performance in mind." },
                    { icon: "💡", title: "Creative", desc: "Modern, clean, and engaging UI/UX." },
                    { icon: "🚀", title: "Scalable", desc: "Apps built for growth and reliability." },
                    { icon: "🤖", title: "AI-Driven", desc: "Integrating AI for smarter experiences." },
                    { icon: "🔒", title: "Secure", desc: "Strong authentication & data protection." },
                    { icon: "📱", title: "Responsive", desc: "Seamless across all devices." },
                    { icon: "🛡️", title: "Reliable", desc: "Robust apps tested for stability." },
                    { icon: "🧩", title: "Maintainable", desc: "Clean, modular, and scalable code." },
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Work Experience */}
            <motion.div
                className="mt-20"
                initial="hidden"
                animate="show"
                variants={fadeUp}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Work Experience
                </h2>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                    {[
                        {
                            role: "Programmer Analyst Intern",
                            company: "CepiaLabs PVT. LTD.",
                            location: "Noida, Uttar Pradesh",
                            period: "Aug 2025 – Present",
                            desc: "Contributing to the design and development of scalable web platforms using React.js, Node.js, and MongoDB. Enhanced system performance by implementing optimized APIs and collaborated with cross-functional teams to deliver data-driven, user-centric solutions.",
                        },
                        {
                            role: "Full Stack Developer Intern",
                            company: "Code Core Global",
                            location: "Jaipur, Rajasthan",
                            period: "May 2025 – Aug 2025",
                            desc: "Developed and maintained MERN-based applications with Next.js, Socket.io, and Tailwind CSS. Focused on improving load times, UI responsiveness, and real-time communication features for a seamless user experience.",
                        },
                        {
                            role: "Associate L1 Intern",
                            company: "INFOTECT SOLUTIONS",
                            location: "Bengaluru, Karnataka",
                            period: "Feb 2025 – May 2025",
                            desc: "Assisted in building full-stack applications using the MERN stack with AI-powered components. Implemented secure RESTful APIs, optimized backend workflows, and enhanced front-end usability through responsive design practices.",
                        },
                    ].map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition transform hover:-translate-y-2"
                            custom={i}
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                                {exp.role}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                                {exp.company}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                {exp.location}
                            </p>
                            <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Animated Stats */}
            <div className="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center cursor-pointer">
                {[
                    { num: "7+", label: "Projects Completed" },
                    { num: "0-1", label: "Years of Experience" },
                    { num: "8+", label: "Technologies Mastered" },
                    { num: "5000+", label: "Hours of Coding Practice" },
                    { num: "10+", label: "Certifications Earned" },
                    { num: "100+", label: "DSA Problems Solved" },
                    { num: "10+", label: "Open Source Contributions" },
                    { num: "4+", label: "Internships & Trainings" },
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
                            className="text-3xl sm:text-4xl font-extrabold"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            {stat.num}
                        </motion.h3>
                        <p className="mt-2 text-sm sm:text-lg">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Call-to-action */}
            <motion.div
                className="mt-16 text-center"
                initial="hidden"
                animate="show"
                variants={fadeUp}
            >
                <a
                    href="/contact"
                    className="inline-block px-8 py-3 text-base sm:text-lg bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-xl transition transform hover:scale-110"
                >
                    Let’s Connect
                </a>
            </motion.div>
        </section>
    );
}
