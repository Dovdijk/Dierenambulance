import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5">
            <Image
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1000&q=80"
              alt="Vrijwilligers van de dierenambulance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Over ons
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{siteConfig.about.intro}</p>
            <p className="mt-4 leading-relaxed text-slate-600">{siteConfig.about.history}</p>
            <div className="mt-8 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
              <h3 className="font-semibold text-brand-900">Vrijwilligers & impact</h3>
              <p className="mt-2 text-slate-700">{siteConfig.about.volunteers}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
