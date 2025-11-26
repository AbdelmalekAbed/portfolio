import type { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Abdelmalek Abed | Data Scientist & ML Engineer",
  description:
    "Learn more about Abdelmalek Abed, a Data Scientist and ML Engineer with expertise in NLP, Machine Learning, and AWS Cloud Services.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}
