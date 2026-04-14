import { Button } from "@/components/ui/Button";
import { Section } from "./Section";

export function Volunteers() {
  return (
    <Section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 text-center shadow-card sm:px-12 sm:py-16">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Word vrijwilliger
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100">
            Maak het verschil voor dieren in jouw omgeving. We zoeken chauffeurs, administratieve
            ondersteuners en mensen die mee willen op pad voor vangacties — met training en begeleiding
            op maat.
          </p>
          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left text-brand-50 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-brand-200" aria-hidden>
                ✓
              </span>
              <span>Meaningvol werk in een betrokken team</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-brand-200" aria-hidden>
                ✓
              </span>
              <span>Flexibele inzet — kies wat bij je past</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-brand-200" aria-hidden>
                ✓
              </span>
              <span>Interne cursussen eerste hulp bij dieren</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-brand-200" aria-hidden>
                ✓
              </span>
              <span>Reiskostenvergoeding waar van toepassing</span>
            </li>
          </ul>
          <div className="mt-10">
            <Button href="/contact" variant="white" className="min-w-[200px]">
              Meld je aan via contact
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
