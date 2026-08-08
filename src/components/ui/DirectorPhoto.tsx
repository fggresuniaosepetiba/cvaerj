"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type DirectorPhotoProps = {
  src?: string;
  alt: string;
  initials: string;
  className?: string;
};

export function DirectorPhoto({
  src,
  alt,
  initials,
  className,
}: DirectorPhotoProps) {
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(src) && !failed;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-navy-900/15",
        className,
      )}
    >
      {showPhoto ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
          <span className="font-display text-5xl font-black uppercase tracking-tight text-gold-400/90">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
