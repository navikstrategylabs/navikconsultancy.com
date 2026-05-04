import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";

import { HoverGlow } from "@/components/ui/hover-glow";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NaviK Strategy Labs" },
      { name: "description", content: "Let's connect. We'd love to understand your business and explore how we can work together." },
      { property: "og:title", content: "Contact — NaviK Strategy Labs" },
      { property: "og:description", content: "Reach out to NaviK Strategy Labs and start the conversation." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <PageShell>
      <Toaster richColors position="top-center" />
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="container-tight relative">
          <Reveal className="max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">Contact</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[1.05]">
              Let's <span className="text-gradient">Connect.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We'd love to understand your business and explore how we can work together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-tight grid lg:grid-cols-12 gap-10">
          {/* Info */}
          <Reveal className="lg:col-span-4 h-full">
            <HoverGlow 
              className="rounded-3xl bg-hero-gradient text-primary-foreground pl-10 pr-14 py-10 h-full border border-white/5"
              glowColor="rgba(255,255,255,0.4)"
            >
              <div className="absolute inset-0 bg-radial-glow opacity-50" />
              <div className="relative space-y-8">
                <div>
                  <h3 className="text-2xl font-bold">Get in touch</h3>
                  <p className="mt-3 text-primary-foreground/80 leading-relaxed">
                    Share a bit about your business and what you're working on. We typically respond within one business day.
                  </p>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="size-11 rounded-xl glass-dark flex items-center justify-center shrink-0">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Email</div>
                      <a href="mailto:connect@navikconsultancy.com" className="font-medium hover:underline">connect@navikconsultancy.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="size-11 rounded-xl glass-dark flex items-center justify-center shrink-0">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Phone</div>
                      <a href="tel:+919292109404" className="font-medium hover:underline">+91 92921 09404</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="size-11 rounded-xl glass-dark flex items-center justify-center shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Location</div>
                      <div className="font-medium leading-relaxed">
                        36/267, Ground Floor, Mannath Building,
                         Thrikkakara PO,<br />
                        Ernakulam - 682021
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </HoverGlow>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-surface-elevated border border-border p-8 md:p-10 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2 group">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Name</Label>
                  <div className="rounded-lg ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary/40 transition-all duration-200 bg-background">
                    <Input id="name" name="name" placeholder="Your full name" required maxLength={100} className="border-0 ring-0 focus-visible:ring-0 bg-transparent rounded-lg shadow-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Company Name</Label>
                  <div className="rounded-lg ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/40 transition-all duration-200 bg-background">
                    <Input id="company" name="company" placeholder="Company / Brand" maxLength={120} className="border-0 ring-0 focus-visible:ring-0 bg-transparent rounded-lg shadow-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Email</Label>
                  <div className="rounded-lg ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/40 transition-all duration-200 bg-background">
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required maxLength={255} className="border-0 ring-0 focus-visible:ring-0 bg-transparent rounded-lg shadow-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Phone</Label>
                  <div className="rounded-lg ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/40 transition-all duration-200 bg-background">
                    <Input id="phone" name="phone" type="tel" placeholder="+91 ..." maxLength={40} className="border-0 ring-0 focus-visible:ring-0 bg-transparent rounded-lg shadow-none" />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">What do you need help with?</Label>
                  <div className="rounded-lg ring-1 ring-border focus-within:ring-2 focus-within:ring-primary/40 transition-all duration-200 bg-background">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business, goals, and where we can help."
                      rows={6}
                      required
                      maxLength={2000}
                      className="border-0 ring-0 focus-visible:ring-0 bg-transparent rounded-lg resize-none shadow-none"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-end">
                <GetStartedButton
                  type="submit"
                  disabled={submitting}
                  label={submitting ? "Sending..." : "Start the Conversation"}
                />
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
