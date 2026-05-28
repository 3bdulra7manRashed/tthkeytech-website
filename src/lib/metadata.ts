import type { Metadata } from "next";
import { siteConfig } from "./constants";

const defaultOgImage = "/og-image.svg";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.nameEn} - ${siteConfig.name}`
    : `${siteConfig.nameEn} - ${siteConfig.name} | ${siteConfig.tagline}`;
  const pageDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: `${siteConfig.nameEn} - ${siteConfig.name}`,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: siteConfig.nameEn,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: [
      "ذكي تك",
      "TheKey Tech",
      "تطوير مواقع",
      "تطبيقات موبايل",
      "ذكاء اصطناعي",
      "حلول رقمية",
      "شركة تقنية سعودية",
    ],
  };
}
