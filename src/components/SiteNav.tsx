import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <>
      {/* Top corner mark */}
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 font-display text-3xl font-semibold text-ink hover:text-gold transition-colors"
        aria-label="Home"
      >
        VP<span className="text-gold">.</span>
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
