"use client";

import { sponsors } from "@/data/sponsors";

function SponsorMark({
  name,
  initials,
  color,
}: {
  name: string;
  initials: string;
  color: string;
}) {
  return (
    <div
      className="mx-3 flex h-24 w-48 shrink-0 items-center gap-3 rounded-lg border border-white/10 bg-navy-950/60 px-4 transition-colors hover:border-gold-400/40 sm:mx-4 sm:w-56"
      title={name}
    >
      <span
        aria-hidden
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md font-display text-sm font-black uppercase text-white"
        style={{ backgroundColor: color }}
      >
        {initials}
      </span>
      <span className="font-display text-sm font-bold uppercase tracking-wide text-cream-100/85">
        {name}
      </span>
    </div>
  );
}

export function SponsorsMarquee() {
  const doubled = [...sponsors, ...sponsors];

  return (
    <div className="pause-on-hover mask-fade-x overflow-hidden">
      <div className="flex w-max animate-marquee items-center">
        {doubled.map((sponsor, index) => (
          <SponsorMark key={`${sponsor.id}-${index}`} {...sponsor} />
        ))}
      </div>
    </div>
  );
}
