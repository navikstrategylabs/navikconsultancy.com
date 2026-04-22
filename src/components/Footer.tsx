import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/navik-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
      <div className="container-tight relative py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="NaviK" className="h-12 w-auto bg-white/95 rounded-lg p-2 inline-block" />
            <p className="mt-5 max-w-md text-primary-foreground/80 leading-relaxed">
              We partner with startups and growing businesses to bring clarity to ideas,
              structure to operations, and momentum to growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/work", label: "Work" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 shrink-0" /> hello@naviklabs.com</li>
              <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 shrink-0" /> +91 90000 00000</li>
              <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /> Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} NaviK Strategy Labs. All rights reserved.</p>
          <p className="font-display tracking-wide">Where Strategy Meets Execution.</p>
        </div>
      </div>
    </footer>
  );
}
