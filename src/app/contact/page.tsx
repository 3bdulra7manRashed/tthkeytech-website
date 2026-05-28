import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = createMetadata({
  title: "تواصل معنا",
  description: "تواصل مع فريق ذكي تك — ابدأ مشروعك أو احجز استشارة مجانية.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="تواصل"
        title="لنتحدث عن مشروعك"
        subtitle="املأ النموذج أو تواصل معنا مباشرة — نرد خلال 24 ساعة."
      />
      <section className="section-padding pt-0">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
