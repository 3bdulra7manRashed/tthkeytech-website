import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function ContactInfo() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("مرحباً، أود التواصل بخصوص مشروع")}`;

  const items = [
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "تواصل مباشر وسريع",
      href: whatsappUrl,
      external: true,
      highlight: true,
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Clock,
      title: "أوقات الرد",
      value: "خلال 24 ساعة عمل",
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "نعمل عن بُعد مع عملاء في المنطقة العربية",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">لنبدأ الحديث</h2>
        <p className="mt-2 text-theme-muted">
          سواء كان لديك فكرة جاهزة أو تبحث عن استشارة — نحن هنا لمساعدتك.
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item) => {
          const content = (
            <div
              className={`glass-card flex items-start gap-4 p-5 transition-all ${
                item.highlight
                  ? "border-brand-pink/30 hover:shadow-glow-pink"
                  : "hover:border-brand-primary/30"
              }`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  item.highlight
                    ? "bg-brand-pink/20 text-brand-pink"
                    : "bg-brand-primary/20 text-brand-light"
                }`}
              >
                <item.icon size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-theme-muted">{item.value}</p>
              </div>
            </div>
          );

          if (item.href) {
            return (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block"
              >
                {content}
              </a>
            );
          }

          return <div key={item.title}>{content}</div>;
        })}
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full justify-center"
      >
        <MessageCircle size={20} />
        تواصل عبر واتساب
      </a>
    </div>
  );
}
