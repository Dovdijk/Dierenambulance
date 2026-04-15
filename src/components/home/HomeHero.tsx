import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  const hasVideo = Boolean(siteConfig.heroVideo);

  return (
    <section className="relative isolate min-h-[68vh] overflow-hidden sm:min-h-[76vh]">
      {hasVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src={siteConfig.heroVideo} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={siteConfig.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/38 to-black/52" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-6xl items-end px-4 pb-10 pt-24 sm:min-h-[76vh] sm:px-6 sm:pb-14">
        <div className="max-w-2xl rounded-2xl border border-white/20 bg-black/20 p-5 text-white backdrop-blur-[2px] sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">Dierenambulance Waterland</p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
            Hulp voor dieren in nood
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
            Wij bieden eerste hulp en vervoer aan zieke en gewonde dieren in {siteConfig.region}.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
              className="inline-flex min-h-[46px] items-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Dier in nood? {siteConfig.emergencyPhone}
            </a>
            <Button href="/doneren" variant="donate" className="min-h-[46px]">
              Doneer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
