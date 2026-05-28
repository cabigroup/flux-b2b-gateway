const HERO_IMG =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${HERO_IMG}')` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 md:px-8 md:py-36">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-accent" />
          <span>B2B · Wholesale · Italia</span>
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Distribuzione di elettronica
          <br />
          di consumo.{" "}
          <span className="text-muted-foreground">All&apos;ingrosso.</span>
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          Riforniamo rivenditori, catene retail e operatori del settore.
          Stock disponibile, ordini gestiti in giornata, listini su richiesta.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="mailto:info@fluxsrl.com"
            className="group inline-flex items-center gap-3 bg-accent px-6 py-3 font-mono text-sm font-medium uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-[1px]"
          >
            Scrivici
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#categorie"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Vedi categorie
          </a>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {[
            ["01", "Sede operativa", "Campania, IT"],
            ["02", "Modello", "B2B / Wholesale"],
            ["03", "Comparti", "6 categorie"],
            ["04", "Spedizioni", "Italia / EU"],
          ].map(([n, k, v]) => (
            <div key={n} className="bg-background p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {n}
              </div>
              <dt className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {k}
              </dt>
              <dd className="mt-1 font-mono text-sm text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
