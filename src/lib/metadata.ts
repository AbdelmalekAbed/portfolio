import type { Metadata } from "next";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = "",
  image,
}: GenerateMetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://djamelsaid.com";
  const fullTitle = title
    ? `${title} | Abdelmalek Abed`
    : "Abdelmalek Abed - Data Scientist & ML Engineer";

  return {
    title: fullTitle,
    description:
      description ||
      "Data Scientist and ML Engineer specializing in NLP, Machine Learning, Cloud Architecture, and AI-driven solutions.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${path}`,
      siteName: "Abdelmalek Abed",
      type: "website",
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image && { images: [image] }),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
