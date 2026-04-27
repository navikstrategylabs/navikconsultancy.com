import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/navik-logo.png";
import { Button } from "@/components/ui/button";
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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-tight">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-elegant" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="NaviK Strategy Labs" className="h-9 md:h-10 w-auto" />
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium text-foreground/75 hover:text-primary transition-colors after:absolute after:bottom-1.5 after:left-4 after:right-4 after:h-[2px] after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out"
                  activeProps={{ className: "text-primary after:scale-x-100" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a href="https://navikstrategylabs.zohobookings.in/#/navikstrategylabs" target="_blank" rel="noopener noreferrer" className={getStartedClasses("primary", "h-11 text-sm pl-5 pr-12")}>
              <GetStartedInner label="Book a Consultation" variant="primary" />
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 shadow-elegant animate-fade-up">
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
              <li className="pt-2">
                <a
                  href="https://navikstrategylabs.zohobookings.in/#/navikstrategylabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getStartedClasses("primary", "w-full justify-start")}
                >
                  <GetStartedInner label="Book a Consultation" variant="primary" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
