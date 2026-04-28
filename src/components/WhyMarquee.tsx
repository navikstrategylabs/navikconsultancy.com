import { CheckCircle2 } from "lucide-react";

type Props = { items: string[]; reverse?: boolean };

export function WhyMarquee({ items, reverse }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden group/marquee [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex gap-5 w-max group-hover/marquee:[animation-play-state:paused]"
        style={{
          animation: `marquee 30s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-2xl glass-dark px-6 py-5 shrink-0
                       transition-all duration-300 ease-out
                       group-hover/marquee:opacity-40
                       hover:!opacity-100 hover:bg-white/20 hover:-translate-y-0.5
                       hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            <CheckCircle2 className="size-6 text-white shrink-0 transition-transform duration-300 group-hover/marquee:[div:hover_&]:scale-110" />
            <p className="text-lg font-medium text-primary-foreground whitespace-nowrap">
              {w}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
