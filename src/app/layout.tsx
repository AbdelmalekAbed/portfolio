import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import StructuredData from "@/components/structured-data";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Abdelmalek Abed",
    default: "Abdelmalek Abed - Data Scientist & ML Engineer",
  },
  description:
    "Data Scientist and ML Engineer specializing in NLP, Machine Learning, AWS Cloud Services, and AI-driven solutions for business optimization.",
  icons: {
    icon: "/headshot/headshot-2024.jpg",
    apple: "/headshot/headshot-2024.jpg",
  },
  openGraph: {
    type: "website",
    title: "Abdelmalek Abed - Data Scientist & ML Engineer",
    description:
      "Data Scientist and ML Engineer specializing in NLP, Machine Learning, AWS Cloud Services, and AI-driven solutions for business optimization.",
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
      "Data Scientist and ML Engineer specializing in NLP, Machine Learning, AWS Cloud Services, and AI-driven solutions for business optimization.",
    images: ["/screenshots/hero-preview.png"],
  },
  keywords: [
    "Natural Language Processing",
    "NLP",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "AWS Solutions Architect",
    "AWS Developer",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "SQL",
    "NoSQL",
    "Cloud Architecture",
    "MLOps",
    "Computer Vision",
    "Large Language Models",
    "LLM",
    "Data Engineering",
    "AWS",
    "Docker",
    "Git",
    "Statistical Analysis",
    "Predictive Modeling",
    "Vector Databases",
    "Statistical Modeling",
    "Clustering Algorithms",
    "PCA",
    "Feature Engineering",
    "Databricks",
    "AWS SageMaker",
    "Generative AI",
    "Large Language Models",
    "Serverless",
    "Innovation",
    "Node.js",
    "Full-Stack Development",
    "Cloud Computing",
  ],
  authors: [{ name: "Abdelmalek Abed" }],
  creator: "Abdelmalek Abed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">{children}</main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}
