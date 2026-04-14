import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Section } from "./Section";

export function Services() {
  return (
    <Section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Diensten
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Voor elke diersoort bieden we gerichte hulp: eerste hulp, veilig vervoer en waar nodig
            doorverwijzing naar opvang of specialist.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {siteConfig.services.map((service) => (
            <li
              key={service.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5 transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.short}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-700">
                  Wat we doen
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
                  {service.whatWeDo.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
