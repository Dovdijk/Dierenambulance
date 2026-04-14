"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

type AmountPreset = 5 | 10 | 20 | "other";

const FEE = 0.29;

function formatMoney(n: number) {
  return n.toLocaleString("nl-NL", { style: "currency", currency: "EUR" });
}

export function DonateForm() {
  const [preset, setPreset] = useState<AmountPreset>(10);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [coverFee, setCoverFee] = useState(false);

  const baseAmount = useMemo(() => {
    if (preset === "other") {
      const v = parseFloat(customAmount.replace(",", "."));
      return Number.isFinite(v) && v > 0 ? v : 0;
    }
    return preset;
  }, [preset, customAmount]);

  const totalAmount = useMemo(() => {
    if (baseAmount <= 0) return 0;
    if (frequency === "once" && coverFee) return Math.round((baseAmount + FEE) * 100) / 100;
    return baseAmount;
  }, [baseAmount, frequency, coverFee]);

  const submit = () => {
    if (baseAmount <= 0) return;
    const lines = [
      `Donatie Dierenambulance Waterland`,
      ``,
      `Bedrag: ${formatMoney(baseAmount)}`,
      `Frequentie: ${frequency === "once" ? "Eenmalig" : "Maandelijks"}`,
      ...(frequency === "once" && coverFee
        ? [`Transactiekosten vergoed: ja (+ ${formatMoney(FEE)})`, `Totaal: ${formatMoney(totalAmount)}`]
        : []),
      ...(frequency === "monthly" ? [`Let op: voor maandelijks doneren volgt bevestiging via de stichting.`] : []),
      ``,
      `Ik wil graag verder met deze donatie. Kunt u mij de betaalinstructies sturen?`,
    ];
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent("Donatie — Dierenambulance Waterland");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-brand-100 bg-white p-8 shadow-card sm:p-10">
      <h2 className="text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">Ja, ik geef</h2>
      <p className="mt-2 text-center text-sm text-slate-600">… om de dieren in regio Waterland te helpen</p>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-slate-800">Donatiebedrag</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {([5, 10, 20] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPreset(n)}
              className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-semibold transition ${
                preset === n
                  ? "bg-brand-600 text-white shadow-soft"
                  : "border border-slate-300 bg-white text-slate-800 hover:border-brand-400"
              }`}
            >
              € {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPreset("other")}
            className={`min-h-[44px] rounded-xl px-4 py-2 text-sm font-semibold transition ${
              preset === "other"
                ? "bg-brand-600 text-white shadow-soft"
                : "border border-slate-300 bg-white text-slate-800 hover:border-brand-400"
            }`}
          >
            Anders
          </button>
        </div>
        {preset === "other" && (
          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-700">Eigen bedrag (€)</span>
            <input
              type="text"
              inputMode="decimal"
              placeholder="bijv. 15,50"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="mt-1 min-h-[48px] w-full rounded-xl border border-slate-300 px-4 outline-none ring-brand-500 focus:ring-2"
            />
          </label>
        )}
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-slate-800">Eenmalig of maandelijks</legend>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50">
            <input
              type="radio"
              name="frequency"
              checked={frequency === "once"}
              onChange={() => setFrequency("once")}
              className="h-4 w-4 accent-brand-600"
            />
            <span className="font-medium text-slate-800">Eenmalig</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50">
            <input
              type="radio"
              name="frequency"
              checked={frequency === "monthly"}
              onChange={() => {
                setFrequency("monthly");
                setCoverFee(false);
              }}
              className="h-4 w-4 accent-brand-600"
            />
            <span className="font-medium text-slate-800">Maandelijks</span>
          </label>
        </div>
      </fieldset>

      {frequency === "once" && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={coverFee}
              onChange={(e) => setCoverFee(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-rescue-500"
            />
            <span className="text-sm text-slate-700">
              Wilt u het bedrag met <strong>{formatMoney(FEE)}</strong> verhogen om onze transactiekosten te vergoeden?
            </span>
          </label>
        </div>
      )}

      <p className="mt-6 text-center text-lg font-bold text-brand-800">
        {baseAmount > 0 ? (
          <>
            Totaal: <span className="tabular-nums">{formatMoney(totalAmount)}</span>
            {frequency === "once" && coverFee && (
              <span className="mt-1 block text-sm font-normal text-slate-600">
                (inclusief vergoeding transactiekosten)
              </span>
            )}
          </>
        ) : (
          <span className="text-base font-normal text-slate-500">Kies een bedrag om verder te gaan</span>
        )}
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <Button type="button" onClick={submit} variant="donate" className="w-full" disabled={baseAmount <= 0}>
          Verstuur donatieverzoek per e-mail
        </Button>
        <p className="text-center text-xs text-slate-500">
          U opent uw e-mailapp met een vooringevulde boodschap. De stichting neemt contact op voor de definitieve
          betaling (bijv. iDEAL of overschrijving).
        </p>
      </div>
    </div>
  );
}
