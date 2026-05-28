"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "حدث خطأ أثناء الإرسال");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : "حدث خطأ غير متوقع");
    }
  }

  return (
    <div className="glass-card p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <CheckCircle className="mb-4 text-brand-light" size={56} />
            <h3 className="text-2xl font-bold text-foreground">تم الإرسال بنجاح!</h3>
            <p className="mt-2 text-theme-muted">
              شكراً لتواصلك. سنرد عليك في أقرب وقت ممكن.
            </p>
            <Button
              variant="secondary"
              className="mt-6"
              onClick={() => setState("idle")}
            >
              إرسال رسالة أخرى
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                الاسم
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                disabled={state === "loading"}
                className="w-full rounded-xl border border-theme bg-[var(--input-bg)] px-4 py-3 text-foreground outline-none transition-colors focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/20 disabled:opacity-50"
                placeholder="اسمك الكامل"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={state === "loading"}
                className="w-full rounded-xl border border-theme bg-[var(--input-bg)] px-4 py-3 text-foreground outline-none transition-colors focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/20 disabled:opacity-50"
                placeholder="example@email.com"
                dir="ltr"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                تفاصيل المشروع
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                disabled={state === "loading"}
                className="w-full resize-none rounded-xl border border-theme bg-[var(--input-bg)] px-4 py-3 text-foreground outline-none transition-colors focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/20 disabled:opacity-50"
                placeholder="أخبرنا عن مشروعك وأهدافك..."
              />
            </div>

            {state === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                <AlertCircle size={18} />
                {errorMessage}
              </motion.div>
            )}

            <Button type="submit" disabled={state === "loading"} className="w-full">
              {state === "loading" ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  جاري الإرسال...
                </>
              ) : (
                <>
                  إرسال الرسالة
                  <Send size={18} />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
