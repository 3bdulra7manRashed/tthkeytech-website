import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <footer className="relative border-t border-theme bg-background-secondary">
      <div
        className="absolute inset-0 mesh-bg"
        style={{ opacity: "var(--footer-mesh-opacity)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Image
                src="/brand/logo.svg"
                alt={siteConfig.nameEn}
                width={140}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-theme-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2.5 !text-sm"
              >
                <MessageCircle size={18} />
                واتساب
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-secondary !py-2.5 !text-sm"
              >
                <Mail size={18} />
                البريد
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">روابط سريعة</h3>
            <ul className="space-y-3">
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
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground">تواصل</h3>
            <ul className="space-y-3 text-sm text-theme-muted">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary"
                >
                  واتساب مباشر
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-theme pt-8 sm:flex-row">
          <p className="text-xs text-theme-faint">
            © {new Date().getFullYear()} {siteConfig.nameEn} - {siteConfig.name}. جميع الحقوق
            محفوظة.
          </p>
          <p className="text-xs text-theme-faint">
            حلول رقمية ذكية تساعد الشركات على النمو بكفاءة
          </p>
        </div>
      </div>
    </footer>
  );
}
