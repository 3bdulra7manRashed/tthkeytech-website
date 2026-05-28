"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-brand-primary/25 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-primary dark:text-brand-light">
          {badge}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-theme-muted">{subtitle}</p>
      )}
    </motion.div>
  );
}
