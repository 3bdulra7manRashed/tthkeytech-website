import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = createMetadata({
  title: "أعمالنا",
  description: "استعرض مشاريع ذكي تك — تحديات، حلول، ونتائج حقيقية لعملائنا.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PortfolioGrid />
      <FinalCTA />
    </>
  );
}
