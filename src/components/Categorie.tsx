const items = [
  {
    n: "01",
    title: "Smartphone & telefonia",
    label: "Ingrosso telefonia",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "02",
    title: "Computer & periferiche",
    label: "Notebook · Desktop · Accessori",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "03",
    title: "TV & audio/video",
    label: "Smart TV · Soundbar · AV",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "04",
    title: "Telecomunicazioni & networking",
    label: "Router · Switch · TLC",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "05",
    title: "Fotocamere & imaging",
    label: "Reflex · Mirrorless · Ottiche",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    n: "06",
    title: "Accessori & componentistica",
    label: "Cavi · Storage · Componenti",
    img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1600&q=80",
  },
];

export function Categorie() {
  return (
    <section id="categorie" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              02 / Categorie
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Sei comparti, un unico interlocutore.
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Catalogo aggiornato · Listini su richiesta
          </p>
        </div>

        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li
              key={it.n}
              className="reveal group relative isolate flex aspect-[4/3] flex-col justify-between overflow-hidden bg-background p-5"
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 grayscale transition duration-700 group-hover:scale-[1.04] group-hover:opacity-60 group-hover:grayscale-0"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/20"
              />
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{it.n}</span>
                <span>{it.label}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {it.title}
                </h3>
                <div className="mt-2 h-px w-8 bg-accent transition-all duration-500 group-hover:w-20" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
