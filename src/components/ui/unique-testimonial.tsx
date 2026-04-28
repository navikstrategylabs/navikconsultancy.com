"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "NaviK gave us the clarity we were missing. Within weeks, we had a structured go-to-market plan and finally felt confident about our direction.",
    author: "Arjun Mehta",
    role: "Founder, D2C Wellness Brand",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    quote: "The repositioning work NaviK did transformed how we talk about our product. Our pipeline doubled within a quarter.",
    author: "Priya Nair",
    role: "CEO, B2B SaaS Startup",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote: "For the first time, I could step back from execution and actually think like a founder again. That shift was priceless.",
    author: "Rohit Shenoy",
    role: "Founder, Edtech Platform",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
  },
]

export function UniqueTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedAuthor, setDisplayedAuthor] = useState(testimonials[0].author)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const isPaused = useRef(false)

  // Auto-cycle every 3 seconds, pauses on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused.current) return
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % testimonials.length
          setDisplayedQuote(testimonials[next].quote)
          setDisplayedAuthor(testimonials[next].author)
          setDisplayedRole(testimonials[next].role)
          return next
        })
        setTimeout(() => setIsAnimating(false), 400)
      }, 220)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedAuthor(testimonials[index].author)
      setDisplayedRole(testimonials[index].role)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 220)
  }

  return (
    <div
      className="w-full flex flex-col items-center py-8 md:py-10 px-6"
      onMouseEnter={() => { isPaused.current = true }}
      onMouseLeave={() => { isPaused.current = false }}
    >

      <div className="w-full max-w-3xl relative">
        {/* Quote text — large, open, no box */}
        <p
          className={cn(
            "text-2xl md:text-3xl lg:text-4xl font-light text-foreground text-center leading-relaxed tracking-tight transition-all duration-300 ease-out px-8",
            isAnimating
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0",
          )}
        >
          {displayedQuote}
        </p>
      </div>

      {/* Divider */}
      <div className={cn(
        "mt-10 w-12 h-px bg-border transition-all duration-300",
        isAnimating ? "opacity-0" : "opacity-100"
      )} />

      {/* Author info */}
      <div className={cn(
        "mt-6 flex flex-col items-center gap-1 transition-all duration-300 delay-75",
        isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      )}>
        <p className="text-sm font-semibold text-foreground">{displayedAuthor}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{displayedRole}</p>
      </div>

      {/* Avatar selector */}
      <div className="mt-10 flex items-center justify-center gap-3">
        {testimonials.map((t, index) => {
          const isActive = activeIndex === index
          const isHovered = hoveredIndex === index && !isActive

          return (
            <button
              key={t.id}
              onClick={() => handleSelect(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={`View testimonial from ${t.author}`}
              className={cn(
                "relative flex items-center gap-0 rounded-full cursor-pointer",
                "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isActive
                  ? "bg-foreground shadow-md pl-2 pr-4 py-1.5"
                  : isHovered
                    ? "bg-muted pl-2 pr-4 py-1.5"
                    : "p-0.5",
              )}
            >
              <img
                src={t.avatar}
                alt={t.author}
                className={cn(
                  "w-8 h-8 rounded-full object-cover shrink-0",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive ? "ring-2 ring-white/30" : "",
                )}
              />
              {/* Expanding name */}
              <div
                className={cn(
                  "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden",
                  isActive || isHovered
                    ? "grid-cols-[1fr] opacity-100 ml-2"
                    : "grid-cols-[0fr] opacity-0 ml-0",
                )}
              >
                <div className="overflow-hidden">
                  <span
                    className={cn(
                      "text-sm font-medium whitespace-nowrap block transition-colors duration-300",
                      isActive ? "text-background" : "text-foreground",
                    )}
                  >
                    {t.author}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
