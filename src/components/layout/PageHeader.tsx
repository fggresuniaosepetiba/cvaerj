import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, #f6be63 0, transparent 45%), radial-gradient(circle at 10% 90%, #123b75 0, transparent 40%)",
        }}
      />
      <Container className="relative">
        <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
          {eyebrow}
        </p>
        <h1 className="text-balance font-display text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-100/75 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
