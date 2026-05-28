"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "./GradientOrb";

type PageHeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <GradientOrb className="right-0 top-0" color="primary" size="lg" />
      <GradientOrb className="left-10 bottom-0" color="pink" size="md" />
      <div className="section-padding relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="mb-4 inline-block rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-light">
              {badge}
            </span>
          )}
          <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-theme-muted">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
