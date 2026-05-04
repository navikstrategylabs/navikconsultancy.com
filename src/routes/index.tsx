import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Calendar, Compass, Target, Cog, TrendingUp, Users, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { TrustedLogosMarquee } from "@/components/TrustedLogosMarquee";
import { WhyMarquee } from "@/components/WhyMarquee";
import { Counter } from "@/components/Counter";
import { Button } from "@/components/ui/button";
import { GetStartedInner, getStartedClasses } from "@/components/ui/get-started-button";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import { HoverGlow } from "@/components/ui/hover-glow";
import { ApproachSection } from "@/components/ui/approach-section";
import { UniqueTestimonials } from "@/components/ui/unique-testimonial";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";
import { PixelCanvas } from "@/components/ui/pixel-canvas";
import strategyImg from "@/assets/strategy_planning.jpeg";
import executionImg from "@/assets/execution_workspace.jpeg";
import growthImg from "@/assets/growth_momentum.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navik Strategy Labs — Where Strategy Meets Execution" },
      { name: "description", content: "We partner with startups and growing businesses to bring clarity to ideas, structure to operations, and momentum to growth." },
      { property: "og:title", content: "Navik Strategy Labs — Where Strategy Meets Execution" },
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

function HomePage() {
  const ctaMouseX = useMotionValue(-9999);
  const ctaMouseY = useMotionValue(-9999);

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    ctaMouseX.set(e.clientX - left);
    ctaMouseY.set(e.clientY - top);
  };

  const handleCtaMouseLeave = () => {
    ctaMouseX.set(-9999);
    ctaMouseY.set(-9999);
  };

  const ctaGlowBackground = useMotionTemplate`radial-gradient(circle 400px at ${ctaMouseX}px ${ctaMouseY}px, rgba(255,255,255,0.3), transparent 80%)`;

  return (
    <PageShell noPadding>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-radial-glow opacity-70" />
          <InfiniteGrid />
        </div>

        <div className="container-tight relative py-32 md:py-44">
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
                <a href="https://navikstrategylabs.zohobookings.in/#/navikstrategylabs" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-1 size-4" /> Book a Consultation
                </a>
              </Button>
            </div>

            <div className="mt-20 flex items-stretch gap-0 max-w-2xl">
              {[
                { v: 50, s: "+", l: "Founders advised" },
                { v: 12, s: "+", l: "Industries served" },
                { v: 100, s: "%", l: "Outcome focused" },
              ].map((s, i) => (
                <div key={s.l} className={`flex-1 px-5 ${i > 0 ? "border-l border-white/15" : ""}` }>
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground tabular-nums">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/60 font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 md:py-40 relative">
        <div className="container-tight">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
            <Reveal>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold">What We Do</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl">
                From uncertainty to clarity. From planning to execution.
              </h2>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
                We help businesses move from uncertainty to clarity, from planning to execution,
                and from early traction to scalable growth.
              </p>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our approach combines strategic thinking with hands-on execution to deliver measurable outcomes.
              </p>

            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
                <div className="col-span-2 row-span-1 relative overflow-hidden rounded-3xl shadow-elegant hover-lift group">
                  <img src={strategyImg} alt="Strategy Planning" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  </div>
                </div>
                <div className="col-span-1 row-span-1 relative overflow-hidden rounded-3xl shadow-elegant hover-lift group">
                  <img src={executionImg} alt="Hands-on Execution" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  </div>
                </div>
                <div className="col-span-1 row-span-1 relative overflow-hidden rounded-3xl shadow-elegant hover-lift group">
                  <img src={growthImg} alt="Sustainable Growth" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  </div>
                </div>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute -top-12 -right-12 size-64 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 size-64 bg-primary-glow/5 rounded-full blur-3xl -z-10" />
            </Reveal>
          </div>
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
      <ApproachSection />

      {/* WHY NAVIK */}
      <section className="py-24 md:py-32 relative overflow-hidden group/whysection">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        {/* Pixel canvas — covers the whole banner, triggers on section hover */}
        <PixelCanvas
          gap={14}
          speed={20}
          colors={["#ffffff", "#bfdbfe", "#93c5fd", "#e0e7ff"]}
          variant="default"
          noFocus
          style={{ zIndex: 1 }}
        />
        <div className="container-tight relative" style={{ zIndex: 2 }}>
          <Reveal className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/70 font-semibold">Why NaviK</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary-foreground">Built for founders who ship.</h2>
          </Reveal>
        </div>
        <div className="mt-12 space-y-5 relative" style={{ zIndex: 2 }}>
          <WhyMarquee items={why} />
          <WhyMarquee items={why.slice().reverse()} reverse />
        </div>
      </section>


      {/* TRUSTED BY LOGOS */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container-tight">
          <Reveal className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Trusted By</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">Founders & teams we've partnered with.</h2>
          </Reveal>
        </div>
        <TrustedLogosMarquee />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 md:py-16 relative">
        <div className="container-tight">
          <Reveal>
            <div className="text-center mb-4">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold">Client Voices</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">What our partners say.</h2>
            </div>
            <UniqueTestimonials />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="container-tight">
          <Reveal>
            <HoverGlow 
              className="rounded-[2.5rem] border border-white/10 shadow-2xl bg-hero-gradient"
              glowColor="rgba(255,255,255,0.4)"
            >
              {/* Complex Background Layers */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-glow/40 via-transparent to-transparent opacity-80" />
              
              {/* Subtle Dot Pattern */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

              <div className="relative px-8 py-12 md:py-16 lg:py-20 md:px-20 flex flex-col items-center text-center max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-md"
                >
                  <Sparkles className="size-4 text-primary-foreground" /> 
                  <span>Ready to transform your business?</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                  Let's build something <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 italic font-light">that scales.</span>
                </h2>
                
                <p className="mt-5 md:mt-6 text-lg text-white/70 leading-relaxed max-w-2xl font-light">
                  Stop guessing and start executing. Partner with us to bring clarity to your vision, structure to your operations, and momentum to your growth.
                </p>

                <div className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-6 w-full">
                  <a 
                    href="https://navikstrategylabs.zohobookings.in/#/navikstrategylabs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={getStartedClasses("onDark", "shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]")}
                  >
                    <GetStartedInner label="Book Your Free Consultation" variant="onDark" />
                  </a>
                </div>
              </div>
            </HoverGlow>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
