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
                idx % 3 === 1 ? "border-slate-200 bg-white" : "border-brand-300 bg-brand-100"
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
