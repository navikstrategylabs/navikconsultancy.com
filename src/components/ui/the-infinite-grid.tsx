import React from "react";
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
interface InfiniteGridProps {
  className?: string;
  /** Color of the static (background) grid lines */
  baseColor?: string;
  /** Color of the active (revealed on hover) grid lines */
  activeColor?: string;
  /** Radius (px) of the spotlight reveal */
  revealRadius?: number;
  /** Grid cell size in px */
  cellSize?: number;
}

/**
 * Animated infinite scrolling grid background with a cursor-reactive
 * spotlight that reveals an "active" grid layer on top of the base layer.
 */
export function InfiniteGrid({
  className,
  baseColor = "color-mix(in oklab, var(--foreground) 10%, transparent)",
  activeColor = "color-mix(in oklab, var(--primary-foreground) 70%, transparent)",
  revealRadius = 280,
  cellSize = 40,
}: InfiniteGridProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.35;
  const speedY = 0.35;

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + speedX) % cellSize);
    gridOffsetY.set((gridOffsetY.get() + speedY) % cellSize);
  });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { left, top } = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    const handleMouseLeave = () => {
      mouseX.set(-9999);
      mouseY.set(-9999);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const maskImage = useMotionTemplate`radial-gradient(${revealRadius}px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden="true"
    >
      {/* Base grid layer */}
      <GridLayer offsetX={gridOffsetX} offsetY={gridOffsetY} color={baseColor} cellSize={cellSize} />

      {/* Active grid layer revealed by cursor */}
      <motion.div
        className="absolute inset-0"
        style={{ WebkitMaskImage: maskImage, maskImage }}
      >
        <GridLayer offsetX={gridOffsetX} offsetY={gridOffsetY} color={activeColor} cellSize={cellSize} />
      </motion.div>
    </div>
  );
}

interface GridLayerProps {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
  color: string;
  cellSize: number;
}

function GridLayer({ offsetX, offsetY, color, cellSize }: GridLayerProps) {
  const backgroundPosition = useMotionTemplate`${offsetX}px ${offsetY}px`;

  return (
    <motion.div
      className="absolute -inset-px"
      style={{
        backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        backgroundPosition,
      }}
    />
  );
}
