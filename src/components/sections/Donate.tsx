import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Section } from "./Section";

export function Donate() {
  return (
    <Section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-white p-8 shadow-card sm:p-12">
          <h2 className="text-center font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Steun ons werk
          </h2>
          <p className="mt-4 text-center text-lg leading-relaxed text-slate-600">
            Donaties betalen brandstof, medische benodigdheden en onderhoud aan onze voertuigen.
            Zonder jouw bijdrage kunnen we niet 24/7 bereikbaar blijven voor dieren in nood.
          </p>
          <p className="mt-4 text-center text-slate-600">
            Elk bedrag helpt — eenmalig of periodiek. {siteConfig.name} heeft ANBI-status
            (aftrekbaar volgens geldende regels).
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary" className="min-w-[220px]">
              Neem contact op om te doneren
            </Button>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Liever direct overmaken? Vraag via contact naar ons rekeningnummer en vermelding.
          </p>
        </div>
      </div>
    </Section>
  );
}
