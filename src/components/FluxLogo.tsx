export function FluxLogo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Flux — home"
      className={`inline-flex items-center gap-2 font-sans font-bold tracking-tight text-foreground ${className}`}
    >
      <span className="text-3xl leading-none">FLU</span>
      <span className="relative inline-block text-3xl leading-none">
        X
        <span
          aria-hidden
          className="absolute -right-3 top-1/2 h-[4px] w-4 -translate-y-1/2 bg-accent"
        />
      </span>
    </a>
  );
}
