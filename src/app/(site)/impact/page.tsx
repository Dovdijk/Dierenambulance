import type { Metadata } from "next";
import { ImpactStats } from "@/components/sections/ImpactStats";

export const metadata: Metadata = {
  title: "Impact",
  description: "Bekijk hoeveel dieren wij hebben geholpen.",
};

export default function ImpactPage() {
  return <ImpactStats />;
}
