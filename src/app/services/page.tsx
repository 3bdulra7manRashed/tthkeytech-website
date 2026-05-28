import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/PageHero";
import { WebDevSection } from "@/components/services/WebDevSection";
import { MobileAppsSection } from "@/components/services/MobileAppsSection";
import { AISection } from "@/components/services/AISection";
import { SmartChoiceSection } from "@/components/services/SmartChoiceSection";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = createMetadata({
  title: "خدماتنا",
  description:
    "تطوير مواقع إلكترونية، تطبيقات موبايل، حلول الذكاء الاصطناعي، والهوية البصرية — حلول رقمية ذكية من ذكي تك.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="خدماتنا"
        title="حلول رقمية ذكية لكل احتياج"
        subtitle="من المواقع إلى التطبيقات وحتى الذكاء الاصطناعي — نبني ما ينمو مع أعمالك."
      />
      <WebDevSection />
      <MobileAppsSection />
      <AISection />
      <SmartChoiceSection />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
