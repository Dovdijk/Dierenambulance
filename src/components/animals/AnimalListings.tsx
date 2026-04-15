import Image from "next/image";

type Animal = {
  name: string;
  type: string;
  color: string;
  size: string;
  traits: string;
  location: string;
  date: string;
  description: string;
  photos: string[];
};

type Props = {
  title: string;
  intro: string;
  items: Animal[];
  locationLabel: string;
};

export function AnimalListings({ title, intro, items, locationLabel }: Props) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-slate-900">{title}</h1>
          <p className="mt-3 text-lg text-slate-600">{intro}</p>
        </div>

        <div className="mt-10 space-y-10">
          {items.map((animal, idx) => (
            <article
              key={animal.name}
              className={`overflow-hidden rounded-3xl border shadow-card ${
                idx % 3 === 1 ? "border-slate-200 bg-white" : "border-brand-200 bg-brand-50"
              }`}
            >
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                  {animal.photos.map((photo, index) => (
                    <div key={`${animal.name}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={photo}
                        alt={`${animal.name} foto ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-200 p-6 lg:border-l lg:border-t-0 sm:p-8">
                  <h2 className="font-display text-2xl font-bold text-slate-900">{animal.name}</h2>
                  <p className="mt-2 text-slate-700">{animal.description}</p>
                  <dl className={`mt-6 grid gap-3 rounded-2xl p-4 text-sm sm:grid-cols-2 ${idx % 3 === 1 ? "bg-slate-50" : "bg-white/80"}`}>
                    <div>
                      <dt className="font-semibold text-slate-500">Type</dt>
                      <dd className="text-slate-800">{animal.type}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">Kleur</dt>
                      <dd className="text-slate-800">{animal.color}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">Formaat</dt>
                      <dd className="text-slate-800">{animal.size}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">Kenmerken</dt>
                      <dd className="text-slate-800">{animal.traits}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">{locationLabel}</dt>
                      <dd className="text-slate-800">{animal.location}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-500">Datum</dt>
                      <dd className="text-slate-800">{animal.date}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
