import Link from "next/link";
import { siteConfig } from "@/data/site";

export function HomeSocial() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Volg onze verhalen op social media
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            De mooiste dierenverhalen, handige tips en updates uit het veld.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {siteConfig.instaPosts.map((post, idx) => (
            <li
              key={post.label}
              className={`rounded-xl border p-4 ${
                idx % 3 === 1
                  ? "border-2 border-brand-500 bg-white shadow-[0_0_0_1px_rgba(59,135,87,0.08),0_12px_30px_-18px_rgba(59,135,87,0.55)]"
                  : idx % 3 === 0
                    ? "border-2 border-white bg-brand-100 shadow-[0_0_0_1px_rgba(59,135,87,0.16),0_14px_32px_-18px_rgba(59,135,87,0.6)]"
                    : "border-2 border-brand-500 bg-brand-100 shadow-[0_0_0_1px_rgba(59,135,87,0.18),0_14px_32px_-18px_rgba(59,135,87,0.62)]"
              }`}
            >
              <Link href={post.href} className="font-medium text-slate-800 hover:text-brand-700 hover:underline">
                {post.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
