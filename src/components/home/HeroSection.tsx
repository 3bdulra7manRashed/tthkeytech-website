"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 lg:pt-32">
      <HeroAtmosphere />

      <div className="section-padding relative z-10 w-full">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center lg:me-auto lg:ms-0 lg:items-start lg:text-right">
          <motion.span
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="theme-pill mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-theme-subtle backdrop-blur-md"
          >
            <span className="h-1 w-1 rounded-full bg-brand-primary" />
            TheKey Tech — ذكي تك
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-balance text-4xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12] xl:text-6xl"
          >
            حلول رقمية{" "}
            <span className="relative inline-block">
              <span className="gradient-text">ذكية</span>
              <span
                className="pointer-events-none absolute -inset-x-3 -inset-y-1 rounded-lg bg-gradient-to-l from-brand-primary/20 via-brand-light/10 to-brand-pink/20 blur-xl dark:from-brand-primary/20 dark:via-brand-light/10 dark:to-brand-pink/20 light:from-brand-primary/10 light:via-brand-light/5 light:to-brand-pink/10"
                aria-hidden
              />
            </span>
            <br />
            <span className="mt-1 block font-bold text-foreground/95">
              تصنع حضورًا أقوى لأعمالك
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-7 max-w-lg text-pretty text-base leading-relaxed text-theme-muted sm:text-lg lg:max-w-md"
          >
            مواقع إلكترونية، تطبيقات، وحلول ذكاء اصطناعي — نصمم تجربتك الرقمية بجودة
            عالية ونتائج يمكن قياسها.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link href="/contact" className="hero-btn-primary group">
              <span>ابدأ مشروعك الآن</span>
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </Link>
            <Link href="/services" className="hero-btn-secondary">
              تعرّف على خدماتنا
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-background transition-colors duration-500" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[var(--hero-gradient-top)] via-[var(--hero-base)] to-[var(--hero-gradient-bottom)]"
        animate={{ opacity: [0.92, 1, 0.92] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-mesh absolute inset-0 opacity-60 light:opacity-100 dark:opacity-40" />
      <motion.div
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full blur-[100px]"
        style={{ background: "var(--orb-primary)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-1/4 h-64 w-64 rounded-full blur-[90px]"
        style={{ background: "var(--orb-pink)" }}
        animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <BrandMarkBackdrop />
    </div>
  );
}

function BrandMarkBackdrop() {
  return (
    <motion.div
      className="absolute -left-[18%] top-1/2 w-[min(90vw,720px)] -translate-y-1/2 select-none lg:-left-[8%] lg:w-[680px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 scale-110 bg-gradient-to-br from-brand-primary/15 via-brand-purple/10 to-brand-pink/15 blur-[80px] light:from-brand-primary/8 light:via-brand-purple/5 light:to-brand-pink/8"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: "var(--mark-glow-opacity)" }}
        />
        <Image
          src="/brand/mark-hero.png"
          alt=""
          width={800}
          height={800}
          priority
          className="mark-blend h-auto w-full blur-[1px] contrast-125 saturate-150 lg:opacity-[var(--mark-opacity)]"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 65% at 55% 50%, black 20%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 65% at 55% 50%, black 20%, transparent 72%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
