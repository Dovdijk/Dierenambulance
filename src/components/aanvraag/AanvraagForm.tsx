"use client";

import { useState, type FormEvent } from "react";

const animalTypes = [
  { value: "", label: "Kies een type" },
  { value: "hond", label: "Hond" },
  { value: "kat", label: "Kat" },
  { value: "vogel", label: "Vogel" },
  { value: "overig", label: "Overig" },
] as const;

type Field = "naam" | "telefoon" | "email" | "dierType" | "beschrijving" | "locatie";

export function AanvraagForm() {
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [dierType, setDierType] = useState("");
  const [beschrijving, setBeschrijving] = useState("");
  const [locatie, setLocatie] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: Partial<Record<Field, string>> = {};
    if (!naam.trim()) next.naam = "Vul je naam in.";
    if (!telefoon.trim()) next.telefoon = "Vul je telefoonnummer in.";
    if (!email.trim()) next.email = "Vul je e-mailadres in.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Vul een geldig e-mailadres in.";
    if (!dierType) next.dierType = "Kies een type dier.";
    if (!beschrijving.trim()) next.beschrijving = "Beschrijf de situatie.";
    if (!locatie.trim()) next.locatie = "Vul de locatie in.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const inputClass =
    "mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30";

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center"
        role="status"
      >
        <p className="font-display text-xl font-bold text-emerald-900">Bedankt voor je melding</p>
        <p className="mt-3 text-slate-700">
          We hebben je aanvraag ontvangen. Dit is een demoformulier — in productie koppel je dit aan e-mail of
          een backend.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="naam" className="text-sm font-semibold text-slate-800">
          Naam <span className="text-red-600">*</span>
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          autoComplete="name"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.naam}
          aria-describedby={errors.naam ? "naam-error" : undefined}
        />
        {errors.naam && (
          <p id="naam-error" className="mt-1 text-sm text-red-600">
            {errors.naam}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telefoon" className="text-sm font-semibold text-slate-800">
          Telefoonnummer <span className="text-red-600">*</span>
        </label>
        <input
          id="telefoon"
          name="telefoon"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={telefoon}
          onChange={(e) => setTelefoon(e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.telefoon}
          aria-describedby={errors.telefoon ? "telefoon-error" : undefined}
        />
        {errors.telefoon && (
          <p id="telefoon-error" className="mt-1 text-sm text-red-600">
            {errors.telefoon}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-slate-800">
          E-mail <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="dierType" className="text-sm font-semibold text-slate-800">
          Type dier <span className="text-red-600">*</span>
        </label>
        <select
          id="dierType"
          name="dierType"
          value={dierType}
          onChange={(e) => setDierType(e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.dierType}
          aria-describedby={errors.dierType ? "dierType-error" : undefined}
        >
          {animalTypes.map((o) => (
            <option key={o.value || "empty"} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {errors.dierType && (
          <p id="dierType-error" className="mt-1 text-sm text-red-600">
            {errors.dierType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="beschrijving" className="text-sm font-semibold text-slate-800">
          Beschrijving situatie <span className="text-red-600">*</span>
        </label>
        <textarea
          id="beschrijving"
          name="beschrijving"
          rows={5}
          value={beschrijving}
          onChange={(e) => setBeschrijving(e.target.value)}
          className={`${inputClass} resize-y min-h-[120px]`}
          aria-invalid={!!errors.beschrijving}
          aria-describedby={errors.beschrijving ? "beschrijving-error" : undefined}
        />
        {errors.beschrijving && (
          <p id="beschrijving-error" className="mt-1 text-sm text-red-600">
            {errors.beschrijving}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="locatie" className="text-sm font-semibold text-slate-800">
          Locatie <span className="text-red-600">*</span>
        </label>
        <input
          id="locatie"
          name="locatie"
          type="text"
          autoComplete="street-address"
          value={locatie}
          onChange={(e) => setLocatie(e.target.value)}
          className={inputClass}
          placeholder="Adres of beschrijving van de plek"
          aria-invalid={!!errors.locatie}
          aria-describedby={errors.locatie ? "locatie-error" : undefined}
        />
        {errors.locatie && (
          <p id="locatie-error" className="mt-1 text-sm text-red-600">
            {errors.locatie}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:w-auto"
        >
          Verstuur aanvraag
        </button>
      </div>
    </form>
  );
}
