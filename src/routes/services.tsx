import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Target, Cog, TrendingUp, Users, Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { GetStartedInner, getStartedClasses } from "@/components/ui/get-started-button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NaviK Strategy Labs" },
      { name: "description", content: "Startup Strategy & Launch, Brand Positioning, Operations & SOPs, Growth & Scaling, and Founder Advisory & Mentorship." },
      { property: "og:title", content: "Services — NaviK Strategy Labs" },
      { property: "og:description", content: "Strategic services that turn ideas into structured, scalable businesses." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Compass,
    title: "Startup Strategy & Launch",
    short: "Transform ideas into structured, market-ready businesses.",
    points: ["Idea validation & business model design", "Go-to-market roadmap", "MVP & launch planning", "Founding-team structure"],
  },
  {
    icon: Target,
    title: "Brand Positioning & Market Strategy",
    short: "Build a strong, differentiated presence in competitive markets.",
    points: ["Positioning & messaging frameworks", "Competitive landscape mapping", "ICP & segment strategy", "Brand narrative & voice"],
  },
  {
    icon: Cog,
    title: "Operations & Process Design (SOPs)",
    short: "Design systems that bring consistency, efficiency, and scalability.",
    points: ["Process mapping & SOP creation", "Workflow & tooling design", "Org structure & RACI", "Operational dashboards"],
  },
  {
    icon: TrendingUp,
    title: "Growth & Scaling Strategy",
    short: "Enable sustainable expansion through structured execution.",
    points: ["Growth model design", "Channel & funnel strategy", "Revenue & retention systems", "Scale-up playbooks"],
  },
  {
    icon: Users,
    title: "Founder Advisory & Mentorship",
    short: "Support founders in making confident, high-impact decisions.",
    points: ["1:1 advisory cadence", "Strategic decision frameworks", "Board & investor preparedness", "Leadership coaching"],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="container-tight relative">
          <Reveal className="max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Services</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1.05]">
              Strategic depth. <span className="text-gradient">Operational rigor.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Five focused practices designed to take your business from clarity to compounding growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-tight space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group rounded-3xl bg-surface-elevated border border-border p-8 md:p-12 hover-lift">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1">
                    <div className="size-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-elegant">
                      <s.icon className="size-7" />
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="text-xs font-mono uppercase tracking-widest text-primary/70">0{i + 1}</div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">{s.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{s.short}</p>
                  </div>
                  <div className="md:col-span-6">
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-foreground">
                          <Check className="size-5 text-primary shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-tight">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-radial-glow opacity-60" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
                  Looking to scale your business with clarity and structure?
                </h2>
                <div className="mt-10 flex justify-center">
                  <Link to="/contact" className={getStartedClasses("onDark")}>
                    <GetStartedInner label="Schedule a Call" variant="onDark" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
