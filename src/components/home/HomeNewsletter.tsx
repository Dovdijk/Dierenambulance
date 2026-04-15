export function HomeNewsletter() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border-2 border-brand-500 bg-white p-8 shadow-card sm:p-10">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Blijf op de hoogte
          </h2>
          <p className="mt-3 text-slate-600">
            Meld je aan voor de nieuwsbrief en ontvang updates over ons werk en de dieren die we helpen.
          </p>
          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="newsletter-email" className="sr-only">
              E-mailadres
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="jij@voorbeeld.nl"
              className="min-h-[48px] rounded-xl border border-slate-300 px-4 outline-none ring-brand-500 focus:ring-2"
            />
            <button
              type="submit"
              className="min-h-[48px] rounded-xl bg-brand-600 px-5 font-semibold text-white transition hover:bg-brand-700"
            >
              Aanmelden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
