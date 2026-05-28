export function Azienda() {
  return (
    <section id="azienda" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-8">
        <div className="reveal md:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            01 / Azienda
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Un fornitore tech del Sud Italia.
          </h2>
        </div>
        <div className="reveal space-y-6 md:col-span-7 md:col-start-6">
          <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
            Flux ha sede a San Giuseppe Vesuviano ed è specializzata nel
            commercio all&apos;ingrosso di computer, periferiche, software e
            apparecchiature per le telecomunicazioni.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Lavoriamo con rivenditori, system integrator e operatori del
            canale. Selezioniamo i fornitori, gestiamo lo stock in casa,
            evadiamo gli ordini con tempi certi. Niente intermediazioni
            inutili, niente promesse che non possiamo mantenere.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Il nostro lavoro è semplice: avere il prodotto giusto, al prezzo
            corretto, quando serve.
          </p>
          <div className="mt-6 flex flex-wrap gap-px border border-border bg-border">
            <div className="bg-background px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Sede operativa
              </div>
              <div className="mt-1 font-mono text-sm">Campania · IT</div>
            </div>
            <div className="bg-background px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Settore
              </div>
              <div className="mt-1 font-mono text-sm">Consumer Electronics</div>
            </div>
            <div className="bg-background px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Canale
              </div>
              <div className="mt-1 font-mono text-sm">B2B / Rivenditori</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
