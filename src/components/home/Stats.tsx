import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const stats = [
  { value: "1ª", label: "Temporada de estreia", compact: false },
  { value: "10", label: "Times inscritos", compact: false },
  { value: "Disputa de quarteto", label: "", compact: true },
  { value: "Primeira temporada no Cesarão", label: "", compact: true },
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
            <Reveal key={stat.value} delay={index * 90}>
              <div className="flex h-44 w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center transition-colors hover:border-gold-400/40 hover:bg-white/[0.06] sm:h-52">
                <span
                  className={cn(
                    "font-display font-black leading-snug text-gold-400",
                    stat.compact
                      ? "text-xl sm:text-2xl"
                      : "text-4xl sm:text-5xl",
                  )}
                >
                  {stat.value}
                </span>
                {stat.label && (
                  <span className="mt-3 text-sm font-semibold uppercase tracking-widest text-cream-100/70">
                    {stat.label}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
