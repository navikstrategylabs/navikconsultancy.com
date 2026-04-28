import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, LayoutGrid, GraduationCap, UtensilsCrossed } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { GetStartedInner, getStartedClasses } from "@/components/ui/get-started-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HoverGlow } from "@/components/ui/hover-glow";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work & Case Studies — NaviK Strategy Labs" },
      { name: "description", content: "Real Impact. Real Growth. Selected case studies showing how NaviK helps founders build clarity, structure, and scale." },
      { property: "og:title", content: "Work & Case Studies — NaviK Strategy Labs" },
      { property: "og:description", content: "How structured strategy + execution drives measurable outcomes for founders." },
    ],
  }),
  component: WorkPage,
});

// Single brand-blue accent applied consistently across all cards
const BRAND = {
  accentClass: "from-indigo-500/8 to-indigo-500/4 border-indigo-100",
  iconClass: "bg-indigo-50 text-indigo-600",
  pillClass: "bg-indigo-100 text-indigo-700",
};

const cases = [
  {
    icon: LayoutGrid,
    client: "D2C Wellness Brand",
    sector: "Direct-to-Consumer",
    ...BRAND,
    problem: "Strong product traction but no operational structure to support growth across regions.",
    approach: "Built core SOPs, redesigned fulfillment workflows, and introduced weekly operating rhythms.",
    outcome: "3.2× order capacity within 6 months with 40% lower operational defects.",
  },
  {
    icon: TrendingUp,
    client: "B2B SaaS Startup",
    sector: "Enterprise SaaS",
    ...BRAND,
    problem: "Unclear positioning was stalling pipeline despite a strong product.",
    approach: "Repositioned around a high-intent ICP, rebuilt messaging, and aligned sales motion to the new narrative.",
    outcome: "2.5× qualified pipeline and a shorter sales cycle within one quarter.",
  },
  {
    icon: GraduationCap,
    client: "Edtech Platform",
    sector: "Education",
    ...BRAND,
    problem: "Founder bandwidth consumed by execution chaos; no clear growth model.",
    approach: "Founder advisory + structured growth model with weekly priorities and accountable owners.",
    outcome: "Founder reclaimed strategic capacity; revenue compounded 4× year-over-year.",
  },
  {
    icon: UtensilsCrossed,
    client: "Hospitality Group",
    sector: "Hospitality",
    ...BRAND,
    problem: "Multi-location expansion was inconsistent in service quality and unit economics.",
    approach: "Designed unit-level SOPs, KPI dashboards, and a replicable launch playbook.",
    outcome: "New locations launched 2× faster with consistent margins from month one.",
  },
];


function WorkPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="container-tight relative">
          <Reveal className="max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Work / Case Studies</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1.05]">
              Real Impact. <span className="text-gradient">Real Growth.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A snapshot of how structured strategy and disciplined execution have moved
              founder-led businesses forward.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="pb-24 md:pb-32">
        <div className="container-tight grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.06}>
              <article className={`group h-full rounded-3xl bg-gradient-to-br ${c.accentClass} border p-8 md:p-10 hover-lift relative overflow-hidden flex flex-col transition-shadow duration-300`}>
                <div className="relative flex-1 flex flex-col">
                  {/* Header row — icon + sector pill + client name */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`size-12 rounded-xl ${c.iconClass} flex items-center justify-center shrink-0 shadow-sm`}>
                      <c.icon className="size-6" />
                    </div>
                    <div className="flex-1">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${c.pillClass} uppercase tracking-wider`}>
                        {c.sector}
                      </span>
                      <h3 className="mt-1.5 text-2xl md:text-3xl font-bold text-foreground">{c.client}</h3>
                    </div>
                  </div>

                  {/* Outcome metric — highlighted prominently above the accordion */}
                  <div className="mb-5 rounded-2xl bg-white/70 border border-border/60 backdrop-blur-sm px-5 py-4 shadow-sm">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Outcome</p>
                    <p className="text-base font-semibold text-foreground leading-snug">{c.outcome}</p>
                  </div>

                  {/* Accordion for problem + approach */}
                  <div className="flex-1">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="problem" className="border-border/40">
                        <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:no-underline py-3">
                          The Challenge
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/90 leading-relaxed text-base">
                          {c.problem}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="approach" className="border-b-0">
                        <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:no-underline py-3">
                          Our Approach
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/90 leading-relaxed text-base">
                          {c.approach}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA — proper full-width gradient treatment */}
      <section className="pb-24 md:pb-32">
        <div className="container-tight">
          <Reveal>
            <HoverGlow
              className="rounded-[2.5rem] border border-white/10 shadow-2xl bg-hero-gradient"
              glowColor="rgba(255,255,255,0.4)"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-glow/40 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

              <div className="relative px-8 py-12 md:py-16 lg:py-20 md:px-20 flex flex-col items-center text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-md">
                  <Sparkles className="size-4 text-primary-foreground" />
                  <span>Your story could be the next one.</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                  Let's build something <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 italic font-light">that scales.</span>
                </h2>
                <p className="mt-5 md:mt-6 text-lg text-white/70 leading-relaxed max-w-xl font-light">
                  Partner with us to bring clarity to your vision and momentum to your growth.
                </p>
                <div className="mt-10">
                  <Link
                    to="/contact"
                    className={getStartedClasses("onDark", "shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]")}
                  >
                    <GetStartedInner label="Start the Conversation" variant="onDark" />
                  </Link>
                </div>
              </div>
            </HoverGlow>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
