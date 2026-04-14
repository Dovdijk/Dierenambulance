import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Lees wie wij zijn, onze geschiedenis en de rol van vrijwilligers.",
};

export default function OverOnsPage() {
  return <About />;
}
