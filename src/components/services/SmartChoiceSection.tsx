"use client";

import { Globe, Smartphone, Brain } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const choices = [
  {
    icon: Globe,
    title: "موقع إلكتروني",
    outcome: "حضور رقمي احترافي",
    description: "مثالي لبناء ثقة العملاء وعرض خدماتك بوضوح.",
  },
  {
    icon: Smartphone,
    title: "تطبيق موبايل",
    outcome: "تفاعل أكبر مع العملاء",
    description: "الأفضل عندما تحتاج تواصلاً مباشراً وتجربة يومية.",
  },
  {
    icon: Brain,
    title: "حلول ذكية",
    outcome: "كفاءة وتوفير للوقت",
    description: "مثالي لأتمتة العمليات وتحسين الإنتاجية.",
  },
];

export function SmartChoiceSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="اختيار ذكي"
          title="أي الحلول تناسب احتياجاتك؟"
          subtitle="كل مشروع مختلف — نساعدك على اختيار الحل الأنسب لأهدافك."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {choices.map((choice, i) => (
            <Reveal key={choice.title} delay={i * 0.1}>
              <div className="glass-card-hover h-full p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/20">
                  <choice.icon className="text-brand-light" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{choice.title}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-pink">→ {choice.outcome}</p>
                <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                  {choice.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
