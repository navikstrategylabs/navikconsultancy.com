import React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

export interface BentoCardItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

// NaviK brand blue pixel colors — light variants for a subtle shimmer
const PIXEL_COLORS = ["#c7d2fe", "#a5b4fc", "#818cf8"];

const PixelCard: React.FC<BentoCardItem> = ({
  className = "",
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "bg-white border border-border/60",
        "shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]",
        "transition-all duration-300 ease-out hover:-translate-y-1.5",
        "p-7 min-h-[200px] flex flex-col justify-between",
        className,
      )}
    >
      {/* Pixel canvas animation — fires on hover of the card */}
      <PixelCanvas
        gap={8}
        speed={30}
        colors={PIXEL_COLORS}
        variant="default"
        noFocus
      />

      {/* Subtle gradient overlay that brightens slightly on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full">
        {Icon && (
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-5 shadow-sm group-hover:shadow-md group-hover:scale-105">
            <Icon className="size-6" />
          </div>
        )}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

interface RuixenBentoCardsProps {
  items: BentoCardItem[];
  heading?: string;
  subheading?: string;
}

export default function RuixenBentoCards({ items, heading, subheading }: RuixenBentoCardsProps) {
  // Bento layout spans for 5 items: 2 wide on top, 3 equal below
  const spans = [
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
      {items.map((item, i) => (
        <PixelCard key={item.title} {...item} className={spans[i] ?? ""} />
      ))}
      {(heading || subheading) && (
        <div className="sm:col-span-2 lg:col-span-6 max-w-2xl ml-auto text-right mt-2">
          {heading && (
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{heading}</h3>
          )}
          {subheading && <p className="text-muted-foreground text-lg">{subheading}</p>}
        </div>
      )}
    </div>
  );
}
