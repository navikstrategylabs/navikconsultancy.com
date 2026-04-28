import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Target, Compass, Lightbulb } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { GetStartedInner, getStartedClasses } from "@/components/ui/get-started-button";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NaviK Strategy Labs" },
      { name: "description", content: "NaviK Strategy Labs was founded with a simple belief — businesses don't fail due to lack of ideas, but due to lack of clarity and execution." },
      { property: "og:title", content: "About — NaviK Strategy Labs" },
      { property: "og:description", content: "Bringing structure, direction, and execution discipline to founders and organizations." },
    ],
  }),
  component: AboutPage,
});

const philosophy = [
  { icon: Compass, text: "Strategy without execution has no value", label: "Principle I" },
  { icon: Target, text: "Clarity drives better decisions", label: "Principle II" },
  { icon: Lightbulb, text: "Structure enables scale", label: "Principle III" },
];

// Pixel colors for philosophy cards — indigo shimmer on white
const PIXEL_COLORS = ["#c7d2fe", "#a5b4fc", "#818cf8"];

function AboutPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="container-tight relative">
          <Reveal className="max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">About NaviK</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1.05]">
              Built to bridge the gap between <span className="text-gradient">planning and doing.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 md:py-16">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal>
              <p className="text-xl text-foreground leading-relaxed">
                NaviK Strategy Labs was founded with a simple belief - businesses don't fail
                due to lack of ideas, but due to lack of clarity and execution.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work closely with founders and organizations to bring structure, direction,
                and execution discipline into their journey.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 md:py-24">
        <div className="container-tight grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-hero-gradient p-10 md:p-12 text-primary-foreground h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-glow opacity-50" />
              <div className="relative">
                <p className="text-sm uppercase tracking-widest text-primary-foreground/70 font-semibold">Vision</p>
                <p className="mt-5 text-2xl md:text-3xl font-display font-medium leading-snug">
                  To be a trusted partner in building future-ready businesses by enabling
                  founders to navigate complexity with clarity and confidence.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {/* Mission — primary-tinted surface, accent border */}
            <div className="rounded-3xl bg-primary/[0.04] border border-primary/20 p-10 md:p-12 h-full relative overflow-hidden">
              {/* Subtle top-right glow accent */}
              <div className="absolute -top-16 -right-16 size-48 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
              <div className="relative">
                <p className="text-sm uppercase tracking-widest text-primary font-semibold">Mission</p>
                <p className="mt-5 text-2xl md:text-3xl font-display font-medium leading-snug text-foreground">
                  To bridge the gap between strategy and execution by delivering structured,
                  result-oriented solutions that drive measurable and sustainable growth.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-tight">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Philosophy</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">What we believe.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {philosophy.map((p, i) => (
              <Reveal key={p.text} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl bg-white border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 p-10 flex flex-col items-center text-center">
                  {/* Pixel canvas animation */}
                  <PixelCanvas
                    gap={8}
                    speed={30}
                    colors={PIXEL_COLORS}
                    variant="icon"
                    noFocus
                  />
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Label */}
                    <p className="text-xs uppercase tracking-widest text-primary/60 font-semibold mb-5">{p.label}</p>
                    {/* Icon */}
                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
                      <p.icon className="size-6" />
                    </div>
                    {/* Text */}
                    <p className="mt-7 text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className="py-24 md:py-32">
        <div className="container-tight">
          <Reveal>
            <div className="relative max-w-4xl mx-auto rounded-3xl bg-surface-elevated border border-border p-10 md:p-16 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              <Quote className="absolute -top-6 left-10 size-14 text-primary bg-background rounded-full p-3 shadow-elegant" />
              <p className="text-2xl md:text-3xl font-display leading-snug text-foreground">
                "Navik is built to solve one of the biggest gaps in business - the disconnect
                between planning and doing. We partner with founders to ensure ideas are
                executed and scaled effectively."
              </p>
              <div className="mt-10 flex items-center gap-4">
                {/* Premium initials avatar */}
                <div className="size-12 rounded-full bg-hero-gradient flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-sm font-bold text-white tracking-wider select-none">VK</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground tracking-wide">Vipin VK</div>
                  <div className="text-xs text-primary font-semibold uppercase tracking-widest mt-0.5">Founder & CEO</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 flex justify-center">
            <Link to="/contact" className={getStartedClasses("primary")}>
              <GetStartedInner label="Start a Conversation" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
