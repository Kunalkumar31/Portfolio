import '../styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata = {
title: 'Kunal Kumar — Full Stack Developer',
description: 'Portfolio of Kunal Kumar — MERN/Next.js developer',
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en" className="dark">
<body>
<div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
<Navbar />
<main className="flex-grow container mx-auto px-4 py-8">{children}</main>
<Footer />
</div>
</body>
</html>
)
}
