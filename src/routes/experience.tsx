import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience, Vibhuti Patel" },
      { name: "description", content: "Work experience: DAIICT, Nettyfy Technologies, Datavizz." },
      { property: "og:title", content: "Experience, Vibhuti Patel" },
      { property: "og:description", content: "AI/ML roles at DAIICT, Nettyfy Technologies, and Datavizz." },
    ],
  }),
  component: Experience,
});

const roles = [
  {
    period: "Nov 2024, March 2026",
    title: "Jr. Computer Scientist",
    company: "IRLP Lab, DAIICT Gandhinagar, India",
    points: [
      "Trained NLLB 3.3B model on 22 Indian language government and health datasets - NLP, LLMs.",
      "Enhanced text retrieval and translation accuracy across Gujarati, English, Bengali, and Kannada using Bi-Encoder, BM25, and ColBERT on MS MARCO and FIRE benchmarks - Finetuning LLMs.",
      "Built hierarchical embeddings (clauses, sections, full documents) for legal Q&A, enabling semantic and referential query handling for RAG.",
      "Developed and optimized Retrieval-Augmented Generation (RAG) chatbot architecture for Bhashini using LLaMA 3.2 LLM model and BGE-m3 embedding model, enhancing multilingual text retrieval and translation accuracy.",
      "Integrated the BGE-m3 embedding model for efficient language-specific data processing and improved performance of the LLaMA 3.2 LLM in the Bhashini project.",
    ],
  },
  {
    period: "May 2024, Oct 2024",
    title: "AI/ML Engineer",
    company: "ThinkNovus Technologies Pvt. Ltd",

    points: [
      "Delivered end-to-end AI/ML solutions for clients, from data exploration to model deployment.",
      "Built RAG-based chatbots and LLM workflows tailored to client domains and document corpora.",
      "Developed web scraping pipelines, REST APIs, and automated data processing scripts.",
    ],
  },
  {
    period: "Jan 2024, April 2024",
    title: "AI/ML Intern",
    company: "Nettyfy Technologies",
    points: [
      "Developed OCR algorithms for text-to-image and image-to-text conversion.",
      "Created text-to-voice models for accessibility applications.",
      "Conducted data annotation and cleaning for high-quality datasets.",
      "Performed time series analysis for predictive analytics.",
      "Developed web scraping scripts to gather data.",
      "Designed and implemented RESTful APIs for system integration.",
    ],
  },
  {
    period: "Jul 2023, Aug 2023",
    title: "Data Science Trainee",
    company: "Datavizz",
    points: [
      "Created data visualisation graphics, translating complex data sets into comprehensive visual representations.",
      "Participated in workshops to advance skills.",
      "Used SPSS and Python to manage and analyse large data sets.",
    ],
  },
];

function Experience() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-32">
      <Reveal><SectionLabel>Experience</SectionLabel></Reveal>
      <Reveal delay={120}>
        <h1 className="mt-6 font-display text-5xl md:text-7xl text-ink leading-[1.05]">
          A short <span className="italic text-gold">flight log</span>.
        </h1>
      </Reveal>

      <ol className="mt-20 relative border-l border-ink/15 ml-3">
        {roles.map((r, i) => (
          <Reveal key={i} as="li" delay={i * 120} className="block pl-10 pb-16 last:pb-0 relative">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-gold ring-4 ring-background animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{r.period}</p>
            <h3 className="mt-2 font-display text-3xl text-ink hover:text-gold transition-colors">{r.title}</h3>
            <p className="text-ink/70 italic">{r.company}</p>
            <ul className="mt-4 space-y-2 text-ink/80 leading-relaxed max-w-2xl">
              {r.points.map((p, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-gold mt-2">•</span>

                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </main>
  );
}
