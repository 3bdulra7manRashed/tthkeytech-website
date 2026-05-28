"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const useCases = [
  "مدونات ومواقع شخصية",
  "متاجر إلكترونية",
  "مواقع شركات",
  "مواقع مطاعم وخدمات",
  "مواقع مخصصة حسب الطلب",
];

const benefits = [
  "أداء سريع",
  "تصميم متجاوب",
  "تجربة مستخدم ذكية",
  "SEO optimized",
  "قابلية التوسع",
];

export function WebDevSection() {
  return (
    <section id="web" className="section-padding relative scroll-mt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right" className="order-2 lg:order-1">
            <LaptopMockup />
          </Reveal>

          <Reveal direction="left" className="order-1 lg:order-2">
            <span className="mb-3 inline-block text-sm font-semibold text-brand-light">
              تطوير المواقع
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              تطوير مواقع إلكترونية احترافية تناسب مختلف احتياجاتك
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-theme-muted">
              نصمم ونطوّر تجارب رقمية ذكية تساعد عملك على النمو — مواقع سريعة،
              جذابة، ومُحسّنة لمحركات البحث تبني ثقة عملائك من أول زيارة.
            </p>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-foreground">حالات الاستخدام</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {useCases.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-theme-muted">
                    <Check size={16} className="shrink-0 text-brand-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {benefits.map((b) => (
                <span
                  key={b}
                  className="rounded-lg border border-brand-primary/20 bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-light"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/contact">
                ابدأ موقعك الآن
                <ArrowLeft size={18} />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LaptopMockup() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-card relative mx-auto max-w-lg overflow-hidden p-2 shadow-glow"
    >
      <div className="overflow-hidden rounded-xl bg-mockup">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="p-6">
          <motion.div
            className="mb-4 h-4 w-3/4 rounded bg-gradient-to-l from-brand-primary to-brand-light"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="mb-6 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-16 rounded-lg bg-white/5" />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-4/5 rounded bg-white/10" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
          </div>
          <motion.div
            className="mt-6 h-24 rounded-lg bg-gradient-to-t from-brand-primary/30 to-transparent"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </div>
      <div className="mx-auto mt-2 h-3 w-32 rounded-b-lg bg-white/10" />
    </motion.div>
  );
}
