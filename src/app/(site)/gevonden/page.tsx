import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gevonden",
  description: "Overzicht van gevonden dieren in de regio.",
};

const foundAnimals = [
  "Grijze kat met blauwe ogen - Purmerend Centrum",
  "Jonge duif met vleugelblessure - Beemster",
  "Konijn wit/bruin - Landsmeer",
];

export default function GevondenPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-slate-900">Gevonden dieren</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Herken je een dier? Neem direct contact op met ons team.
        </p>
        <div className="mt-8 grid gap-3">
          {foundAnimals.map((item) => (
            <article key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              {item}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
