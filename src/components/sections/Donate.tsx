import { DonateForm } from "@/components/donate/DonateForm";
import { siteConfig } from "@/data/site";
import { Section } from "./Section";

export function Donate() {
  return (
    <Section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Steun ons werk</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Donaties betalen brandstof, medische benodigdheden en onderhoud aan onze voertuigen. Zonder jouw bijdrage
            kunnen we niet 24/7 bereikbaar blijven voor dieren in nood.
          </p>
          <p className="mt-4 text-slate-600">
            Elk bedrag helpt — eenmalig of periodiek. {siteConfig.name} heeft ANBI-status (aftrekbaar volgens geldende
            regels).
          </p>
        </div>
        <div className="mt-10">
          <DonateForm />
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-500">
          Liever direct overmaken? Neem contact op voor rekeningnummer en vermelding:{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-brand-700 underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
