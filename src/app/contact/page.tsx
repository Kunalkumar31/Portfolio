"use client"; // ← Must be the first line

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"; // for redirect

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");

        // Redirect to home page after 2 seconds
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="max-w-2xl mx-auto py-16 px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="mt-2 text-center text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’d love to hear from you! Fill out the form below and I’ll get back to you as soon as possible.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-4 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="Message"
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition"
        />

        <button
          type="submit"
          className="cursor-pointer px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Animated Status Messages */}
        <AnimatePresence>
          {status === "sent" && (
            <motion.div
              className="mt-4 p-4 bg-green-50 dark:bg-green-900 rounded-md border border-green-200 dark:border-green-700 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span className="text-3xl mb-2 animate-bounce">🎉</motion.span>
              <motion.p className="text-green-700 dark:text-green-300 font-semibold">
                Your message has been sent successfully!
              </motion.p>
              <motion.p className="text-green-600 dark:text-green-200 text-sm mt-1">
                Thank you, {name || "friend"}, for reaching out. Redirecting to home page… ✨
              </motion.p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              className="mt-4 p-4 bg-red-50 dark:bg-red-900 rounded-md border border-red-200 dark:border-red-700 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span className="text-3xl mb-2 animate-shake">❌</motion.span>
              <motion.p className="text-red-700 dark:text-red-300 font-semibold">
                Oops! Something went wrong.
              </motion.p>
              <motion.p className="text-red-600 dark:text-red-200 text-sm mt-1">
                Please try again in a few moments.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
}
