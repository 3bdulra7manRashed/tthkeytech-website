"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Gem, TrendingUp } from "lucide-react";
import { whyUsPoints } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Sparkles, Target, Gem, TrendingUp];

export function WhyUsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="لماذا ذكي تك؟"
          title="نبني حلولاً ذكية بعقلية مختلفة"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {whyUsPoints.map((point, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={point} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass-card flex gap-5 p-6 lg:p-8"
                >
                  <motion.div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-primary/20 bg-brand-primary/10"
                    whileHover={{ boxShadow: "0 0 30px rgba(68, 96, 239, 0.3)" }}
                  >
                    <Icon className="text-brand-light" size={22} />
                  </motion.div>
                  <p className="text-lg font-medium leading-relaxed text-foreground/90">
                    {point}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
