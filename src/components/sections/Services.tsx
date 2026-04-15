import Image from "next/image";
import { Section } from "./Section";

export function Services() {
  const serviceGroups = [
    {
      id: "honden",
      title: "Honden",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1400&q=80",
      description:
        "Voor zieke, gewonde, vermiste of overleden honden bieden wij eerste hulp, vervoer en ondersteuning aan eigenaar en gemeente.",
      services: [
        "Eerste hulp, stabilisatie en vervoer naar dierenarts/opvang",
        "Taxi-transport voor eigenaren zonder vervoer",
        "Registratie en begeleiding bij vermiste/gevonden honden",
        "Afscheidszorg, pootafdruk en vervoer naar crematorium",
        "48-uurs noodopvang in noodsituaties",
      ],
      pricing: [
        { label: "Hulp ter plaatse", value: "€ 34,00" },
        { label: "Enkele rit", value: "€ 45,00" },
        { label: "Retour rit", value: "€ 55,00" },
        { label: "Thuis ophalen overleden hond", value: "vanaf € 55,00" },
        { label: "Pootafdruk", value: "€ 17,50" },
      ],
    },
    {
      id: "katten",
      title: "Katten",
      image:
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=1400&q=80",
      description:
        "Wij helpen bij gewonde, zwervende of vermiste katten en ondersteunen eigenaren met vervoer, chipadvies en opvang.",
      services: [
        "Eerste hulp en vervoer van kat naar passende zorg",
        "Vermist/gevonden begeleiding en chipcontrole",
        "Chippen en registreren op afspraak",
        "Afscheidszorg en vervoer bij overleden katten",
        "48-uurs noodopvang",
      ],
      pricing: [
        { label: "Hulp ter plaatse", value: "€ 34,00" },
        { label: "Enkele rit", value: "€ 45,00" },
        { label: "Retour rit", value: "€ 55,00" },
        { label: "Chippen + registreren", value: "€ 22,50" },
        { label: "Opvang per dag", value: "€ 9,00" },
      ],
    },
    {
      id: "overige",
      title: "Overige huisdieren",
      image:
        "https://images.unsplash.com/photo-1583512603806-077998240c7a?w=1400&q=80",
      description:
        "Ook voor konijnen, knaagdieren en andere huisdieren bieden wij hulp, vervoer, vermist/gevonden ondersteuning en noodopvang.",
      services: [
        "Eerste hulp en vervoer naar dierenarts/opvang",
        "Transportdienst op afspraak",
        "Vermist/gevonden registraties en hereniging",
        "Afscheidszorg en passende afhandeling",
        "48-uurs noodopvang",
      ],
      pricing: [
        { label: "Hulp ter plaatse", value: "€ 34,00" },
        { label: "Enkele rit", value: "€ 45,00" },
        { label: "Retour rit", value: "€ 55,00" },
        { label: "Opvang per dag", value: "€ 6,00" },
        { label: "Kilometerkosten buiten Purmerend", value: "€ 0,75 p/km" },
      ],
    },
    {
      id: "wild",
      title: "In het wild levend",
      image:
        "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1400&q=80",
      description:
        "Voor in het wild levende dieren verlenen wij eerste noodhulp, tijdelijke opvang en transport in samenwerking met gespecialiseerde opvang.",
      services: [
        "Eerste hulp en stabilisatie",
        "24-uurs noodopvang en basisverzorging",
        "Transport naar Wildopvang de Bonte Piet of dierenarts",
        "Afhandeling van overleden dieren in opdracht van gemeenten",
        "Ondersteuning bij volksgezondheid (o.a. botulisme-risico's)",
      ],
      pricing: [
        { label: "Noodopvang", value: "op aanvraag" },
        { label: "Afhandeling kadavers", value: "gemeentelijke opdracht" },
        { label: "Bijzonder vervoer", value: "maatwerk" },
      ],
    },
  ];

  const extraServices = [
    {
      title: "Voorlichting op scholen",
      text: "Wij geven les en voorlichting over dierenwelzijn, omgang met dieren en respect voor natuur.",
      icon: "📚",
    },
    {
      title: "Samenwerking met hulpdiensten",
      text: "Ondersteuning bij ontruimingen, inbeslagname, brand, arrestaties en noodsituaties.",
      icon: "🚑",
    },
    {
      title: "Erkend leerbedrijf",
      text: "Stageplekken voor dier-gerelateerde opleidingen vanaf niveau 3.",
      icon: "🎓",
    },
    {
      title: "TNR-C verwilderde zwerfkatten",
      text: "Vangen, neutraliseren, terugplaatsen en monitoren in samenwerking met gemeenten en opvang.",
      icon: "🐾",
    },
  ];

  return (
    <Section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Diensten
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Wij bieden eerste hulp en vervoer aan zieke en gewonde dieren in Purmerend, Beemster,
            Zeevang, Landsmeer, Edam/Volendam en Waterland.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft sm:p-6">
          <p className="text-sm leading-relaxed text-slate-700">
            <span className="font-semibold text-brand-800">Werkgebied en basisinformatie:</span> algemene
            informatie via 0299-436084, spoed via 0299-432338. Kilometerkosten buiten Purmerend:
            € 0,75 per km.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {serviceGroups.map((group, idx) => (
            <section
              key={group.id}
              className={`overflow-hidden rounded-3xl border shadow-card ${
                idx % 3 === 1 ? "border-2 border-brand-500 bg-white" : "border-2 border-rescue-500 bg-brand-100"
              }`}
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[260px]">
                  <Image src={group.image} alt={group.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{group.title}</h3>
                  <p className="mt-3 text-slate-600">{group.description}</p>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Diensten</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {group.services.map((line) => (
                          <li key={line} className="flex items-start gap-2">
                            <span className="mt-0.5 text-brand-700">•</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Tarieven</p>
                      <ul className={`mt-3 space-y-2 rounded-2xl p-4 text-sm ${idx % 3 === 1 ? "bg-brand-50" : "bg-white/80"}`}>
                        {group.pricing.map((price) => (
                          <li key={price.label} className="flex items-center justify-between gap-3 border-b border-brand-100 pb-2 last:border-0 last:pb-0">
                            <span className="text-slate-700">{price.label}</span>
                            <span className="font-semibold text-brand-900">{price.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Overige diensten</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {extraServices.map((item, idx) => (
              <article
                key={item.title}
                className={`rounded-2xl border p-6 shadow-soft ${
                  idx % 3 === 1 ? "border-2 border-brand-500 bg-white" : "border-2 border-rescue-500 bg-brand-100"
                }`}
              >
                <p className="text-2xl" aria-hidden>
                  {item.icon}
                </p>
                <h4 className="mt-2 font-display text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
}
