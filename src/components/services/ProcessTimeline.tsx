"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          badge="طريقة عملنا"
          title="من الفكرة إلى الإطلاق — بخطوات واضحة"
        />

        <div className="relative">
          <div className="absolute right-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-primary via-brand-light to-brand-pink md:block" />

          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-purple text-sm font-bold text-white shadow-glow">
                  {step.step}
                </div>
                <div className="glass-card flex-1 p-6">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-theme-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
