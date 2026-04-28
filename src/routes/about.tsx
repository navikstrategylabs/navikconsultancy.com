import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Target, Compass, Lightbulb } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { GetStartedInner, getStartedClasses } from "@/components/ui/get-started-button";

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
  { icon: Compass, text: "Strategy without execution has no value" },
  { icon: Target, text: "Clarity drives better decisions" },
  { icon: Lightbulb, text: "Structure enables scale" },
];

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
            <div className="rounded-3xl bg-surface border border-border p-10 md:p-12 h-full">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold">Mission</p>
              <p className="mt-5 text-2xl md:text-3xl font-display font-medium leading-snug">
                To bridge the gap between strategy and execution by delivering structured,
                result-oriented solutions that drive measurable and sustainable growth.
              </p>
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
          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((p, i) => (
              <Reveal key={p.text} delay={i * 0.08}>
                <div className="h-full rounded-[2rem] bg-surface-elevated border border-border/60 p-10 md:p-12 hover-lift text-center shadow-sm flex flex-col items-center justify-center">
                  <div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center ring-8 ring-primary/5">
                    <p.icon className="size-6" />
                  </div>
                  <p className="mt-8 text-[1.1rem] font-medium text-foreground leading-relaxed max-w-[250px]">{p.text}</p>
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
            <div className="relative max-w-4xl mx-auto rounded-3xl bg-surface-elevated border border-border p-10 md:p-16 shadow-elegant">
              <Quote className="absolute -top-6 left-10 size-14 text-primary bg-background rounded-full p-3 shadow-elegant" />
              <p className="text-2xl md:text-3xl font-display leading-snug text-foreground">
                "Navik is built to solve one of the biggest gaps in business - the disconnect
                between planning and doing. We partner with founders to ensure ideas are
                executed and scaled effectively."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="size-12 rounded-full bg-hero-gradient" />
                <div>
                  <div className="font-semibold">VIPIN VK</div>
                  <div className="text-sm text-muted-foreground">FOUNDER & CEO</div>
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
