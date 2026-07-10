import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import "@/contact-mobile.css";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, Vibhuti Patel" },
{ name: "description", content: "Get in touch with Vibhuti Patel, email, LinkedIn, Phone." },
{ property: "og:title", content: "Contact, Vibhuti Patel" },
{ property: "og:description", content: "Reach out via email, LinkedIn, or Phone." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    label: "Email",
    value: "vibhupatel.002@gmail.com",
    href: "mailto:vibhupatel.002@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9727537625",
    href: "tel:+919727537625",
  },
  {
    label: "LinkedIn",
    value: "vibhuti-patel",
    href: "https://www.linkedin.com/in/vibhuti-patel-5357b920a/",
  },

];

function Contact() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <Reveal><SectionLabel>Contact</SectionLabel></Reveal>
      <Reveal delay={120}>
        <h1 className="mt-6 font-display text-5xl md:text-7xl text-ink leading-[1.05]">
          Let's <span className="italic text-gold">build</span> something.
        </h1>
      </Reveal>
      <Reveal delay={220}>
        <p className="mt-6 max-w-xl text-lg text-ink/70 leading-relaxed">
          Open to opportunities in Data Science, Machine Learning, and AI engineering.
          Drop a message, and I usually reply within a day.

        </p>
      </Reveal>

      <div className="mt-16 grid gap-px bg-border rounded-2xl overflow-hidden">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 100}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="relative flex items-center justify-between bg-background px-8 py-6 hover:bg-card/80 transition-all group overflow-hidden"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-gold/10 transition-all duration-500 group-hover:w-full" />
              <span className="relative font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {c.label}
              </span>
              <span className="relative font-display text-xl md:text-2xl text-ink group-hover:text-gold transition-colors">
                {c.value}
                <span className="ml-2 text-base inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={400}>
        <p className="mt-20 text-center font-script text-2xl text-ink/60">
          Keep flying.

        </p>
      </Reveal>
    </main>
  );
}
