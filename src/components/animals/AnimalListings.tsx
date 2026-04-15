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
          {visibleItems.map((animal, idx) => {
            const greenSurface = idx % 2 === 1;
            return (
            <article
              key={animal.name}
              className={[
                "relative overflow-hidden rounded-3xl border-2 transition-[transform,box-shadow] duration-300 ease-out will-change-transform",
                "motion-safe:hover:scale-[1.02] motion-safe:hover:z-10 motion-reduce:hover:scale-100",
                greenSurface
                  ? "border-white bg-brand-100 shadow-animal-green motion-safe:hover:shadow-animal-green"
                  : "border-brand-600 bg-white shadow-animal-white motion-safe:hover:shadow-[0_6px_28px_-4px_rgb(15_23_42/0.1),0_18px_48px_-18px_rgb(15_23_42/0.1),0_0_44px_-8px_rgb(59_135_87/0.28)]",
              ].join(" ")}
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
                  <dl className={`mt-4 grid gap-3 rounded-2xl p-4 text-sm sm:grid-cols-2 ${greenSurface ? "bg-white/90" : "bg-slate-50"}`}>
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
            );
          })}
        </div>

        {!showAll && items.length > 4 && (
          <div ref={revealRef} className="mt-10 rounded-3xl border-2 border-white bg-brand-100 px-5 py-4 text-center text-sm text-brand-900 shadow-animal-green">
            Scroll verder naar beneden om meer meldingen te laden.
          </div>
        )}
      </div>
    </section>
  );
}
