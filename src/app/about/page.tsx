import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { AboutContent } from "@/components/about/AboutContent";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = createMetadata({
  title: "من نحن",
  description:
    "تعرّف على ذكي تك (TheKey Tech) — رؤيتنا ورسالتنا في بناء حلول رقمية ذكية تساعد الشركات على النمو.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <FinalCTA />
    </>
  );
}
