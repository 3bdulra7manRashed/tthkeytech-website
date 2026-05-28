import { HeroSection } from "@/components/home/HeroSection";
import { ChallengesSection } from "@/components/home/ChallengesSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <ServicesPreview />
      <WhyUsSection />
      <FinalCTA />
    </>
  );
}
