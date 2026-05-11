export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-ink/70">
      <span className="h-px w-10 bg-ink/40" />
      <span className="font-mono text-xs tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}
