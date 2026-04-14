import type { Metadata } from "next";
import { Volunteers } from "@/components/sections/Volunteers";

export const metadata: Metadata = {
  title: "Vrijwilligers",
  description: "Word vrijwilliger bij onze dierenambulance en maak het verschil.",
};

export default function VrijwilligersPage() {
  return <Volunteers />;
}
