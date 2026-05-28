import { useEffect, useState } from "react";
import { FluxLogo } from "./FluxLogo";

const links = [
  { href: "#azienda", label: "Azienda" },
  { href: "#categorie", label: "Categorie" },
  { href: "#perche", label: "Perché Flux" },
  { href: "#contatti", label: "Contatti" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_var(--border)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <FluxLogo />
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="flex h-9 w-9 items-center justify-center border border-border md:hidden"
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
