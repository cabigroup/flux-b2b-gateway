const points = [
  {
    n: "01",
    metric: "STOCK",
    title: "Stock disponibile",
    body: "Magazzino gestito internamente. Quello che vedi a listino è quello che spediamo.",
  },
  {
    n: "02",
    metric: "B2B",
    title: "Fornitura per rivenditori",
    body: "Lavoriamo solo con partita IVA. Condizioni e listini dedicati al canale.",
  },
  {
    n: "03",
    metric: "24/48h",
    title: "Logistica rapida",
    body: "Ordini evasi in giornata quando confermati entro le 14:00. Spedizioni su tutta Italia.",
  },
  {
    n: "04",
    metric: "LIVE",
    title: "Catalogo aggiornato",
    body: "Disponibilità e prezzi rivisti con frequenza. Niente prodotti fantasma in vetrina.",
  },
];

export function PercheFlux() {
  return (
    <section id="perche" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="reveal">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            03 / Perché Flux
          </div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Quattro cose, fatte bene.
          </h2>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <article key={p.n} className="reveal bg-background p-6 md:p-8">
              <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{p.n}</span>
                <span className="text-accent">{p.metric}</span>
              </div>
              <h3 className="mt-10 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
