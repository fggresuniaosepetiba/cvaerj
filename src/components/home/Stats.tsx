import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "1ª", label: "Temporada de estreia" },
  { value: "8", label: "Etapas planejadas" },
  { value: "5", label: "Categorias em disputa" },
  { value: "RJ", label: "Cidades de todo o estado" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, #123b75 0, transparent 45%), radial-gradient(circle at 90% 80%, #f6be63 0, transparent 35%)",
        }}
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Estrutura do Circuito"
          title="Uma competição em escala estadual"
          align="center"
          dark
        />
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <div className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center transition-colors hover:border-gold-400/40 hover:bg-white/[0.06]">
                <span className="font-display text-4xl font-black text-gold-400 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-3 text-sm font-semibold uppercase tracking-widest text-cream-100/70">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
