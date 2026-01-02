import "../styles/globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kunal Kumar — Full Stack Developer",
  description: "Portfolio of Kunal Kumar — MERN/Next.js developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
