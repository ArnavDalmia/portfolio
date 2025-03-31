"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 4 // Increment by 4% each time to reach 100% in ~2 seconds
      })
    }, 80)

    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearInterval(timer)
      clearTimeout(loadingTimer)
    }
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white font-mono">
        <div className="mb-4 text-2xl text-blue-400">
          <span className="mr-2 inline-block h-5 w-5 bg-blue-400"></span>
          {progress}%
        </div>
        <div className="mb-2 w-80 border border-blue-400 p-1">
          <div
            className="h-5 bg-blue-400 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-2xl text-blue-400">Loading...</div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-900 p-6 text-white">
      <div className="flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        {/* Profile Image */}
        <div className="shrink-0">
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/me.jpg`}            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-md border-4 border-zinc-700 object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Arnav Dalmia</h1>
            <p className="text-xl text-zinc-400">Software Developer</p>
          </div>

          <p className="text-lg text-zinc-300 max-w-xl">
                     Hi, I’m Arnav. I’m currently a second-year student at the University of Waterloo, studying Systems Design Engineering. I’m passionate about AI, robotics, and fintech, always eager to learn and tackle new challenges. Excited to shape the future through innovative collaborations.
          </p>

          <div className="flex gap-6 mt-2 justify-center md:justify-start">
            <a
              href="https://github.com/ArnavDalmia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/arnav-dalmia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:a4dalmia@uwaterloo.ca"
              className="text-zinc-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

