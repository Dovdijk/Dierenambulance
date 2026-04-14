import type { Metadata } from "next";
import { Donate } from "@/components/sections/Donate";

export const metadata: Metadata = {
  title: "Doneren",
  description: "Steun ons werk met een donatie. Elke bijdrage helpt dieren in nood.",
};

export default function DonerenPage() {
  return <Donate />;
}
