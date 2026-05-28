export function FluxLogo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Flux — home"
      className={`inline-flex items-center gap-2 font-sans font-bold tracking-tight text-foreground ${className}`}
    >
      <span className="text-xl leading-none">FLU</span>
      <span className="relative inline-block text-xl leading-none">
        X
        <span
          aria-hidden
          className="absolute -right-2 top-1/2 h-[3px] w-3 -translate-y-1/2 bg-accent"
        />
      </span>
    </a>
  );
}
