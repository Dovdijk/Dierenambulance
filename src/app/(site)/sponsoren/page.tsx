import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Sponsoren",
  description: "Maak kennis met de sponsoren van Dierenambulance Waterland.",
};

export default function SponsorenPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-slate-900">Onze sponsoren</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Dankzij deze partners kunnen wij dieren in nood helpen.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.sponsors.map((sponsor) => (
            <li key={sponsor.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="relative h-20">
                <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain" sizes="240px" />
              </div>
              <p className="mt-4 text-center font-medium text-slate-800">{sponsor.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
