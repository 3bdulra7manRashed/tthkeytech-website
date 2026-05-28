"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, Palette, ArrowLeft } from "lucide-react";
import { homeServices } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  brain: Brain,
  palette: Palette,
};

export function ServicesPreview() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 mesh-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          badge="خدماتنا"
          title="حلول ذكية لكل مرحلة من نمو أعمالك"
          subtitle="نبني تجارب رقمية سريعة وموثوقة تساعدك على التوسع بثقة."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <Link href={service.href}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="glass-card-hover group flex h-full flex-col p-6"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-purple shadow-glow transition-transform group-hover:scale-105">
                      <Icon className="text-white" size={26} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-theme-muted">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-light transition-colors group-hover:text-brand-pink">
                      اكتشف المزيد
                      <ArrowLeft size={16} />
                    </span>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
