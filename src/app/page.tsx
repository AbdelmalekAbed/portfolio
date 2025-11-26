import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Abdelmalek Abed - Data Scientist & ML Engineer",
  description:
    "Portfolio of Abdelmalek Abed, a Data Scientist and ML Engineer specializing in NLP, Machine Learning, and AWS Cloud Services. Experienced in building end-to-end ML pipelines and deploying scalable AI solutions.",
  openGraph: {
    type: "website",
    title: "Abdelmalek Abed - Data Scientist & ML Engineer",
    description:
      "Portfolio of Abdelmalek Abed, a Data Scientist and ML Engineer specializing in NLP, Machine Learning, and AWS Cloud Services.",
    images: [
      {
        url: "/screenshots/hero-preview.png",
        width: 1200,
        height: 630,
        alt: "Abdelmalek Abed - Portfolio Hero Section",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelmalek Abed - Data Scientist & ML Engineer",
    description:
      "Portfolio of Abdelmalek Abed, a Data Scientist and ML Engineer specializing in NLP, Machine Learning, and AWS Cloud Services.",
    images: ["/screenshots/hero-preview.png"],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
