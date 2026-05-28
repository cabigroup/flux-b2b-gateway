import { FluxLogo } from "./FluxLogo";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <FluxLogo />
          <div className="space-y-1 font-mono text-[11px] leading-relaxed text-muted-foreground md:text-right">
            <div>Flux S.R.L. — Via Armando Diaz 58, 80047 San Giuseppe Vesuviano (NA)</div>
            <div>P.IVA e C.F. 10969321214 — PEC: 10969321214@pec.it</div>
            <div>info@fluxsrl.com</div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Flux S.R.L.</span>
          <span>Distribuzione consumer electronics · B2B</span>
        </div>
      </div>
    </footer>
  );
}
