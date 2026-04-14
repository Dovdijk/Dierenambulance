"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) => {
    const active = isActive(href);
    return [
      "shrink-0 rounded-full px-2.5 py-2 text-sm font-medium transition whitespace-nowrap",
      active
        ? "bg-slate-900 text-white"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    ].join(" ");
  };

  const mobileLinkClass = (href: string) => {
    const active = isActive(href);
    return [
      "rounded-xl px-3 py-3 text-base font-medium",
      active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100",
    ].join(" ");
  };

  const tel = `tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex min-w-0 max-w-[min(100%,18rem)] items-center gap-2 sm:max-w-none sm:gap-3">
          <span className="relative block h-12 w-12 shrink-0 sm:h-[70px] sm:w-[70px]">
            <Image
              src={siteConfig.logo}
              alt=""
              fill
              className="object-contain"
              sizes="70px"
              priority
            />
          </span>
          <span className="truncate font-display text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
          <nav
            className="hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto pr-1 lg:flex"
            aria-label="Hoofdmenu"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/doneren"
            className="donate-attention hidden shrink-0 rounded-full bg-rescue-500 px-4 py-2.5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-rescue-600 md:inline-flex"
          >
            Doneer
          </Link>

          <a
            href={tel}
            className="hidden shrink-0 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-soft transition hover:bg-brand-700 xl:inline-flex"
          >
            {siteConfig.emergencyPhone}
          </a>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl border border-slate-300 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobiel menu">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkClass(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/doneren"
              className="donate-attention mt-2 rounded-xl bg-rescue-500 px-4 py-3 text-center font-bold text-white transition-colors hover:bg-rescue-600"
              onClick={() => setOpen(false)}
            >
              Doneer
            </Link>
            <a href={tel} className="mt-2 rounded-xl bg-slate-900 px-4 py-3 text-center font-bold text-white">
              Bel {siteConfig.emergencyPhone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
