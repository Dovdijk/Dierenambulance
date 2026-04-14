"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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
  icon: ReactNode;
};

function StatCard({ label, value, enabled, icon }: StatCardProps) {
  const display = useCountUp(value, 1400, enabled);
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-card">
      <div
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800"
        aria-hidden
      >
        {icon}
      </div>
      <p className="mt-4 font-display text-4xl font-bold tabular-nums text-emerald-800 sm:text-5xl">
        {display.toLocaleString("nl-NL")}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export function HomeYearStats() {
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

  const dogIcon = (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 14c2-4 4-6 8-6s6 2 8 6" />
      <path d="M8 10V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
  const catIcon = (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 14c1-3 3-5 7-5s6 2 7 5" />
      <path d="M7 9l-2-3 2-1 2 2M17 9l2-3-2-1-2 2" />
      <circle cx="10" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
  const birdIcon = (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12c3-4 7-6 14-5-2 3-5 5-9 6l-2 4-3-5z" />
      <path d="M14 7v.01" />
    </svg>
  );
  const otherIcon = (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );

  return (
    <section ref={ref} className="bg-gradient-to-b from-emerald-50/80 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {s.label}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            Een indicatie van onze inzet dit jaar — elke melding telt.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Katten" value={s.cats} enabled={visible} icon={catIcon} />
          <StatCard label="Honden" value={s.dogs} enabled={visible} icon={dogIcon} />
          <StatCard label="Vogels" value={s.birds} enabled={visible} icon={birdIcon} />
          <StatCard label="Overige" value={s.other} enabled={visible} icon={otherIcon} />
        </div>
      </div>
    </section>
  );
}
