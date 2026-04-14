"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";

function useCountUp(target: number, duration: number, enabled: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, duration, enabled]);

  return value;
}

type StatCardProps = {
  label: string;
  value: number;
  enabled: boolean;
};

function StatCard({ label, value, enabled }: StatCardProps) {
  const display = useCountUp(value, 1400, enabled);
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-card ring-1 ring-black/5">
      <p className="font-display text-4xl font-bold tabular-nums text-brand-700 sm:text-5xl">
        {display.toLocaleString("nl-NL")}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export function ImpactStats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const s = siteConfig.stats;

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Onze impact
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">{s.label}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Honden geholpen" value={s.dogs} enabled={visible} />
          <StatCard label="Katten geholpen" value={s.cats} enabled={visible} />
          <StatCard label="Vogels geholpen" value={s.birds} enabled={visible} />
          <StatCard label="Overige dieren" value={s.other} enabled={visible} />
        </div>
      </div>
    </section>
  );
}
