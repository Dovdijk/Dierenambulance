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
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Reveal>
        <SponsorMarquee />
      </Reveal>
      <Reveal delay={80}>
        <HomeDualCta />
      </Reveal>
      <Reveal delay={120}>
        <HomeAboutCards />
      </Reveal>
      <Reveal delay={80}>
        <HomeFoundPets />
      </Reveal>
      <Reveal delay={120}>
        <HomeMissingPets />
      </Reveal>
      <Reveal delay={80}>
        <HomeYearStats />
      </Reveal>
      <Reveal delay={120}>
        <HomeNews />
      </Reveal>
      <Reveal delay={80}>
        <HomeSocial />
      </Reveal>
      <Reveal delay={120}>
        <HomeNewsletter />
      </Reveal>
    </>
  );
}
