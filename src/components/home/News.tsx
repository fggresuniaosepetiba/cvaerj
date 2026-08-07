import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { news, formatDatePtBR } from "@/data/news";

export function News() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Últimas Notícias"
            title="Acontecendo no circuito"
          />
          <Link
            href="/galeria"
            className="inline-flex shrink-0 items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-gold-700"
          >
            Ver todas as novidades
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.slice(0, 4).map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-navy-900/10 transition-shadow hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3">
                    <Badge className="bg-navy-950/85 text-gold-300 ring-white/20">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-navy-900/55">
                    <time dateTime={item.date}>{formatDatePtBR(item.date)}</time>
                    <span aria-hidden className="h-1 w-1 rounded-full bg-navy-900/30" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-gold-600">
                    <Link href="/galeria">{item.title}</Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-900/65">
                    {item.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold uppercase tracking-wider text-gold-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Ler notícia
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
