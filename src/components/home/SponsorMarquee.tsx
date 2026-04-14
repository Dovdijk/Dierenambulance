import Image from "next/image";
import { siteConfig } from "@/data/site";

export function SponsorMarquee() {
  const items = [...siteConfig.sponsors, ...siteConfig.sponsors];

  return (
    <section
      className="border-y border-slate-200/80 bg-white py-8"
      aria-label="Sponsoren"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
          Met dank aan onze partners
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16">
          {items.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              className="relative h-12 w-40 shrink-0 opacity-80 sm:h-14 sm:w-48"
            >
              <Image
                src={s.logo}
                alt={s.name}
                fill
                className="object-contain transition"
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
