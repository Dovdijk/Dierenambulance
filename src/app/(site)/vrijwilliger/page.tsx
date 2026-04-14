import type { Metadata } from "next";
import { Volunteers } from "@/components/sections/Volunteers";

export const metadata: Metadata = {
  title: "Vrijwilliger",
  description: "Word vrijwilliger bij Dierenambulance Waterland.",
};

export default function VrijwilligerPage() {
  return <Volunteers />;
}
