import Image from "next/image";
import { siteConfig } from "@/data/site";

export function HomeAboutCards() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Over ons
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Een korte blik op wie we zijn — van het eerste idee tot het team van vandaag.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {siteConfig.homeAboutCards.map((card, idx) => (
            <li
              key={card.title}
              className={`flex flex-col overflow-hidden rounded-2xl border shadow-soft ${
                idx % 3 === 1 ? "border-2 border-brand-500 bg-white" : "border-2 border-rescue-500 bg-brand-100"
              }`}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{card.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
