"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Send, Loader2, PartyPopper, CircleX } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const router = useRouter();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!subject.trim()) newErrors.subject = "Subject is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    else if (message.trim().length < 10) newErrors.message = "Message should be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSubmittedName(name);
        setStatus("sent");

        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => router.push("/"), 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20 w-full">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-pink-100/40 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-pink-900/10 blur-3xl"></div>

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Get in Touch
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-3 text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        I’d love to hear from you! Fill out the form below and I’ll get back to you as soon as possible.
      </motion.p>

      {/* Form */}
      <motion.form
        method="POST"
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-6 backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 p-5 sm:p-10 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-indigo-500/10 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        {/* Name */}
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={`w-full p-3.5 sm:p-4 text-sm sm:text-base rounded-xl border bg-white/80 dark:bg-gray-700/80 backdrop-blur-md focus:outline-none focus:ring-2 transition-all duration-200 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={`w-full p-3.5 sm:p-4 text-sm sm:text-base rounded-xl border bg-white/80 dark:bg-gray-700/80 backdrop-blur-md focus:outline-none focus:ring-2 transition-all duration-200 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject (project inquiry, freelance work, collaboration)"
            className={`w-full p-3.5 sm:p-4 text-sm sm:text-base rounded-xl border bg-white/80 dark:bg-gray-700/80 backdrop-blur-md focus:outline-none focus:ring-2 transition-all duration-200 ${
              errors.subject
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
            }`}
          />
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Tell me about your project, idea, or how I can help..."
            className={`w-full p-3.5 sm:p-4 text-sm sm:text-base rounded-xl border bg-white/80 dark:bg-gray-700/80 backdrop-blur-md focus:outline-none focus:ring-2 resize-none transition-all duration-200 ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
            }`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>

        {/* Status */}
        <AnimatePresence>
          {status === "sent" && (
            <motion.div className="mt-4 p-5 bg-green-50/80 dark:bg-green-900/40 backdrop-blur-md rounded-xl border border-green-200 dark:border-green-700 text-center">
              <PartyPopper size={28} className="mx-auto mb-2" />
              <p className="text-green-700 dark:text-green-300 font-semibold">
                Message sent successfully!
              </p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div className="mt-4 p-5 bg-red-50/80 dark:bg-red-900/40 backdrop-blur-md rounded-xl border border-red-200 dark:border-red-700 text-center">
              <CircleX size={28} className="mx-auto mb-2 text-red-500" />
              <p className="text-red-700 dark:text-red-300 font-semibold">
                Something went wrong!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.form>
    </section>
  );
}