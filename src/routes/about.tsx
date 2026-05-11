import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/vibhuti-patel.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vibhuti Patel" },
      { name: "description", content: "About Vibhuti Patel — Data Science and AI/ML professional from Ahmedabad." },
      { property: "og:title", content: "About — Vibhuti Patel" },
      { property: "og:description", content: "Data Science and AI/ML professional from Ahmedabad." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-32">
      <Reveal><SectionLabel>About</SectionLabel></Reveal>

      {/* Editorial split hero */}
      <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-10 items-start">
        {/* Portrait — polaroid feel */}
        <Reveal delay={150} className="md:col-span-5">
          <div className="relative mx-auto max-w-sm">
            {/* Tape accents */}
            <span className="absolute -top-3 left-8 h-5 w-20 rotate-[-6deg] bg-gold/40 backdrop-blur-sm shadow-sm z-10" />
            <span className="absolute -top-3 right-8 h-5 w-20 rotate-[5deg] bg-gold/40 backdrop-blur-sm shadow-sm z-10" />

            <div className="lift rotate-[-2deg] bg-card p-3 shadow-[var(--shadow-soft)] border border-border">
              <div className="overflow-hidden">
                <img
                  src={portrait}
                  alt="Portrait of Vibhuti Patel"
                  className="aspect-[4/5] w-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Intro text */}
        <div className="md:col-span-7">
          <Reveal delay={120}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Hello, world —
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.02]">
              I'm <span className="italic text-gold">Vibhuti</span>,<br />
              I teach machines<br />
              to <span className="italic">read between</span><br />
              the lines.
            </h1>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 grid gap-5 text-lg leading-relaxed text-ink/80 max-w-xl">
              <p>
                Hello, I'm <span className="text-ink font-medium">Vibhuti</span> — a <span className="text-ink font-medium">Data Science &amp; AI/ML</span> practitioner based in Ahmedabad.
              </p>
              <p>
                I specialize in building intelligent systems using <span className="text-ink font-medium">Natural Language Processing</span>, large language models, and <span className="text-ink font-medium">Generative AI</span>, with a strong focus on multilingual applications. My work centers around designing scalable solutions that can understand, retrieve, and generate meaningful information across diverse languages and domains.
              </p>
              <p>
                I enjoy working on end-to-end machine learning pipelines—from data preprocessing and model development to deployment—ensuring that systems are not just accurate, but also practical in real-world settings. I'm particularly interested in <span className="text-ink font-medium">Retrieval-Augmented Generation (RAG)</span>, Generative AI workflows, and emerging Agentic AI systems that combine reasoning, memory, and tool usage.
              </p>
              <p>
                My goal is to build AI systems that go beyond static predictions—systems that can interact, adapt, and assist effectively across multilingual and low-resource environments.
              </p>
              <p>
                Currently, I'm focused on advancing my skills in NLP, LLMs, Generative AI, and agent-based architectures, while exploring opportunities to contribute to impactful AI/ML projects and research.
              </p>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display italic text-2xl text-ink/90 max-w-xl">
              "The most beautiful thing in tech is the moment a model finally
              <span className="text-gold"> understands </span> what you meant."
            </blockquote>
          </Reveal>

          <Reveal delay={520}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-ink bg-ink px-6 py-3 text-sm font-mono uppercase tracking-widest text-background transition-colors hover:bg-transparent hover:text-ink"
              >
                Let's talk
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/experience"
                className="story-link font-mono text-xs uppercase tracking-widest text-ink/70"
              >
                See the flight log
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Two-column meta */}
      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <Reveal delay={150}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Education
            </p>
            <div className="mt-4 space-y-5">
              <div className="border-l-2 border-gold pl-5">
                <p className="font-display text-2xl text-ink">M.Sc. Data Science</p>
                <p className="text-ink/70">Gujarat University · 7.79 CGPA</p>
              </div>
              <div className="border-l-2 border-ink/20 pl-5">
                <p className="font-display text-xl text-ink">B.Sc. Data Science</p>
                <p className="text-ink/70">Gujarat University · 8.13 CGPA</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Beyond the screen
            </p>
            <ul className="mt-4 space-y-3 text-ink/80">
              <li className="flex gap-3"><span className="text-gold">✦</span> Reading research papers with chai ☕</li>
              <li className="flex gap-3"><span className="text-gold">✦</span> Exploring multilingual and Indic language datasets</li>
              <li className="flex gap-3"><span className="text-gold">✦</span> Drawing — visualizing ideas and concepts</li>
              <li className="flex gap-3"><span className="text-gold">✦</span> Traveling — observing languages, cultures, and human behavior</li>
              <li className="flex gap-3"><span className="text-gold">✦</span> Enjoying nature — where I slow down and think deeply</li>
              <li className="flex gap-3"><span className="text-gold">✦</span> Finding clarity in nature and quiet thinking</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
