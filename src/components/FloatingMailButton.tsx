export function FloatingMailButton() {
  return (
    <a
      href="mailto:info@fluxsrl.com"
      aria-label="Scrivici via email"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-accent-foreground shadow-lg transition-transform hover:-translate-y-[2px]"
    >
      <span>Mail</span>
      <span aria-hidden>→</span>
    </a>
  );
}
