import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Azienda } from "@/components/Azienda";
import { Categorie } from "@/components/Categorie";
import { PercheFlux } from "@/components/PercheFlux";
import { Contatti } from "@/components/Contatti";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flux — Distribuzione di elettronica di consumo all'ingrosso" },
      {
        name: "description",
        content:
          "Flux S.R.L. — distributore B2B di elettronica di consumo. Smartphone, computer, TV, networking, imaging e accessori. Fornitura per rivenditori in Italia.",
      },
      { property: "og:title", content: "Flux — Distribuzione elettronica di consumo all'ingrosso" },
      {
        property: "og:description",
        content:
          "Distributore B2B di elettronica di consumo con sede in Campania. Stock disponibile, logistica rapida, listini su richiesta.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Azienda />
        <Categorie />
        <PercheFlux />
        <Contatti />
      </main>
      <Footer />
    </div>
  );
}
