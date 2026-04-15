import Image from "next/image";
import { siteConfig } from "@/data/site";

export function HomeFoundPets() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Gevonden huisdieren</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Herken jij deze dieren?
          </h2>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {siteConfig.foundPets.map((pet, idx) => (
            <li
              key={pet.name}
              className={`overflow-hidden rounded-3xl border shadow-card ${
                idx % 3 === 1 ? "border-slate-200 bg-white" : "border-brand-200 bg-brand-50"
              }`}
            >
              <div className="relative aspect-[16/11]">
                <Image src={pet.image} alt={pet.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-display text-2xl font-bold text-slate-900">{pet.name}</h3>
                <p className="text-sm font-semibold text-brand-700">{pet.type}</p>
                <p className="text-sm text-slate-600">
                  Gevonden in <span className="font-semibold">{pet.foundAt}</span> op{" "}
                  <span className="font-semibold">{pet.foundOn}</span>.
                </p>
                <p className="rounded-xl bg-brand-100 px-3 py-2 text-sm text-brand-900">{pet.contactText}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
