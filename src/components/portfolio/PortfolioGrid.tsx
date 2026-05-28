"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PortfolioGrid() {
  return (
    <section className="section-padding pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="أعمالنا"
          title="مشاريع نفخر بها"
          subtitle="كل مشروع قصة تحدٍ وحل ونتيجة — اكتشف كيف ساعدنا عملاءنا على النمو."
        />

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {portfolioProjects.map((project, i) => (
            <PortfolioCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof portfolioProjects)[0];

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="mb-6 break-inside-avoid"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="glass-card-hover group relative overflow-hidden">
        <div
          className={`h-2 bg-gradient-to-l ${project.gradient}`}
        />
        <div className="p-6">
          <span className="text-xs font-semibold text-brand-light">{project.category}</span>
          <h3 className="mt-2 text-xl font-bold text-foreground">{project.title}</h3>

          <AnimatePresence mode="wait">
            {!hovered ? (
              <motion.p
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-sm text-theme-subtle"
              >
                مرّر للاطلاع على التفاصيل
              </motion.p>
            ) : (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 space-y-4"
              >
                <div>
                  <p className="text-xs font-bold text-brand-pink">التحدي</p>
                  <p className="mt-1 text-sm text-theme-muted">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-light">الحل</p>
                  <p className="mt-1 text-sm text-theme-muted">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-primary">النتيجة</p>
                  <p className="mt-1 text-sm font-medium text-foreground/90">{project.result}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}
