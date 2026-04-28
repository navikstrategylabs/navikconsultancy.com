import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { GetStartedInner, getStartedClasses } from "@/components/ui/get-started-button";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const cases = [
  {
    client: "D2C Wellness Brand",
    sector: "Direct-to-Consumer",
    problem: "Strong product traction but no operational structure to support growth across regions.",
    approach: "Built core SOPs, redesigned fulfillment workflows, and introduced weekly operating rhythms.",
    outcome: "3.2x order capacity within 6 months with 40% lower operational defects.",
  },
  {
    client: "B2B SaaS Startup",
    sector: "Enterprise SaaS",
    problem: "Unclear positioning was stalling pipeline despite a strong product.",
    approach: "Repositioned around a high-intent ICP, rebuilt messaging, and aligned sales motion to the new narrative.",
    outcome: "2.5x qualified pipeline and a shorter sales cycle within one quarter.",
  },
  {
    client: "Edtech Platform",
    sector: "Education",
    problem: "Founder bandwidth consumed by execution chaos; no clear growth model.",
    approach: "Founder advisory + structured growth model with weekly priorities and accountable owners.",
    outcome: "Founder reclaimed strategic capacity; revenue compounded 4x year-over-year.",
  },
  {
    client: "Hospitality Group",
    sector: "Hospitality",
    problem: "Multi-location expansion was inconsistent in service quality and unit economics.",
    approach: "Designed unit-level SOPs, KPI dashboards, and a replicable launch playbook.",
    outcome: "New locations launched 2x faster with consistent margins from month one.",
  },
];

function WorkPage() {
  return (
    <PageShell>
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

      <section className="pb-24 md:pb-32">
        <div className="container-tight grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.06}>
              <article className="group h-full rounded-3xl bg-surface-elevated border border-border p-8 md:p-10 hover-lift relative overflow-hidden flex flex-col">
                <div className="absolute -top-24 -right-24 size-56 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-primary">{c.sector}</div>
                      <h3 className="mt-2 text-2xl md:text-3xl font-bold">{c.client}</h3>
                    </div>
                    <div className="size-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>

                  <div className="mt-8 flex-1">
                    <Accordion type="single" collapsible defaultValue="problem" className="w-full">
                      <AccordionItem value="problem" className="border-border/50">
                        <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:no-underline py-3">
                          Problem
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/90 leading-relaxed text-base">
                          {c.problem}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="approach" className="border-border/50">
                        <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:no-underline py-3">
                          Approach
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/90 leading-relaxed text-base">
                          {c.approach}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="outcome" className="border-b-0">
                        <AccordionTrigger className="text-xs font-semibold uppercase tracking-widest text-primary hover:no-underline py-3">
                          Outcome
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="rounded-2xl bg-primary/5 border border-primary/10 p-4 mt-2">
                            <p className="text-foreground font-medium leading-relaxed text-base">{c.outcome}</p>
                          </div>
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

      <section className="pb-24 md:pb-32">
        <div className="container-tight text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
              Your story could be the <span className="text-gradient">next one.</span>
            </h2>
            <div className="mt-10 flex justify-center">
              <Link to="/contact" className={getStartedClasses("primary")}>
                <GetStartedInner label="Start the Conversation" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
