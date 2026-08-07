"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { gallery, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

type Filter = "todos" | "Fotos" | "Vídeos";

const filters: { key: Filter; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "Fotos", label: "Fotos" },
  { key: "Vídeos", label: "Vídeos" },
];

function GalleryCard({ item }: { item: GalleryItem }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-900 shadow-sm ring-1 ring-navy-900/10">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-all duration-700 group-hover:scale-105",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {item.category === "Vídeos" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-navy-950/50 text-white backdrop-blur transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          </span>
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
          {item.stage}
        </p>
        <p className="mt-1 font-display text-base font-bold text-white">
          {item.title}
        </p>
      </figcaption>
    </figure>
  );
}

export function GalleryGrid() {
  const [active, setActive] = useState<Filter>("todos");

  const items = gallery.filter((item) =>
    active === "todos" ? true : item.category === active,
  );

  return (
    <Container>
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActive(filter.key)}
            className={cn(
              "rounded-full px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition-colors",
              active === filter.key
                ? "bg-navy-950 text-gold-300"
                : "bg-white text-navy-900/70 ring-1 ring-navy-900/15 hover:bg-navy-900/5",
            )}
          >
            {filter.label}
          </button>
        ))}
        <Badge className="ml-2 bg-navy-900/5 text-navy-900/55 ring-navy-900/15">
          {items.length} {items.length === 1 ? "registro" : "registros"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={(index % 6) * 50}>
            <GalleryCard item={item} />
          </Reveal>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-navy-900/55">
        Quer ver sua equipe na galeria?{" "}
        <a
          href="/contato"
          className="font-semibold text-gold-600 underline-offset-4 hover:underline"
        >
          Envie fotos e vídeos da sua etapa
        </a>
        .
      </p>
    </Container>
  );
}
