export function Contatti() {
  return (
    <section id="contatti" className="border-b border-border bg-[#0f1011]">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <div className="reveal max-w-4xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            04 / Contatti
          </div>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Per richieste e listini, scrivici.
          </p>
          <a
            href="mailto:info@fluxsrl.com"
            className="group mt-8 block break-all text-4xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent md:text-6xl lg:text-7xl"
          >
            info@fluxsrl.com
            <span
              aria-hidden
              className="ml-3 inline-block align-middle text-accent transition-transform group-hover:translate-x-2"
            >
              →
            </span>
          </a>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
            <div className="bg-[#0f1011] px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </div>
              <div className="mt-1 font-mono text-sm">info@fluxsrl.com</div>
            </div>
            <div className="bg-[#0f1011] px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                PEC
              </div>
              <div className="mt-1 font-mono text-sm">10969321214@pec.it</div>
            </div>
            <div className="bg-[#0f1011] px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Sede
              </div>
              <div className="mt-1 font-mono text-sm">San Giuseppe Vesuviano (NA)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
