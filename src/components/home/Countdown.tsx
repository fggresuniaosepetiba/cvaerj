"use client";

import { useEffect, useState } from "react";
import { seasonLaunch } from "@/data/season";

const TARGET = new Date(seasonLaunch.date).getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeft(now: number): TimeLeft {
  const diff = TARGET - now;
  if (diff <= 0) return ZERO;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

export function Countdown() {
  const [left, setLeft] = useState<TimeLeft>(ZERO);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setLeft(getTimeLeft(now));
      if (now >= TARGET) setStarted(true);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: left.days, label: "Dias" },
    { value: left.hours, label: "Horas" },
    { value: left.minutes, label: "Minutos" },
    { value: left.seconds, label: "Segundos" },
  ];

  return (
    <div className="border-t border-gold-400/20 bg-navy-950/95 px-6 py-6">
      {started ? (
        <p className="text-center font-display text-sm font-bold uppercase tracking-widest text-gold-300">
          O evento de estreia já começou
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span className="font-display text-2xl font-black tabular-nums text-gold-400 sm:text-3xl lg:text-4xl">
                {pad(unit.value)}
              </span>
              <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-widest text-cream-100/60 sm:text-xs">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
