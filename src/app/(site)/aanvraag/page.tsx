import type { Metadata } from "next";
import { AanvraagForm } from "@/components/aanvraag/AanvraagForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Aanvraag",
  description: "Dien een hulpvraag in voor een dier in nood in Waterland.",
};

export default function AanvraagPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Hulp aanvragen
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Vul het formulier in. Bij spoed bel je altijd direct{" "}
          <a href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`} className="font-semibold text-emerald-700 underline">
            {siteConfig.emergencyPhone}
          </a>
          .
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-10">
          <AanvraagForm />
        </div>
      </div>
    </div>
  );
}
