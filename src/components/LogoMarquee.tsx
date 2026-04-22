type Props = { items: string[]; reverse?: boolean };

export function LogoMarquee({ items, reverse }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex gap-14 w-max"
        style={{
          animation: `marquee ${reverse ? "55s" : "45s"} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((label, i) => (
          <div
            key={i}
            className="font-display text-2xl md:text-3xl font-semibold text-foreground/40 hover:text-primary transition-colors whitespace-nowrap tracking-tight"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
