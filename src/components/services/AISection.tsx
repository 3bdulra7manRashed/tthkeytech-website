"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, Cpu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const aiFeatures = [
  { icon: Bot, title: "شات بوت ذكي", desc: "دعم عملاء آلي بالعربية على مدار الساعة" },
  { icon: Workflow, title: "أتمتة العمليات", desc: "تقليل المهام اليدوية وتسريع سير العمل" },
  { icon: BarChart3, title: "تحليل البيانات", desc: "رؤى واضحة لاتخاذ قرارات أدق" },
  { icon: Cpu, title: "أنظمة ذكية مخصصة", desc: "حلول AI مصممة لاحتياجات عملك" },
];

const benefits = ["توفير الوقت", "تحسين الكفاءة", "اتخاذ قرارات أفضل"];

export function AISection() {
  return (
    <section id="ai" className="section-padding relative scroll-mt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-transparent to-brand-pink/5" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          badge="الذكاء الاصطناعي"
          title="حلول ذكية تُحوّل بياناتك إلى قرارات"
          subtitle="نبني أنظمة AI عملية تساعدك على العمل بذكاء أكبر — لا تعقيداً زائداً."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {benefits.map((b) => (
            <span
              key={b}
              className="rounded-full border border-brand-pink/30 bg-brand-pink/10 px-4 py-1.5 text-sm font-medium text-brand-pink"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card-hover group relative overflow-hidden p-6 text-center"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-pink shadow-glow-pink">
                    <feature.icon className="text-white" size={26} />
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-theme-muted">{feature.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <AIVisual />

        <div className="mt-12 text-center">
          <Button href="/contact">
            احجز استشارة
            <ArrowLeft size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}

function AIVisual() {
  const nodes = [
    { x: "50%", y: "10%", label: "بيانات" },
    { x: "15%", y: "50%", label: "تحليل" },
    { x: "85%", y: "50%", label: "أتمتة" },
    { x: "50%", y: "90%", label: "قرار" },
  ];

  return (
    <Reveal className="mt-16">
      <div className="relative mx-auto h-64 max-w-2xl sm:h-80">
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4460EF" />
              <stop offset="100%" stopColor="#FC3196" />
            </linearGradient>
          </defs>
          {[
            "M50%,10% L15%,50%",
            "M50%,10% L85%,50%",
            "M15%,50% L50%,90%",
            "M85%,50% L50%,90%",
            "M15%,50% L85%,50%",
          ].map((d, i) => (
            <motion.line
              key={d}
              x1={d.split(" ")[0].replace("M", "")}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              strokeOpacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: i * 0.2, duration: 1 }}
            />
          ))}
        </svg>
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            className="glass-card absolute flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xs font-semibold text-brand-light shadow-glow"
            style={{ left: node.x, top: node.y }}
            animate={{ boxShadow: ["0 0 20px rgba(68,96,239,0.2)", "0 0 40px rgba(252,49,150,0.3)", "0 0 20px rgba(68,96,239,0.2)"] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          >
            {node.label}
          </motion.div>
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-pink text-sm font-bold text-white shadow-glow"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          AI
        </motion.div>
      </div>
    </Reveal>
  );
}
