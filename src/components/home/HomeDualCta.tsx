import { Button } from "@/components/ui/Button";

export function HomeDualCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold text-slate-900">Vrijwilliger worden</h2>
            <p className="mt-3 flex-1 text-slate-600">
              Draag direct bij aan hulp voor dieren: als chauffeur, bij meldingen of achter de schermen.
              We leiden je op en je werkt in een hecht team.
            </p>
            <div className="mt-8">
              <Button href="/vrijwilliger" variant="primary" className="w-full sm:w-auto">
                Word vrijwilliger
              </Button>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold text-slate-900">Hulp aanvragen</h2>
            <p className="mt-3 flex-1 text-slate-600">
              Meld een situatie met een dier in nood. Vul het formulier in — we nemen zo snel mogelijk
              contact met je op.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                Neem contact op
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
