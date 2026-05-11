import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import projLexRAG from "@/assets/project-Lex-RAG.png";
import projTraffic from "@/assets/project-traffic.jpg";
import projBlackFriday from "@/assets/project-blackfriday.jpg";
import projEatEase from "@/assets/project-eatease.png";
import projVedic from "@/assets/project-vedic.jpg";
import projClassification from "@/assets/project-classification.jpg";


export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vibhuti Patel" },
      { name: "description", content: "Selected Data Science and AI/ML projects by Vibhuti Patel." },
      { property: "og:title", content: "Projects — Vibhuti Patel" },
      { property: "og:description", content: "Selected Data Science and AI/ML projects." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    img: projLexRAG,
    name: "LexRAG: Legal Document Retrieval System",
    blurb: "An end-to-end legal AI pipeline designed to extract, enrich, embed, store, and retrieve Indian legal documents for accurate and context-aware question answering. Focused on making legal knowledge searchable, structured, and explainable, the system processes complex documents such as the Constitution of India using a poly-vector retrieval approach. By combining advanced embedding techniques with intelligent retrieval, LexRAG enables efficient access to legal information through semantic, structural, and citation-aware understanding.",
    tech: ["Python", "RAG", "Vector DB", "Embeddings"],
    href: "https://github.com/Patelvibhuti",
  },
  {
    img: projVedic,
    name: "Vedic RAG Pipeline",
    blurb: "A RAG-based rule extraction engine for Vedic astrology — combines a curated knowledge base with vector retrieval to surface contextual rules and interpretations.",
    tech: ["Python", "RAG", "LangChain", "Vector DB"],
    href: "https://github.com/Patelvibhuti/Vedic-Rag-Pipeline",
  },
  {
    img: projEatEase,
    name: "Eat Ease — Restaurant Chatbot",
    blurb: "Conversational system streamlining menu browsing, ordering, and feedback — built with Flask, MongoDB, and FastText.",
    tech: ["Flask", "MongoDB", "FastText", "NLP"],
    href: "https://github.com/Patelvibhuti/Restaurant_Chatbot_Using_NLP",
  },
  {
    img: projTraffic,
    name: "Traffic Sign Classification",
    blurb: "Deep learning model that classifies traffic sign images with high accuracy — supporting autonomous vehicle navigation systems.",
    tech: ["TensorFlow", "Keras", "OpenCV", "CNN"],
    href: "https://github.com/Patelvibhuti",
  },
  {
    img: projClassification,
    name: "Breast Cancer Classification",
    blurb: "Deep learning classifier on diagnostic features to predict malignancy — explored model architectures, regularization, and evaluation for medical decision support.",
    tech: ["TensorFlow", "Keras", "Scikit-learn", "Pandas"],
    href: "https://github.com/Patelvibhuti/breast-cancer-classification-deep-learning",
  },
  {
    img: projBlackFriday,
    name: "Black Friday Sales Forecast",
    blurb: "End-to-end analysis and predictive model forecasting Black Friday sales to improve inventory management and sales strategy.",
    tech: ["Pandas", "Scikit-learn", "Seaborn"],
    href: "https://github.com/Patelvibhuti/Black_Friday_Sales-Analysis-and-Prediction",
  },

];

function Projects() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-32">
      <Reveal><SectionLabel>Projects</SectionLabel></Reveal>
      <Reveal delay={120}>
        <h1 className="mt-6 font-display text-5xl md:text-7xl text-ink leading-[1.05]">
          Selected <span className="italic text-gold">work</span>.
        </h1>
      </Reveal>

      <div className="mt-16 space-y-20">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`grid gap-10 md:grid-cols-2 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <Reveal delay={100}>
              <div
                className="group block overflow-hidden rounded-2xl shadow-[var(--shadow-card)] aspect-[4/3] bg-muted relative lift"
                aria-label={`${p.name} preview`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold">
                  Project {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-tight">{p.name}</h2>
                <p className="mt-4 text-lg text-ink/75 leading-relaxed">{p.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink/20 px-3 py-1 text-xs font-mono text-ink/80 transition-all hover:border-gold hover:text-gold hover:-translate-y-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {i !== 0 && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink/80 hover:text-gold transition-colors"
                  >
                    <span className="border-b border-ink/30 group-hover:border-gold pb-0.5">View on GitHub</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
                  </a>
                )}
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </main>
  );
}

