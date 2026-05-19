"use client"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import Hero from "../components/Hero"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}
      {!loading && <Hero />}
    </>
  )
}