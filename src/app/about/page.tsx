"use client";

import { motion, Variants } from "framer-motion";
import {
    Zap,
    Lightbulb,
    Rocket,
    Bot,
    Shield,
    Smartphone,
    CheckCircle,
    Puzzle,
    Hand, Briefcase, MapPin, Calendar, Sparkles
} from "lucide-react";

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
        <section className="max-w-7xl mx-auto py-16 px-5 md:px-8 lg:px-10 font-mono">
            {/* Heading */}
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100"
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
                <span className="inline-flex items-center gap-2">
                    Hi <Hand size={22} className="text-yellow-500" /> I’m{" "}
                </span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">Kunal Kumar</span>,
                a{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Full Stack Developer</span>{" "}
                skilled in{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">MERN & Next.js</span>.
                I specialize in <span className="font-bold">robust, scalable, and high-performance applications</span>
                with a focus on <span className="font-semibold text-indigo-400">AI integrations</span> and real-time systems.
                I enjoy solving complex problems and delivering solutions that create measurable impact for businesses and users.
            </motion.p>

            {/* Goal Line */}
            <motion.p
                className="mt-6 text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-400 text-center italic"
                initial="hidden"
                animate="show"
                variants={fadeUp}
            >
                My mission: Develop applications that combine{" "}
                <span className="font-semibold">performance</span>,{" "}
                <span className="font-semibold">innovation</span>, and{" "}
                <span className="font-semibold">AI-driven intelligence</span>, while ensuring clean, maintainable, and scalable code.
            </motion.p>

            {/* ================= HIGHLIGHT CARDS ================= */}

            <motion.div className="mt-28 relative" initial="hidden" animate="show" variants={fadeUp}>

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Why Hire Me
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        I build modern, scalable and high-performance web applications with
                        strong focus on user experience and business impact.
                    </p>
                </div>

                {/* Glow background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-100/40 via-purple-100/30 to-pink-100/40 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-pink-900/10 blur-3xl"></div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                    {[
                        { icon: Zap, title: "Blazing Fast", desc: "Optimized apps with exceptional speed, SEO and performance." },
                        { icon: Lightbulb, title: "Creative Thinking", desc: "Designing intuitive and delightful user experiences." },
                        { icon: Rocket, title: "Scalable Systems", desc: "Apps ready for growth and high traffic." },
                        { icon: Bot, title: "AI Integrations", desc: "Automation and AI powered workflows." },
                        { icon: Shield, title: "Secure by Design", desc: "Strong authentication and secure APIs." },
                        { icon: Smartphone, title: "Fully Responsive", desc: "Flawless experience across all devices." },
                        { icon: CheckCircle, title: "Production Ready", desc: "Tested, optimized and deployment ready." },
                        { icon: Puzzle, title: "Clean Code", desc: "Maintainable architecture for long-term growth." },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            className="group relative p-8 rounded-2xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-indigo-500/20 hover:shadow-2xl hover:-translate-y-3 transition duration-300"
                            custom={i + 3}
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                        >
                            {/* Icon badge */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-5 shadow-lg group-hover:scale-110 transition">
                                <item.icon size={26} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 transition"></div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/*  Work Experience Section */}
            <motion.div className="mt-32" initial="hidden" animate="show" variants={fadeUp}>

                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        My Professional Journey
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        A timeline of my growth building scalable, high-performance web applications and real-world products.
                    </p>
                </div>

                {/* Timeline wrapper */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Glowing vertical timeline */}
                    <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full hidden md:block blur-[1px]" />

                    <div className="space-y-14">
                        {[
                            {
                                role: "Software Engineer",
                                company: "AlphaZero Software Solutions",
                                location: "Bengaluru, India",
                                period: "Mar 2026 – Present",
                                current: true,
                                points: [
                                    "Architecting high-performance Next.js applications and reusable component systems",
                                    "Improving SEO & Core Web Vitals for production apps",
                                    "Collaborating with Agile teams to ship scalable features faster"
                                ]
                            },
                            {
                                role: "Programmer Analyst",
                                company: "CepiaLabs Pvt. Ltd.",
                                location: "Noida, India",
                                period: "Aug 2025 – Mar 2026",
                                points: [
                                    "Developed scalable MERN applications for production environments",
                                    "Optimized APIs → reduced response time by 30%",
                                    "Improved system reliability and performance"
                                ]
                            },
                            {
                                role: "Full Stack Developer Intern",
                                company: "Code Core Global",
                                location: "Jaipur, India",
                                period: "May 2025 – Aug 2025",
                                points: [
                                    "Built real-time apps using MERN + Socket.io",
                                    "Improved load speed and UI responsiveness",
                                    "Enhanced engagement and UX across platforms"
                                ]
                            },
                            {
                                role: "Associate L1 Intern",
                                company: "INFOTECT SOLUTIONS",
                                location: "Bengaluru, India",
                                period: "Feb 2025 – May 2025",
                                points: [
                                    "Worked on secure REST APIs and AI integrations",
                                    "Streamlined backend workflows",
                                    "Improved responsive frontend usability"
                                ]
                            },
                        ].map((exp, i) => (
                            <motion.div
                                key={i}
                                className="relative md:pl-16"
                                custom={i}
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                            >
                                {/* Timeline Icon */}
                                <div className="hidden md:flex absolute left-0 top-3 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white items-center justify-center shadow-lg shadow-indigo-500/30">
                                    <Briefcase size={18} />
                                </div>

                                {/* Card */}
                                <div className="group backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-indigo-500/20 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                                    {/* Role + Current badge */}
                                    <div className="flex flex-wrap items-center gap-3">
                                        <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                            {exp.role}
                                        </h3>

                                        {exp.current && (
                                            <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                                                <Sparkles size={12} /> Current
                                            </span>
                                        )}
                                    </div>

                                    {/* Company */}
                                    <p className="mt-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        {exp.company}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={15} /> {exp.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={15} /> {exp.period}
                                        </span>
                                    </div>

                                    {/* Achievements */}
                                    <ul className="mt-5 space-y-3 text-gray-600 dark:text-gray-300">
                                        {exp.points.map((point, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-indigo-500 mt-1">✦</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ================= STATS ================= */}
            <div className="mt-24 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center cursor-pointer">
                {[
                    { num: "10+", label: "Production Projects" },
                    { num: "1+", label: "Years Experience" },
                    { num: "15+", label: "Technologies" },
                    { num: "5,000+", label: "Coding Hours" },
                    { num: "150+", label: "DSA Problems" },
                    { num: "10+", label: "Certifications" },
                    { num: "10+", label: "Open Source PRs" },
                    { num: "4+", label: "Internships" },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-indigo-900 text-white shadow-xl hover:scale-105 transition"
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
                        <p className="mt-2 text-sm sm:text-lg">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div className="mt-20 text-center" initial="hidden" animate="show" variants={fadeUp}>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-4 text-lg bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-500/40 transition transform hover:scale-110"
                >
                    <Rocket size={20} />
                    Hire Me — Let’s Build Something Amazing
                </a>
            </motion.div>
        </section>
    );
}
