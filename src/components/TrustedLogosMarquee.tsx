import { motion } from "framer-motion";

// Import all logos from the assets folder dynamically
const logoFiles = import.meta.glob("../assets/trusted_company_logos/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const logos = Object.entries(logoFiles).map(([path, url]) => ({
  path,
  url,
  name: path.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Logo",
}));

// Split logos into two sets for dual-directional scrolling
const firstHalf = logos.slice(0, Math.ceil(logos.length / 2));
const secondHalf = logos.slice(Math.ceil(logos.length / 2));

interface MarqueeRowProps {
  items: typeof logos;
  reverse?: boolean;
  speed?: string;
}

function MarqueeRow({ items, reverse, speed = "60" }: MarqueeRowProps) {
  // Triple the items to ensure seamless loop even on very wide screens
  const doubled = [...items, ...items, ...items];
  const duration = parseInt(speed);

  return (
    <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        animate={{
          x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-16 md:gap-24 w-max items-center"
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer group"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="h-14 md:h-20 w-auto object-contain max-w-[180px] md:max-w-[220px] transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TrustedLogosMarquee() {
  return (
    <div className="space-y-6 md:space-y-12 py-10">
      <MarqueeRow items={firstHalf} speed="40" />
      <MarqueeRow items={secondHalf} reverse speed="45" />
    </div>
  );
}
