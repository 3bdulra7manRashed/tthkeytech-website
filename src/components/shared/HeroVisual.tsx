"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Sparkles } from "lucide-react";

const floatSlow = {
  y: [0, -10, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
};

const floatMedium = {
  y: [0, 8, 0],
  transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.4 },
};

const floatFast = {
  y: [0, -6, 0],
  transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 },
};

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:max-w-none lg:aspect-[5/4]"
      aria-hidden
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/15 via-transparent to-brand-pink/10 blur-2xl" />

      {/* Laptop — center anchor */}
      <motion.div
        animate={floatSlow}
        className="absolute left-1/2 top-1/2 z-10 w-[78%] -translate-x-1/2 -translate-y-[42%]"
      >
        <LaptopWebsiteMockup />
      </motion.div>

      {/* Mobile — front right */}
      <motion.div
        animate={floatMedium}
        className="absolute bottom-[8%] right-0 z-20 w-[28%] sm:w-[26%]"
      >
        <PhoneMockup variant="primary" />
      </motion.div>

      {/* Mobile — back left */}
      <motion.div
        animate={floatFast}
        className="absolute left-0 top-[18%] z-[5] w-[24%] opacity-90 sm:w-[22%]"
      >
        <PhoneMockup variant="secondary" />
      </motion.div>

      {/* Glass service cards */}
      <motion.div
        animate={floatFast}
        className="absolute -left-2 top-[6%] z-30 hidden sm:block"
      >
        <GlassServiceCard icon={Globe} label="مواقع" color="primary" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -8, 0],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
        className="absolute -right-1 bottom-[28%] z-30 hidden sm:block"
      >
        <GlassServiceCard icon={Smartphone} label="تطبيقات" color="light" />
      </motion.div>

      <motion.div
        animate={floatMedium}
        className="absolute right-[8%] top-0 z-30"
      >
        <GlassServiceCard icon={Sparkles} label="ذكاء اصطناعي" color="pink" />
      </motion.div>

      {/* AI glow nodes */}
      <AIGlowNode className="left-[12%] bottom-[22%]" delay={0} />
      <AIGlowNode className="right-[20%] top-[12%]" delay={0.6} />
      <motion.div
        className="absolute left-[45%] top-[8%] h-2 w-2 rounded-full bg-brand-light shadow-[0_0_12px_#4BC9F1]"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.div>
  );
}

