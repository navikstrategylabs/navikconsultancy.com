import * as React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowSize?: number;
  glowColor?: string;
  blendMode?: string;
  className?: string;
}

export function HoverGlow({ 
  children, 
  className,
  glowSize = 400,
  glowColor = "rgba(255,255,255,0.25)",
  blendMode = "mix-blend-overlay",
  ...props
}: HoverGlowProps) {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-9999);
    mouseY.set(-9999);
  };

  const glowBackground = useMotionTemplate`radial-gradient(circle ${glowSize}px at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`;

  return (
    <div 
      className={cn("group relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div 
        className={cn("absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100", blendMode)}
        style={{ background: glowBackground }} 
      />
      {children}
    </div>
  );
}
