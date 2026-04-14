import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  const tel = siteConfig.emergencyPhone.replace(/\s/g, "");
  const generalTel = siteConfig.generalPhone.replace(/\s/g, "");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-100/80 via-white to-white pb-12 pt-6 sm:pb-16 sm:pt-8">
      <div
        className="pointer-events-none absolute -left-16 top-24 h-40 w-40 rounded-full bg-accent-500/35 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-rescue-500/20 blur-xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative">
            <div
              className="pointer-events-none absolute -right-6 -top-4 hidden h-16 w-16 rounded-2xl bg-accent-500/90 sm:block sm:rotate-12"
              aria-hidden
            />
            <div className="relative rounded-[2rem] bg-brand-600 px-6 py-8 text-white shadow-card sm:px-9 sm:py-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <Link
                  href="/"
                  className="relative block h-14 w-14 shrink-0 rounded-2xl bg-white p-1.5 shadow-lg ring-2 ring-white/40 sm:h-[70px] sm:w-[70px]"
                  aria-label={`${siteConfig.name} — home`}
                >
                  <Image
                    src={siteConfig.logo}
                    alt=""
                    fill
                    className="object-contain p-0.5"
                    sizes="70px"
                    priority
                  />
                </Link>
                <Button href="/doneren" variant="donate" className="shrink-0 shadow-lg">
                  Doneer
                </Button>
              </div>

              <p className="cta-script mt-5 text-2xl text-accent-500 drop-shadow-sm sm:text-3xl">Welkom</p>
              <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
                {siteConfig.name}
              </h1>
              <p className="mt-3 max-w-xl text-base text-white/95 sm:text-lg">{siteConfig.tagline}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                Wij bieden eerste hulp en vervoer aan zieke en gewonde dieren in gemeenten{" "}
                {siteConfig.region}.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${tel}`}
                  className="inline-flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-2xl bg-white px-5 py-3 text-center shadow-soft transition hover:bg-brand-50 sm:items-start sm:text-left"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-600">Dier in nood?</span>
                  <span className="font-display text-xl font-bold tabular-nums text-brand-800 sm:text-2xl">
                    {siteConfig.emergencyPhone}
                  </span>
                </a>
                <a
                  href={`tel:${generalTel}`}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-white/70 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Algemeen: <span className="ml-1 tabular-nums font-bold">{siteConfig.generalPhone}</span>
                </a>
              </div>

              <p className="mt-6 text-sm font-medium text-white/85">
                Elke dag staan vrijwilligers voor je klaar in heel Waterland.
              </p>
            </div>
          </div>

          <div className="relative lg:pl-2">
            <div
              className="absolute -left-4 top-1/2 z-0 hidden h-[85%] w-[85%] -translate-y-1/2 rounded-[2rem] bg-accent-500/25 sm:block"
              style={{ transform: "translateY(-50%) rotate(-4deg)" }}
              aria-hidden
            />
            <div className="relative z-10 rotate-[1.5deg] overflow-hidden rounded-[2rem] border-4 border-white shadow-card ring-1 ring-slate-200/80 transition duration-300 hover:rotate-0 sm:rotate-2">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <Image
                  src={siteConfig.heroImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
            <p className="relative z-10 mt-3 text-center text-sm font-medium text-slate-500 sm:text-left">
              Samen voor dieren in onze regio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
