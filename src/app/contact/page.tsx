"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const router = useRouter();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
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
      }
      else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 w-full">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-3 text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’d love to hear from you! Fill out the form below and I’ll get back to you as soon as possible.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-5 bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {/* Name */}
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className={`w-full p-3 sm:p-4 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
              } dark:bg-gray-700 dark:text-white transition`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`w-full p-3 sm:p-4 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
              } dark:bg-gray-700 dark:text-white transition`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Message"
            className={`w-full p-3 sm:p-4 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
              } dark:bg-gray-700 dark:text-white transition`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition disabled:opacity-50"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        <AnimatePresence>
          {status === "sent" && (
            <motion.div
              className="mt-4 p-4 bg-green-50 dark:bg-green-900 rounded-md border border-green-200 dark:border-green-700 flex flex-col items-center text-center w-full"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span className="text-3xl mb-2 animate-bounce">🎉</motion.span>
              <motion.p className="text-green-700 dark:text-green-300 font-semibold text-sm sm:text-base">
                Your message has been sent successfully!
              </motion.p>
              <motion.p className="text-green-600 dark:text-green-200 text-xs sm:text-sm mt-1">
                Thank you, {submittedName || "friend"}, for reaching out.
              </motion.p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              className="mt-4 p-4 bg-red-50 dark:bg-red-900 rounded-md border border-red-200 dark:border-red-700 flex flex-col items-center text-center w-full"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span className="text-3xl mb-2">❌</motion.span>
              <motion.p className="text-red-700 dark:text-red-300 font-semibold text-sm sm:text-base">
                Oops! Something went wrong.
              </motion.p>
              <motion.p className="text-red-600 dark:text-red-200 text-xs sm:text-sm mt-1">
                Please try again in a few moments.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
}
