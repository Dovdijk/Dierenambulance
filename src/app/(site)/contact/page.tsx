import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Telefoon, e-mail, adres en openingstijden van de dierenambulance.",
};

export default function ContactPage() {
  return <Contact />;
}
