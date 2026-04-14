import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const telHref = `tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`;
  const generalTelHref = `tel:${siteConfig.generalPhone.replace(/\s/g, "")}`;

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-slate-900">{siteConfig.name}</p>
            <p className="mt-2 max-w-sm text-sm text-slate-700">{siteConfig.tagline}</p>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <span className="font-semibold text-slate-900">Adres:</span>{" "}
                {siteConfig.address.street}, {siteConfig.address.city}
              </p>
              <p>
                <span className="font-semibold text-slate-900">E-mail:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline decoration-slate-400 hover:decoration-slate-700">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Dier in nood:</span>{" "}
                <a href={telHref} className="font-medium text-slate-900 underline decoration-slate-400 hover:decoration-slate-700">
                  {siteConfig.emergencyPhone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Algemeen:</span>{" "}
                <a href={generalTelHref} className="font-medium text-slate-900 underline decoration-slate-400 hover:decoration-slate-700">
                  {siteConfig.generalPhone}
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Snel naar
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-700 transition hover:text-slate-900 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Volg ons
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.facebook}
                className="rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-500 hover:text-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                className="rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-500 hover:text-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-500 hover:text-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {year} {siteConfig.name}.
        </div>
      </div>
    </footer>
  );
}
