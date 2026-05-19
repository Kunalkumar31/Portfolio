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
  title: "Kunal Kumar – Full Stack Developer Portfolio",
  description:
    "Official portfolio of Kunal Kumar, Full Stack MERN & Next.js Developer from India. View projects, skills and contact details.",

  keywords: [
    "Kunal Kumar",
    "Kunal Kumar Developer",
    "Kunal Kumar Portfolio",
    "Full Stack Developer India",
    "MERN Developer",
    "Next.js Developer",
  ],

  authors: [{ name: "Kunal Kumar" }],

  metadataBase: new URL("https://kunalportfolio31.vercel.app/"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kunal Kumar – Full Stack Developer",
    description:
      "Portfolio of Kunal Kumar — Projects, Skills & Contact.",
    url: "https://kunalportfolio31.vercel.app/",
    siteName: "Kunal Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kunal Kumar – Developer Portfolio",
    description: "Projects, skills and contact of Kunal Kumar",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
  google: "W4q13Q-gQvl17lzzTd49c7-5soIu1n_h7KEzwYdzl5Q",
},
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
