import React, { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import vibhutiLogo from "@/assets/vibhuti-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 90);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const vpStyle = useMemo(() => {
    if (!scrolled) {
      return {
        opacity: 1,
        visibility: "visible" as const,
        transform: "scale(1)",
        pointerEvents: "auto" as const,
      };
    }

    return {
      opacity: 0,
      visibility: "hidden" as const,
      transform: "scale(0.85)",
      pointerEvents: "none" as const,
    };
  }, [scrolled]);

  return (
    <>
      {/* Top corner mark */}
      <Link
        to="/"
        style={vpStyle}
        className="fixed top-6 right-2 sm:right-4 z-30 select-none font-display text-2xl sm:text-3xl font-semibold text-ink hover:text-gold transition-colors transition-[opacity,transform,visibility] duration-350 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
        aria-label="Home"
      >
          <img src={vibhutiLogo} alt="Vibhuti Patel" className="h-auto w-[clamp(100px,8vw,180px)]" />
      </Link>


      {/* Bottom centered nav */}
      <nav className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 rounded-full border border-border bg-background/80 backdrop-blur-md px-2 py-2 shadow-[var(--shadow-soft)] overflow-x-auto whitespace-nowrap">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 text-xs sm:text-sm rounded-full text-muted-foreground hover:text-ink transition-colors whitespace-nowrap"
              activeProps={{ className: "px-3 py-1.5 text-xs sm:text-sm rounded-full bg-ink text-primary-foreground whitespace-nowrap" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>


    </>
  );
}
