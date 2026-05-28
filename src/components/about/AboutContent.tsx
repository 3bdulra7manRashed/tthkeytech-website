"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GradientOrb } from "@/components/shared/GradientOrb";

const sections = [
  {
    icon: Heart,
    title: "من نحن",
    content:
      "ذكي تك (TheKey Tech) شركة تقنية ناشئة متخصصة في بناء حلول رقمية ذكية. نجمع بين الخبرة التقنية والفهم العميق لاحتياجات السوق العربي لنقدّم مواقع وتطبيقات وأنظمة ذكاء اصطناعي تساعد الشركات ورواد الأعمال على النمو بكفاءة وثقة.",
  },
  {
    icon: Eye,
    title: "رؤيتنا",
    content:
      "أن نكون الشريك التقني الأول للشركات الطموحة في المنطقة — نُمكّنها من بناء حضور رقمي ذكي يحقق نتائج حقيقية ويُبقيها في مقدمة المنافسة.",
  },
  {
    icon: Target,
    title: "رسالتنا",
    content:
      "تقديم حلول رقمية ذكية تجمع بين السرعة والجودة والابتكار — نركّز على ما يهم عملاءنا: نتائج ملموسة، تجربة استثنائية، وشراكة طويلة الأمد.",
  },
];

export function AboutContent() {
  return (
    <div className="relative">
      <GradientOrb className="right-0 top-20" color="primary" size="lg" />
      <GradientOrb className="left-0 bottom-40" color="pink" size="md" />

      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="من نحن"
            title="نبني المستقبل الرقمي بذكاء"
            subtitle="فريق شغوف بالتقنية والتصميم — نؤمن أن كل مشروع يستحق حلاً مخصصاً وليس قالباً جاهزاً."
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-4xl space-y-8">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.12}>
              <motion.article
                whileHover={{ x: -4 }}
                className="glass-card flex flex-col gap-6 p-8 sm:flex-row sm:items-start sm:p-10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/30 to-brand-purple/30">
                  <section.icon className="text-brand-light" size={28} />
                </div>
                <div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground">{section.title}</h2>
                  <p className="text-lg leading-relaxed text-theme-muted">{section.content}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/10 to-brand-purple/5 p-10 text-center sm:p-14">
              <p className="text-2xl font-bold leading-relaxed text-foreground sm:text-3xl">
                &ldquo;الحلول الذكية تبدأ بفهم حقيقي — وتنتهي بنتائج يمكنك قياسها.&rdquo;
              </p>
              <p className="mt-4 text-brand-light">— فريق ذكي تك</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
