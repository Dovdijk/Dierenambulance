"use client";

import { type FormEvent, useCallback, useState } from "react";
import { siteConfig } from "@/data/site";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentHint, setSentHint] = useState(false);

  const validate = useCallback(() => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Vul je naam in.";
    if (!email.trim()) next.email = "Vul je e-mailadres in.";
    else if (!emailOk(email)) next.email = "Ongeldig e-mailadres.";
    if (!subject.trim()) next.subject = "Vul een onderwerp in.";
    if (!message.trim()) next.message = "Vul je bericht in.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [name, email, subject, message]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSentHint(false);
    if (!validate()) return;

    const body = [
      `Naam: ${name.trim()}`,
      `E-mail: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`[Website] ${subject.trim()}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSentHint(true);
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/25";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border-2 border-brand-600 bg-white p-6 shadow-animal-white sm:p-8"
      noValidate
    >
      <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">Stuur een bericht</h3>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">
        Vul het formulier in; je standaard mailprogramma opent met een voorbeeldbericht. Je kunt het daar nog aanpassen.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-slate-800">
            Naam <span className="text-brand-700">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className={fieldClass}
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "contact-name-err" : undefined}
          />
          {errors.name ? (
            <p id="contact-name-err" className="mt-1.5 text-sm text-rescue-600" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-slate-800">
            E-mail <span className="text-brand-700">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={fieldClass}
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "contact-email-err" : undefined}
          />
          {errors.email ? (
            <p id="contact-email-err" className="mt-1.5 text-sm text-rescue-600" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-subject" className="text-sm font-semibold text-slate-800">
            Onderwerp <span className="text-brand-700">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(ev) => setSubject(ev.target.value)}
            className={fieldClass}
            aria-invalid={errors.subject ? "true" : undefined}
            aria-describedby={errors.subject ? "contact-subject-err" : undefined}
          />
          {errors.subject ? (
            <p id="contact-subject-err" className="mt-1.5 text-sm text-rescue-600" role="alert">
              {errors.subject}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold text-slate-800">
            Bericht <span className="text-brand-700">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
            className={`${fieldClass} min-h-[140px] resize-y`}
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={errors.message ? "contact-message-err" : undefined}
          />
          {errors.message ? (
            <p id="contact-message-err" className="mt-1.5 text-sm text-rescue-600" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:w-auto"
        >
          Verstuur via e-mail
        </button>
        {sentHint ? (
          <p className="text-center text-sm text-slate-600 sm:text-left">
            Als je mailprogramma niet opent, mail ons op{" "}
            <a className="font-medium text-brand-700 underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
