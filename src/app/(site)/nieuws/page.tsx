import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Nieuws",
  description: "Nieuws en blogs van Dierenambulance Waterland.",
};

export default function NieuwsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-slate-900">Nieuws</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Updates, praktijkverhalen en tips rondom dieren in nood.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.news.map((item, idx) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-3xl border shadow-card ${
                idx % 3 === 1 ? "border-slate-200 bg-white" : "border-brand-300 bg-brand-100"
              }`}
            >
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.category}</p>
                <h2 className="mt-2 font-display text-xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{item.date}</p>
                <p className="mt-3 text-slate-600">{item.excerpt}</p>
                <Link href={item.href} className="mt-4 inline-block font-semibold text-brand-700 hover:underline">
                  Lees meer
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
