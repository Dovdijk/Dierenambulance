import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function HomeNews() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Nieuws</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Verhalen uit de praktijk
            </h2>
          </div>
          <Link href="/nieuws" className="text-sm font-semibold text-brand-700 hover:underline">
            Bekijk alles
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {siteConfig.news.slice(0, 3).map((item, idx) => (
            <li
              key={item.title}
              className={`overflow-hidden rounded-2xl border shadow-soft ${
                idx % 3 === 1 ? "border-slate-200 bg-white" : "border-brand-300 bg-brand-100"
              }`}
            >
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.category}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.date}</p>
              <p className="mt-3 text-slate-600">{item.excerpt}</p>
              <Link href={item.href} className="mt-5 inline-block text-sm font-semibold text-brand-700 hover:underline">
                Lees meer
              </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
