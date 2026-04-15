import type { Metadata } from "next";
import { AnimalListings } from "@/components/animals/AnimalListings";

export const metadata: Metadata = {
  title: "Gevonden",
  description: "Overzicht van gevonden dieren in de regio.",
};

const foundAnimals = [
  {
    name: "Misty",
    type: "Kat",
    color: "Grijs met wit",
    size: "Middelgroot",
    traits: "Blauwe halsband, klein litteken rechteroor",
    location: "Purmerend Centrum",
    date: "13 april 2026",
    description:
      "Rustige poes aangetroffen bij de parkeergarage. Is sociaal naar mensen maar duidelijk op zoek naar een vertrouwde omgeving.",
    photos: [
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=1200&q=80",
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=1200&q=80",
    ],
  },
  {
    name: "Bink",
    type: "Hond",
    color: "Zwart/bruin",
    size: "Groot",
    traits: "Rode tuigriem, wit vlekje op borst",
    location: "Landsmeer - Sportpark",
    date: "11 april 2026",
    description:
      "Vriendelijke reu gevonden zonder eigenaar in de buurt. Reageert goed op commando's en loopt netjes mee aan de lijn.",
    photos: [
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=1200&q=80",
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1200&q=80",
    ],
  },
  {
    name: "Snow",
    type: "Konijn",
    color: "Wit met bruin",
    size: "Klein",
    traits: "Hangoor links, speelse sprongen",
    location: "Beemster - Middenweg",
    date: "8 april 2026",
    description:
      "Konijn zat verscholen onder een heg in een woonwijk. Lijkt tam en gewend aan menselijk contact.",
    photos: [
      "https://images.unsplash.com/photo-1602766611037-1f2f2ef8f52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?w=1200&q=80",
    ],
  },
];

export default function GevondenPage() {
  return (
    <div className="bg-white">
      <AnimalListings
        title="Gevonden dieren"
        intro="Hieronder vind je een overzicht van recent gevonden dieren. Herken je een dier? Neem direct contact op met ons team."
        items={foundAnimals}
        locationLabel="Vindplaats"
      />
    </div>
  );
}
