import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/navik-logo.png";
import { GetStartedInner, getStartedClasses } from "@/components/ui/get-started-button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-white/50 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* Desktop nav */}
      <div className="container-tight flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="NaviK Strategy Labs" className="h-11 md:h-13 w-auto" />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out"
                activeProps={{ className: "text-primary after:scale-x-100" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://navikstrategylabs.zohobookings.in/#/navikstrategylabs"
            target="_blank"
            rel="noopener noreferrer"
            className={getStartedClasses("primary", "h-10 text-sm pl-5 pr-11")}
          >
            <GetStartedInner label="Book a Consultation" variant="primary" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary/50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer — full-width, below the header bar */}
      {open && (
        <div className="md:hidden border-t border-border/30 bg-white/90 backdrop-blur-xl animate-fade-up">
          <div className="container-tight py-4">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/75 hover:bg-secondary/50 transition-colors"
                    activeProps={{ className: "text-primary bg-primary/5" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-border/30 mt-2">
                <a
                  href="https://navikstrategylabs.zohobookings.in/#/navikstrategylabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getStartedClasses("primary", "w-full justify-center")}
                >
                  <GetStartedInner label="Book a Consultation" variant="primary" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
