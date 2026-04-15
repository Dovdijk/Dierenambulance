"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Animal = {
  name: string;
  type: string;
  color: string;
  size: string;
  traits: string;
  location: string;
  date: string;
  description: string;
  photos: string[];
};

type Props = {
  title: string;
  intro: string;
  items: Animal[];
  locationLabel: string;
};

export function AnimalListings({ title, intro, items, locationLabel }: Props) {
  const [showAll, setShowAll] = useState(items.length <= 4);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowAll(items.length <= 4);
  }, [items.length]);

  useEffect(() => {
    if (showAll) return;
    const el = revealRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShowAll(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [showAll]);

  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-slate-900">{title}</h1>
          <p className="mt-3 text-lg text-slate-600">{intro}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {visibleItems.map((animal, idx) => (
            // Variatie: wit blok met groene rand, groen blok met witte rand, groen blok met groene rand.
            <article
              key={animal.name}
              className={`overflow-hidden rounded-3xl border shadow-card ${
                idx % 3 === 1
                  ? "border-2 border-brand-500 bg-white shadow-[0_0_0_1px_rgba(59,135,87,0.08),0_12px_30px_-18px_rgba(59,135,87,0.55)]"
                  : idx % 3 === 0
                    ? "border-2 border-white bg-brand-100 shadow-[0_0_0_1px_rgba(59,135,87,0.16),0_14px_32px_-18px_rgba(59,135,87,0.6)]"
                    : "border-2 border-brand-500 bg-brand-100 shadow-[0_0_0_1px_rgba(59,135,87,0.18),0_14px_32px_-18px_rgba(59,135,87,0.62)]"
              }`}
            >
              <div className="p-4 sm:p-5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={animal.photos[0]}
                    alt={`${animal.name} foto`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="font-display text-2xl font-bold text-slate-900">{animal.name}</h2>
                  <p className="mt-2 text-slate-700">{animal.description}</p>
                  <dl className={`mt-4 grid gap-3 rounded-2xl p-4 text-sm sm:grid-cols-2 ${idx % 3 === 1 ? "bg-slate-50" : "bg-white/90"}`}>
                    <div>
                      <dt className="font-semibold text-slate-500">Type</dt>
                      <dd className="text-slate-800">{animal.type}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">Kleur</dt>
                      <dd className="text-slate-800">{animal.color}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">Formaat</dt>
                      <dd className="text-slate-800">{animal.size}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">Kenmerken</dt>
                      <dd className="text-slate-800">{animal.traits}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">{locationLabel}</dt>
                      <dd className="text-slate-800">{animal.location}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">Datum</dt>
                      <dd className="text-slate-800">{animal.date}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && items.length > 4 && (
          <div ref={revealRef} className="mt-10 rounded-2xl border-2 border-brand-500 bg-brand-100 px-5 py-4 text-center text-sm text-brand-900 shadow-[0_0_0_1px_rgba(59,135,87,0.14),0_10px_26px_-16px_rgba(59,135,87,0.55)]">
            Scroll verder naar beneden om meer meldingen te laden.
          </div>
        )}
      </div>
    </section>
  );
}
