"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Discovery & Clarity",
    desc: "We dive deep into your vision, market, and operations to identify the bottlenecks holding you back.",
    label: "Step 01",
    tag: "Analysis"
  },
  {
    title: "Strategic Roadmap",
    desc: "A precise, actionable plan that bridges the gap between where you are and where you want to be.",
    label: "Step 02",
    tag: "Planning"
  },
  {
    title: "Hands-on Execution",
    desc: "We don't just hand over a deck. We work alongside your team to implement systems and SOPs that work.",
    label: "Step 03",
    tag: "Implementation"
  },
  {
    title: "Measured Growth",
    desc: "Continuous optimization and scaling based on real-world data and operational feedback.",
    label: "Step 04",
    tag: "Scaling"
  }
];

export function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate active index based on scroll progress
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * steps.length);
      if (index >= 0 && index < steps.length && index !== activeIndex) {
        setActiveIndex(index);
      }
    });
  }, [scrollYProgress, activeIndex]);

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const current = steps[activeIndex];

  return (
    <div 
      ref={containerRef} 
      className="relative h-[400vh]" // 4 steps, each getting some scroll distance
      onMouseMove={handleMouseMove}
    >
      <div className="sticky top-0 flex items-center justify-center min-h-screen overflow-hidden px-6">
        <div className="relative w-full max-w-6xl">
          {/* Oversized index number - positioned behind everything */}
          <motion.div
            className="absolute -left-16 md:-left-24 top-1/2 -translate-y-1/2 text-[20rem] md:text-[32rem] font-bold text-primary/[0.04] select-none pointer-events-none leading-none tracking-tighter"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content - asymmetric layout */}
          <div className="relative flex flex-col md:flex-row gap-12 md:gap-0">
            {/* Left column - vertical text & progress */}
            <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-border/50">
              <motion.span
                className="text-xs font-mono text-primary/50 tracking-[0.3em] uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Our Process
              </motion.span>

              {/* Vertical progress line */}
              <div className="relative h-48 w-px bg-border mt-12 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-primary origin-top"
                  animate={{
                    height: `${((activeIndex + 1) / steps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 md:pl-20 py-8">
              {/* Step tag */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 md:mb-10"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-primary border border-primary/20 rounded-full px-4 py-1.5 bg-primary/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {current.tag}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Title with word reveal */}
              <div className="mb-6 md:mb-8 min-h-[80px]">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={activeIndex}
                    className="text-4xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {current.title}
                  </motion.h3>
                </AnimatePresence>
              </div>

              {/* Description with character reveal effect */}
              <div className="relative mb-12 min-h-[140px] md:min-h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIndex}
                    className="text-lg md:text-2xl font-light text-muted-foreground leading-relaxed max-w-2xl"
                  >
                    {current.desc.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.3em]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.03 + 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Navigation Indicators (Mobile/Visual) */}
              <div className="flex items-center gap-2">
                {steps.map((_, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "h-1 transition-all duration-500 rounded-full",
                      i === activeIndex ? "w-12 bg-primary" : "w-4 bg-border"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom ticker - subtle repeating labels */}
          <div className="absolute -bottom-24 left-0 right-0 overflow-hidden opacity-[0.03] pointer-events-none">
            <motion.div
              className="flex whitespace-nowrap text-7xl md:text-9xl font-bold tracking-tighter uppercase"
              animate={{ x: [0, -2000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-12">
                  {steps.map((s) => s.title).join(" • ")} •
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
