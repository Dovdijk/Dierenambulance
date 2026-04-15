import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";
import { Section } from "./Section";

export function Contact() {
  const telHref = `tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`;
  const generalTelHref = `tel:${siteConfig.generalPhone.replace(/\s/g, "")}`;
  const mailHref = `mailto:${siteConfig.email}`;

  return (
    <Section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Spoed of algemene vragen — we reageren zo snel mogelijk op e-mail.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border-2 border-brand-600 bg-white p-8 shadow-animal-white">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Telefoon
              </h3>
              <a href={telHref} className="mt-1 block text-xl font-bold text-brand-700 hover:underline">
                {siteConfig.emergencyPhone} (dier in nood)
              </a>
              <a href={generalTelHref} className="mt-1 block text-lg font-medium text-slate-700 hover:underline">
                {siteConfig.generalPhone} (algemeen)
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                E-mail
              </h3>
              <a href={mailHref} className="mt-1 block text-lg font-medium text-slate-800 hover:underline">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Adres
              </h3>
              <p className="mt-1 text-slate-700">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}
                <br />
                {siteConfig.address.country}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-white bg-brand-100 p-8 shadow-animal-green">
            <h3 className="font-display text-xl font-bold text-slate-900">Openingstijden</h3>
            <ul className="mt-6 space-y-4">
              {siteConfig.openingHours.map((row) => (
                <li
                  key={row.days}
                  className="flex flex-col gap-1 border-b border-brand-100/80 pb-4 last:border-0 last:pb-0 sm:flex-row sm:justify-between"
                >
                  <span className="font-medium text-slate-800">{row.days}</span>
                  <span className="text-slate-600">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
