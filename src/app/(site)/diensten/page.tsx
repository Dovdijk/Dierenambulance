import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Hulp voor honden, katten, overige huisdieren en wilde dieren.",
};

export default function DienstenPage() {
  return <Services />;
}
