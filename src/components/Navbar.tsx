import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoBlue from "@/assets/navik-logo.png";
import logoWhite from "@/assets/navik_white_logo.png";
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
  const location = useLocation();
  const isHome = location.pathname === "/";
  const showDarkNavbar = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border/40 shadow-sm py-0"
          : showDarkNavbar
          ? "bg-transparent border-b border-transparent py-2"
          : "bg-white/50 backdrop-blur-md border-b border-transparent py-1"
      }`}
    >
      {/* Desktop nav */}
      <div className="container-tight flex items-center justify-between h-20 md:h-22 transition-all duration-500">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src={showDarkNavbar ? logoWhite : logoBlue} 
            alt="NaviK Strategy Labs" 
            className="h-14 md:h-16 w-auto object-contain transition-all duration-500" 
          />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out ${
                  showDarkNavbar 
                    ? "text-white/80 hover:text-white after:bg-white" 
                    : "text-foreground/70 hover:text-primary"
                }`}
                activeProps={{ className: showDarkNavbar ? "text-white after:scale-x-100" : "text-primary after:scale-x-100" }}
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
            className={getStartedClasses(showDarkNavbar ? "onDark" : "primary", "h-11 text-sm pl-6 pr-16")}
          >
            <GetStartedInner label="Book a Consultation" variant={showDarkNavbar ? "onDark" : "primary"} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            showDarkNavbar ? "text-white hover:bg-white/10" : "text-foreground hover:bg-secondary/50"
          }`}
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
