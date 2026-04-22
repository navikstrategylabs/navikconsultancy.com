import { CheckCircle2 } from "lucide-react";

type Props = { items: string[]; reverse?: boolean };

export function WhyMarquee({ items, reverse }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marquee 30s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((w, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-2xl glass-dark px-6 py-5 shrink-0"
          >
            <CheckCircle2 className="size-6 text-white shrink-0" />
            <p className="text-lg font-medium text-primary-foreground whitespace-nowrap">
              {w}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
