"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
// import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "navbar-scrolled border-b py-3 backdrop-blur-xl" : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <Image
            src="/brand/mark.svg"
            alt="ذكي تك"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="hidden text-sm font-bold text-foreground sm:block">
            ذكي <span className="text-brand-primary">تك</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-theme-muted transition-colors hover:text-brand-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <motion.div className="hidden items-center gap-3 lg:flex">
          {/* <ThemeToggle /> */}
          <Button href="/contact" variant="primary" className="!px-5 !py-2.5 text-sm">
            ابدأ مشروعك
          </Button>
        </motion.div>

        <div className="flex items-center gap-2 lg:hidden">
          {/* <ThemeToggle /> */}
          <button
            type="button"
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className="relative z-50 rounded-lg p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-bg fixed inset-0 z-40 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex h-full flex-col items-center justify-center gap-8 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button href="/contact" onClick={() => setMobileOpen(false)}>
                ابدأ مشروعك
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
