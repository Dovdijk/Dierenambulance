import type { Metadata } from "next";
import { AnimalListings } from "@/components/animals/AnimalListings";

export const metadata: Metadata = {
  title: "Vermist",
  description: "Meld een vermist dier of bekijk recente meldingen.",
};

const missingAnimals = [
  {
    name: "Luna",
    type: "Kat",
    color: "Zwart met wit borstje",
    size: "Klein",
    traits: "Witte voorpoot, groene ogen, miauwt zacht",
    location: "Purmerend - Overwhere",
    date: "Vermist sinds 10 april 2026",
    description:
      "Luna is gewend buiten te lopen en keert normaal dezelfde avond terug. Mogelijk geschrokken van werkzaamheden in de buurt.",
    photos: [
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=1200&q=80",
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=1200&q=80",
    ],
  },
  {
    name: "Max",
    type: "Hond",
    color: "Lichtbruin",
    size: "Klein",
    traits: "Blauwe halsband, kort staartje",
    location: "Edam - Singelwijk",
    date: "Vermist sinds 7 april 2026",
    description:
      "Max is een jonge teckel die snel contact zoekt met mensen. Laatst gezien bij de dijk richting Volendam.",
    photos: [
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200&q=80",
      "https://images.unsplash.com/photo-1593134257782-e89567b7718a?w=1200&q=80",
    ],
  },
  {
    name: "Rio",
    type: "Vogel",
    color: "Groen/geel",
    size: "Klein",
    traits: "Blauw vlekje bij oog, pootring links",
    location: "Waterland - Broek in Waterland",
    date: "Vermist sinds 4 april 2026",
    description:
      "Rio is een tamme parkiet en reageert vaak op fluitgeluiden. Kan op balkons of in bomen in woonwijken neerstrijken.",
    photos: [
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&q=80",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200&q=80",
    ],
  },
  {
    name: "Puck",
    type: "Konijn",
    color: "Bruin met witte neus",
    size: "Klein",
    traits: "Hangoor rechts, nieuwsgierig gedrag",
    location: "Landsmeer - Dorpsstraat",
    date: "Vermist sinds 2 april 2026",
    description:
      "Puck glipte uit de ren tijdens tuinwerkzaamheden en is sindsdien niet meer gezien.",
    photos: [
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1200&q=80",
      "https://images.unsplash.com/photo-1591382386627-349b692688ff?w=1200&q=80",
    ],
  },
  {
    name: "Mango",
    type: "Kat",
    color: "Rood/oranje",
    size: "Middelgroot",
    traits: "Wit kinvlekje, draagt zwarte band",
    location: "Beemster - Rijperweg",
    date: "Vermist sinds 31 maart 2026",
    description:
      "Mango komt normaal meerdere keren per dag thuis. Vermoedelijk geschrokken door verkeer.",
    photos: [
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1200&q=80",
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=1200&q=80",
    ],
  },
  {
    name: "Sky",
    type: "Vogel",
    color: "Blauw",
    size: "Klein",
    traits: "Witte koptekening, reageert op fluiten",
    location: "Volendam - Oude Kom",
    date: "Vermist sinds 29 maart 2026",
    description:
      "Sky vloog weg toen de deur openstond. Kan op daken of balkonranden gaan zitten.",
    photos: [
      "https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?w=1200&q=80",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=80",
    ],
  },
];

export default function VermistPage() {
  return (
    <div className="bg-slate-50">
      <AnimalListings
        title="Vermiste dieren"
        intro="Zie je een van onderstaande dieren? Neem direct contact met ons op zodat we snel kunnen helpen bij hereniging."
        items={missingAnimals}
        locationLabel="Laatst gezien"
      />
    </div>
  );
}
