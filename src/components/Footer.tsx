"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left">
        
        {/* Copyright */}
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-indigo-600">
            <a href="mailto:kunalkumarofficial31@gmail.com">Kunal Kumar</a>
          </span>
          . All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
          <a
            href="https://github.com/Kunalkumar31"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 px-2 py-1 hover:text-indigo-600 transition-transform hover:scale-105"
          >
            <Github size={20} /> <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/kunalkumar31"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 px-2 py-1 hover:text-indigo-600 transition-transform hover:scale-105"
          >
            <Linkedin size={20} /> <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:kunalkumarofficial31@gmail.com"
            className="flex items-center gap-1 sm:gap-2 px-2 py-1 hover:text-indigo-600 transition-transform hover:scale-105"
          >
            <Mail size={20} /> <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
        Designed & Developed by{" "}
        <span className="font-semibold text-indigo-600">
          <a href="mailto:kunalkumarofficial31@gmail.com">Kunal Kumar</a>
        </span>
      </p>
    </footer>
  );
}
