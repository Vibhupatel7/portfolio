import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroPlane from "@/assets/hero-plane.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const planeRef = useRef<HTMLImageElement>(null);
  const [typed, setTyped] = useState("");
  const fullText = "Data Science · AI / ML";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = planeRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      el.style.setProperty("--mr", `${x * 0.2}deg`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero plane - centered as visual anchor */}
      <img
        ref={planeRef}
        src={heroPlane}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[55vw] max-w-[640px] opacity-25 md:opacity-40 animate-float drift -translate-x-1/2 -translate-y-1/2"
      />

      {/* Decorative orbit */}
      <div className="pointer-events-none absolute right-[15vw] top-[18vh] h-40 w-40 animate-spin-slow opacity-60">
        <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold" />
        <div className="absolute inset-0 rounded-full border border-dashed border-ink/10" />
      </div>



      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-script text-3xl text-ink animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Hey there!
        </p>
        <p className="mt-2 font-script text-2xl text-ink/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          My name is
        </p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl font-semibold tracking-tight text-ink animate-fade-up leading-[0.95]" style={{ animationDelay: "0.3s" }}>
          VIBHUTI<br />
          <span className="italic text-gold">PATEL</span>
        </h1>
        <p className="mt-3 font-mono text-sm tracking-[0.3em] uppercase text-ink/70 min-h-[1.25rem]">
          {typed}
          <span className="ml-1 inline-block h-4 w-[2px] bg-gold align-middle animate-blink" />
        </p>

        <div className="mt-10 max-w-md animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <p className="font-script text-4xl leading-tight text-ink underline decoration-gold decoration-2 underline-offset-4">
            Curious mind,
          </p>
          <p className="mt-2 font-mono text-sm text-ink/70">building intelligence that matters.</p>
        </div>

        <div className="mt-12 flex gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-primary-foreground transition-all hover:bg-ink/90 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5"
          >
            My Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/contact"
            className="story-link inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3 text-sm text-ink hover:bg-ink/5 transition-colors"
          >
            Say Hello
          </Link>
        </div>
      </section>

    </main>
  );
}
