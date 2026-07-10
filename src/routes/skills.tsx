import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

const marqueeTags = [
  "Python Development", "Machine Learning", "Deep Learning", "NLP & Retrieval",
  "Generative AI", "Agentic AI", "MLOps & Deployment",
];

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills, Vibhuti Patel" },
      { name: "description", content: "Technical skills: Python, ML, Deep Learning, Data Visualization, Statistics." },
      { property: "og:title", content: "Skills, Vibhuti Patel" },
      { property: "og:description", content: "Python, Machine Learning, Deep Learning, Data Visualization & Statistics." },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Core Expertise",
    blurb: "LLM-powered systems with a focus on retrieval, generation, and agentic workflows.",
    items: ["LLMs (LLaMA, NLLB)", "Retrieval-Augmented Generation (RAG)", "Generative AI", "Agentic AI (multi-step reasoning, tool usage)", "NLP & Multilingual AI", "Semantic Search & Embeddings"],
  },
  {
    title: "Machine Learning & AI",
    blurb: "Core ML techniques and deep learning model development.",
    items: ["Supervised & Unsupervised Learning", "Model Evaluation & Optimization", "Deep Learning (PyTorch / TensorFlow)"],
  },
  {
    title: "NLP & Retrieval Systems",
    blurb: "Modern language understanding and information retrieval pipelines.",
    items: ["Transformers (Hugging Face)", "Cross-lingual Retrieval", "BM25, Bi-Encoder, ColBERT", "Embeddings (BGE-m3, Sentence Transformers)"],
  },
  {
    title: "Data Science Foundations",
    blurb: "Data analysis, visualization, and structured insight generation.",
    items: ["Pandas, NumPy, Python, R", "Power BI", "Hypothesis Testing", "EDA & Feature Engineering"],
  },
  {
    title: "Backend, APIs & GenAI Systems",
    blurb: "Scalable APIs, model serving, and GenAI deployment tools.",
    items: ["FastAPI", "REST APIs & Model Serving", "LangChain & LangGraph", "Agentic AI Systems", "Docker", "GenAI Tools (Cursor, GitHub Copilot)"],
  },
  {
    title: "Tools & Workflow",
    blurb: "Essential development environments and collaboration tools.",
    items: ["Git & GitHub", "Jupyter Notebook / Google Colab", "Linux / Ubuntu", "Docker", "Hugging Face", "Postman"],
  },
];

function Skills() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-32">
      <Reveal><SectionLabel>Skills</SectionLabel></Reveal>
      <Reveal delay={120}>
        <h1 className="mt-6 font-display text-5xl md:text-7xl text-ink leading-[1.05]">
          Tools of the <span className="italic text-gold">trade</span>.
        </h1>
      </Reveal>

      <div className="mt-16 grid gap-px bg-border rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px">
          {groups.map((g, idx) => (
            <Reveal key={g.title} delay={idx * 80}>
              <div className="bg-background p-8 hover:bg-card/80 transition-colors group h-full relative overflow-hidden">
                <span className="absolute -top-px left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                <h3 className="font-display text-2xl text-ink transition-transform duration-300 group-hover:translate-x-1">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-ink/15 px-3 py-1 text-xs font-mono text-ink/80 group-hover:border-gold/50 transition-all duration-300 hover:bg-gold/10 hover:-translate-y-0.5"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 relative overflow-hidden border-y border-ink/10 py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-3xl md:text-5xl text-ink/30">
          {[...marqueeTags, ...marqueeTags].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t}
              <span className="text-gold">&#10022;</span>
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

