"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientOrbProps = {
  className?: string;
  color?: "primary" | "pink" | "light";
  size?: "sm" | "md" | "lg";
};

const colors = {
  primary: "bg-brand-primary/30",
  pink: "bg-brand-pink/25",
  light: "bg-brand-light/20",
};

const sizes = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
};

export function GradientOrb({
  className,
  color = "primary",
  size = "md",
}: GradientOrbProps) {
  return (
    <motion.div
      aria-hidden
      animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        colors[color],
        sizes[size],
        className
      )}
    />
  );
}