function LaptopWebsiteMockup() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="glass-card overflow-hidden p-1.5 shadow-glow sm:p-2"
    >
      <div className="overflow-hidden rounded-lg bg-elevated sm:rounded-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2 sm:px-4 sm:py-2.5">
          <span className="h-2 w-2 rounded-full bg-red-400/70 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70 sm:h-2.5 sm:w-2.5" />
          <span className="mr-auto truncate rounded-md bg-white/5 px-2 py-0.5 text-[8px] text-white/40 sm:text-[10px]">
            thekeytech.com
          </span>
        </div>

        {/* Premium website preview — NOT a dashboard */}
        <div className="p-3 sm:p-4">
          {/* Nav strip */}
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2 w-12 rounded-full bg-gradient-to-l from-brand-primary to-brand-light sm:w-16" />
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-1 w-4 rounded-full bg-white/10 sm:w-5" />
              ))}
            </div>
          </div>

          {/* Hero block */}
          <div className="mb-3 rounded-lg border border-white/5 bg-gradient-to-br from-brand-primary/15 via-brand-purple/10 to-transparent p-3 sm:p-4">
            <div className="mb-2 h-2.5 w-3/4 rounded-full bg-white/20 sm:h-3" />
            <div className="mb-1.5 h-1.5 w-full rounded-full bg-white/10" />
            <div className="mb-3 h-1.5 w-2/3 rounded-full bg-white/10" />
            <motion.div
              className="h-5 w-20 rounded-md bg-gradient-to-l from-brand-primary to-brand-purple sm:h-6 sm:w-24"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Feature cards row */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {[
              "from-brand-primary/40 to-brand-primary/10",
              "from-brand-light/30 to-brand-light/5",
              "from-brand-pink/30 to-brand-pink/5",
            ].map((grad, i) => (
              <motion.div
                key={i}
                className={`rounded-md bg-gradient-to-b ${grad} p-2 sm:p-2.5`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="mb-1.5 h-1.5 w-1.5 rounded-full bg-white/30" />
                <div className="h-1 w-full rounded-full bg-white/15" />
                <div className="mt-1 h-1 w-2/3 rounded-full bg-white/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Laptop base */}
      <div className="mx-auto mt-1 h-1.5 w-[92%] rounded-b-lg bg-white/10 sm:h-2" />
      <div className="mx-auto h-0.5 w-[40%] rounded-full bg-white/5" />
    </motion.div>
  );
}

function PhoneMockup({ variant }: { variant: "primary" | "secondary" }) {
  const isPrimary = variant === "primary";

  return (
    <motion.div
      className={`overflow-hidden rounded-[1.25rem] border-2 p-0.5 shadow-glass sm:rounded-[1.5rem] ${
        isPrimary
          ? "border-brand-pink/25 shadow-glow-pink"
          : "border-white/10 opacity-80"
      }`}
      style={{ rotate: isPrimary ? -6 : 8 }}
    >
      <div className="overflow-hidden rounded-[1.1rem] bg-elevated sm:rounded-[1.35rem]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-2 py-1.5 sm:px-2.5">
          <div className="h-1 w-6 rounded-full bg-white/20" />
          <motion.div
            className={`h-3 w-3 rounded-full ${isPrimary ? "bg-brand-pink/80" : "bg-brand-light/60"}`}
            animate={isPrimary ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* App UI — clean mobile screen */}
        <div className="px-2 pb-2 sm:px-2.5 sm:pb-2.5">
          <div
            className={`mb-2 h-8 rounded-lg sm:h-10 ${
              isPrimary
                ? "bg-gradient-to-br from-brand-primary/50 to-brand-purple/30"
                : "bg-gradient-to-br from-brand-light/30 to-brand-primary/20"
            }`}
          />
          <div className="space-y-1.5">
            <div className="h-6 rounded-md border border-white/5 bg-white/5 sm:h-7" />
            <div className="h-6 rounded-md border border-white/5 bg-white/5 sm:h-7" />
            {!isPrimary && <div className="h-6 rounded-md bg-white/5 sm:h-7" />}
          </div>
          {isPrimary && (
            <motion.div
              className="mt-2 flex justify-center"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-brand-light to-brand-pink" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function GlassServiceCard({
  icon: Icon,
  label,
  color,
}: {
  icon: typeof Globe;
  label: string;
  color: "primary" | "light" | "pink";
}) {
  const styles = {
    primary: "border-brand-primary/25 text-brand-light",
    light: "border-brand-light/25 text-brand-light",
    pink: "border-brand-pink/25 text-brand-pink",
  };
  const iconBg = {
    primary: "bg-brand-primary/20",
    light: "bg-brand-light/15",
    pink: "bg-brand-pink/15",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`glass-card flex items-center gap-2 px-3 py-2 shadow-glass ${styles[color]}`}
    >
      <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconBg[color]}`}>
        <Icon size={14} />
      </div>
      <span className="text-[11px] font-semibold whitespace-nowrap sm:text-xs">{label}</span>
    </motion.div>
  );
}

function AIGlowNode({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        opacity: [0.35, 0.9, 0.35],
        scale: [1, 1.25, 1],
      }}
      transition={{ duration: 3, repeat: Infinity, delay }}
    >
      <motion.div
        className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-md sm:h-10 sm:w-10"
        animate={{
          boxShadow: [
            "0 0 16px rgba(63,55,202,0.3)",
            "0 0 28px rgba(252,49,150,0.35)",
            "0 0 16px rgba(63,55,202,0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, delay }}
      >
        <Sparkles size={16} className="text-brand-light" />
      </motion.div>
    </motion.div>
  );
}
