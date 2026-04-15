import Image from "next/image";
import { siteConfig } from "@/data/site";

export function HomeMissingPets() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-rescue-600">Vermiste dieren</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Help mee zoeken in de regio
          </h2>
        </div>
        <ul className="mt-10 space-y-6">
          {siteConfig.missingPets.map((pet) => (
            <li key={pet.name} className="grid gap-5 rounded-3xl border-2 border-brand-500 bg-white p-5 shadow-card md:grid-cols-[260px_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={pet.image} alt={pet.name} fill className="object-cover" sizes="260px" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  {pet.name} <span className="text-base font-semibold text-slate-500">({pet.type})</span>
                </h3>
                <p className="mt-2 text-slate-700">{pet.story}</p>
                <p className="mt-3 text-sm text-slate-600">
                  Vermist sinds <span className="font-semibold">{pet.missingSince}</span> - vermoedelijk in{" "}
                  <span className="font-semibold">{pet.suspectedArea}</span>.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
