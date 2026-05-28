"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const appTypes = [
  "تطبيقات تجارة إلكترونية",
  "تطبيقات خدمات وطلبات",
  "تطبيقات إدارية",
  "تطبيقات Startup",
];

const focusPoints = [
  "الوصول للعملاء في أي وقت",
  "تحسين التفاعل وبناء ولاء أقوى",
  "بناء تجربة سلسة وسريعة",
];

export function MobileAppsSection() {
  return (
    <section id="mobile" className="section-padding relative scroll-mt-28">
      <div className="absolute inset-0 mesh-bg opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <span className="mb-3 inline-block text-sm font-semibold text-brand-pink">
              تطوير التطبيقات
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              تطبيقات موبايل تصل بعملائك وتعزّز تفاعلهم
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-theme-muted">
              نطوّر تطبيقات iOS و Android بتجربة مستخدم سلسة تساعدك على بناء علاقة
              أقوى مع عملائك وتحسين كفاءة عملياتك اليومية.
            </p>

            <ul className="mt-6 space-y-2">
              {appTypes.map((type) => (
                <li key={type} className="flex items-center gap-2 text-sm text-theme-muted">
                  <Check size={16} className="text-brand-pink" />
                  {type}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3">
              {focusPoints.map((point) => (
                <p key={point} className="text-sm text-theme-muted">
                  • {point}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="primary">
                اطلب عرض سعر
                <ArrowLeft size={18} />
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right">
            <MobileMockups />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MobileMockups() {
  return (
    <div className="relative flex items-center justify-center gap-4 py-8">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="glass-card w-40 overflow-hidden rounded-3xl border-2 border-white/10 p-2 shadow-glow sm:w-48"
      >
        <PhoneScreen accent="primary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="glass-card z-10 w-44 overflow-hidden rounded-3xl border-2 border-brand-pink/30 p-2 shadow-glow-pink sm:w-52"
      >
        <div className="mb-2 flex items-center justify-center">
          <Smartphone className="text-brand-pink" size={20} />
        </div>
        <PhoneScreen accent="pink" featured />
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
        className="glass-card hidden w-40 overflow-hidden rounded-3xl border-2 border-white/10 p-2 shadow-glow sm:block sm:w-48"
      >
        <PhoneScreen accent="light" />
      </motion.div>
    </div>
  );
}

function PhoneScreen({
  accent,
  featured,
}: {
  accent: "primary" | "pink" | "light";
  featured?: boolean;
}) {
  const colors = {
    primary: "from-brand-primary to-brand-purple",
    pink: "from-brand-pink to-brand-purple",
    light: "from-brand-light to-brand-primary",
  };

  return (
    <div className="rounded-2xl bg-mockup p-3">
      <div className={`mb-3 h-2 rounded-full bg-gradient-to-l ${colors[accent]} ${featured ? "w-full" : "w-3/4"}`} />
      <div className="space-y-2">
        <div className="h-8 rounded-lg bg-white/5" />
        <div className="h-8 rounded-lg bg-white/5" />
        <div className={`h-12 rounded-lg bg-gradient-to-t ${colors[accent]} opacity-30`} />
      </div>
    </div>
  );
}
