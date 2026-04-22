import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Compass, Target, Cog, TrendingUp, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/LogoMarquee";
import { WhyMarquee } from "@/components/WhyMarquee";
import { Counter } from "@/components/Counter";
import { Button } from "@/components/ui/button";
import { GetStartedInner, getStartedClasses } from "@/components/ui/get-started-button";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NaviK Strategy Labs — Where Strategy Meets Execution" },
      { name: "description", content: "We partner with startups and growing businesses to bring clarity to ideas, structure to operations, and momentum to growth." },
      { property: "og:title", content: "NaviK Strategy Labs — Where Strategy Meets Execution" },
      { property: "og:description", content: "Strategy + Execution under one roof. Bring clarity, structure, and momentum to your business." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Compass, title: "Startup Strategy & Launch", desc: "Transform ideas into structured, market-ready businesses." },
  { icon: Target, title: "Brand Positioning & Market Strategy", desc: "Build a strong, differentiated presence in competitive markets." },
  { icon: Cog, title: "Operations & SOP Development", desc: "Design systems that bring consistency, efficiency, and scalability." },
  { icon: TrendingUp, title: "Growth & Scaling Strategy", desc: "Enable sustainable expansion through structured execution." },
  { icon: Users, title: "Founder Advisory", desc: "Support founders in making confident, high-impact decisions." },
];

const approach = [
  { title: "Clarity First", desc: "We define direction before action." },
  { title: "Execution Focused", desc: "We ensure strategies are implemented, not just documented." },
  { title: "Structured Growth", desc: "We build systems that support long-term scalability." },
];

const why = [
  "Strategy + Execution under one roof",
  "Hands-on, founder-level engagement",
  "Cross-domain expertise",
  "Outcome-driven approach",
];

const partners = ["Google", "Zoho", "Canva", "Meta", "Shopify", "AWS", "HubSpot", "OpenAI", "Slack", "Notion", "Stripe", "Figma", "Microsoft", "Atlassian"];
const clients = ["Lumen Co.", "Northwind", "Apex Labs", "Brightway", "Stride", "Helios", "Vertex", "Quanta", "Orbit", "Forge", "Pulse", "Beacon"];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <InfiniteGrid />

        <div className="container-tight relative py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-primary-foreground/90 text-xs uppercase tracking-widest font-medium">
              <Sparkles className="size-3.5" /> NaviK Strategy Labs
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.02]">
              Where Strategy<br />Meets <span className="italic font-light text-primary-foreground/95">Execution.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              We partner with startups and growing businesses to bring clarity to ideas,
              structure to operations, and momentum to growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className={getStartedClasses("onDark")}>
                <GetStartedInner label="Work With Us" variant="onDark" />
              </Link>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white text-base px-7 h-12 backdrop-blur">
                <Link to="/contact"><Calendar className="mr-1 size-4" /> Book a Consultation</Link>
              </Button>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl">
              {[
                { v: 50, s: "+", l: "Founders advised" },
                { v: 12, s: "+", l: "Industries served" },
                { v: 100, s: "%", l: "Outcome focused" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-sm text-primary-foreground/70">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute -bottom-px inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 md:py-32">
        <div className="container-tight">
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">What We Do</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              From uncertainty to clarity. From planning to execution.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We help businesses move from uncertainty to clarity, from planning to execution,
              and from early traction to scalable growth.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our approach combines strategic thinking with hands-on execution to deliver measurable outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-tight">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Core Services</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">A complete partner for the journey.</h2>
          </Reveal>
          <Reveal>
            <RuixenBentoCards
              items={services.map((s) => ({
                title: s.title,
                description: s.desc,
                icon: s.icon,
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 md:py-32">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold">Our Approach</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                A discipline that <span className="text-gradient">turns ideas</span> into outcomes.
              </h2>
            </Reveal>
            <div className="lg:col-span-7 space-y-5">
              {approach.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.08}>
                  <div className="flex gap-5 rounded-2xl p-6 bg-surface border border-border hover-lift">
                    <div className="text-5xl font-display font-bold text-gradient leading-none shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{a.title}</h3>
                      <p className="mt-1 text-muted-foreground">{a.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY NAVIK */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="container-tight relative">
          <Reveal className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/70 font-semibold">Why NaviK</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary-foreground">Built for founders who ship.</h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-5 relative">
          <WhyMarquee items={why} />
          <WhyMarquee items={why.slice().reverse()} reverse />
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="py-20 md:py-24">
        <div className="container-tight mb-10">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-primary font-semibold text-center">Partners & Ecosystem</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center">Working alongside the world's leading platforms.</h2>
          </Reveal>
        </div>
        <div className="space-y-6">
          <LogoMarquee items={partners} />
          <LogoMarquee items={partners.slice().reverse()} reverse />
        </div>
      </section>

      {/* CLIENT LOGOS GRID */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-tight">
          <Reveal className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Trusted By</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Founders & teams we've partnered with.</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <Reveal key={c} delay={i * 0.03}>
                <div className="aspect-[5/2] rounded-xl bg-surface-elevated border border-border flex items-center justify-center font-display text-xl md:text-2xl font-semibold text-foreground/50 hover:text-primary hover:border-primary/30 transition-all hover-lift">
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-tight">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-radial-glow opacity-60" />
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                  Let's build something <br className="hidden md:block" />that <span className="italic font-light">scales.</span>
                </h2>
                <div className="mt-10 flex justify-center">
                  <Link to="/contact" className={getStartedClasses("onDark")}>
                    <GetStartedInner label="Book a Consultation" variant="onDark" />
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
