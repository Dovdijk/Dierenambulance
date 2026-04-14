import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nieuwsbrief",
  description: "Meld je aan voor de nieuwsbrief van Dierenambulance Waterland.",
};

export default function NieuwsbriefPage() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
          <h1 className="font-display text-4xl font-bold text-slate-900">Nieuwsbrief</h1>
          <p className="mt-4 text-slate-600">
            Meld je hier aan voor onze nieuwsbrief en ontvang regelmatig updates over onze inzet.
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Naam
              </label>
              <input
                id="name"
                className="mt-1 min-h-[48px] w-full rounded-xl border border-slate-300 px-4 outline-none ring-brand-500 focus:ring-2"
                placeholder="Voor- en achternaam"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                E-mailadres
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 min-h-[48px] w-full rounded-xl border border-slate-300 px-4 outline-none ring-brand-500 focus:ring-2"
                placeholder="jij@voorbeeld.nl"
              />
            </div>
            <button
              type="submit"
              className="min-h-[48px] w-full rounded-xl bg-brand-600 px-5 font-semibold text-white transition hover:bg-brand-700"
            >
              Inschrijven
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
