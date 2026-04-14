import { HomeAboutCards } from "@/components/home/HomeAboutCards";
import { HomeDualCta } from "@/components/home/HomeDualCta";
import { HomeFoundPets } from "@/components/home/HomeFoundPets";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMissingPets } from "@/components/home/HomeMissingPets";
import { HomeNewsletter } from "@/components/home/HomeNewsletter";
import { HomeNews } from "@/components/home/HomeNews";
import { HomeSocial } from "@/components/home/HomeSocial";
import { HomeYearStats } from "@/components/home/HomeYearStats";
import { SponsorMarquee } from "@/components/home/SponsorMarquee";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SponsorMarquee />
      <HomeDualCta />
      <HomeAboutCards />
      <HomeFoundPets />
      <HomeMissingPets />
      <HomeYearStats />
      <HomeNews />
      <HomeSocial />
      <HomeNewsletter />
    </>
  );
}
