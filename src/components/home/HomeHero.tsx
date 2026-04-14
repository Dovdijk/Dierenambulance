import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  const tel = siteConfig.emergencyPhone.replace(/\s/g, "");

  return (
    <section className="relative isolate min-h-[min(88vh,840px)] w-full overflow-hidden">
      <Image
        src={siteConfig.heroImage}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-950/80" aria-hidden />

      <div className="relative z-10 flex min-h-[min(88vh,840px)] flex-col px-4 pb-14 pt-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <Link
              href="/"
              className="relative block h-[70px] w-[70px] shrink-0 rounded-xl bg-white/95 p-1.5 shadow-lg ring-1 ring-white/20 sm:h-20 sm:w-20"
              aria-label={`${siteConfig.name} — home`}
            >
              <Image
                src={siteConfig.logo}
                alt=""
                fill
                className="object-contain p-0.5"
                sizes="80px"
                priority
              />
            </Link>

            <div className="flex flex-col items-stretch gap-3 sm:items-end">
              <div className="rounded-2xl bg-white/15 px-4 py-3 text-center shadow-lg ring-1 ring-white/25 backdrop-blur-md sm:text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                  {siteConfig.emergencyLabel}
                </p>
                <a
                  href={`tel:${tel}`}
                  className="mt-1 block font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
                >
                  {siteConfig.emergencyPhone}
                </a>
              </div>
              <Button href="/doneren" variant="donate" className="w-full min-w-[200px] sm:w-auto">
                Doneer
              </Button>
            </div>
          </div>

          <div className="mt-auto max-w-3xl pt-6">
            <p className="cta-script text-xl text-accent-500">
              Professionele vrijwilligers · Waterland
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-lg text-white/90 sm:text-xl">{siteConfig.tagline}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">
              Wij bieden eerste hulp en vervoer aan zieke en gewonde dieren in {siteConfig.region}.
              Algemene informatie? Bel {siteConfig.generalPhone}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
