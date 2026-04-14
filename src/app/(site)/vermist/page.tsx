import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vermist",
  description: "Meld een vermist dier of bekijk recente meldingen.",
};

const missingAnimals = [
  "Zwarte kat met wit borstje - Overwhere, Purmerend",
  "Kleine hond (teckel) - Edam",
  "Roodborstje met pootring - Waterland",
];

export default function VermistPage() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-slate-900">Vermiste dieren</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Zie je een van onderstaande dieren? Neem direct contact met ons op.
        </p>
        <div className="mt-8 grid gap-3">
          {missingAnimals.map((item) => (
            <article key={item} className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
              {item}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
