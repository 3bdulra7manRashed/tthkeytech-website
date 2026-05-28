"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientOrb } from "@/components/shared/GradientOrb";

export function FinalCTA() {
  return (
    <section className="section-padding relative">
      <motion.div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-brand-primary/20 bg-glass p-10 text-center shadow-card sm:p-16">
        <GradientOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size="lg" />
        <GradientOrb className="right-0 top-0" color="pink" size="md" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-purple/10 to-brand-pink/20"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            جاهز لبناء حضور رقمي أكثر ذكاءً؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-theme-muted">
            لنتحدث عن مشروعك ونصمم لك الحل الأمثل — استشارة أولية مجانية.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">
              تواصل معنا
              <ArrowLeft size={18} />
            </Button>
            <Button href="/contact" variant="secondary">
              ابدأ مشروعك الآن
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
