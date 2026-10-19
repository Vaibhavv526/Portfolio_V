import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

export const metadata: Metadata = {
  title: "K Vaibhav | AI/ML Engineer & Software Engineer",
  description:
    "Engineering portfolio of K Vaibhav — AI/ML Engineer and Software Engineer. Building production AI systems, custom PyTorch Transformers, multi-agent platforms, and scalable applications.",
  keywords: [
    "K Vaibhav",
    "AI/ML Engineer",
    "Software Engineer",
    "PyTorch",
    "Machine Learning",
    "Generative AI",
    "FastAPI",
    "Transformers",
    "Computer Vision",
    "Portfolio",
    "Bilaspur",
  ],
  authors: [{ name: "K Vaibhav" }],
  creator: "K Vaibhav",
  openGraph: {
    title: "K Vaibhav | AI/ML Engineer & Software Engineer",
    description:
      "Engineering portfolio of K Vaibhav — AI/ML Engineer and Software Engineer. Explore verified projects including PyTorch Transformers from scratch, CampusCompass, and CV illumination platform.",
    url: "https://portfolio-v-omega-one.vercel.app",
    siteName: "K Vaibhav Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-bg text-text font-body selection:bg-accent/20 selection:text-accent">
        <CustomCursor />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
