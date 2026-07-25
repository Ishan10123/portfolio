import "./globals.css";
import Navbar from "./components/Navbar";

import type { Metadata, Viewport } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ishan Kaushik | AI Software Engineer",
    template: "%s | Ishan Kaushik",
  },

  description:
    "AI Software Engineer building production-ready AI agents, RAG systems, FastAPI services, intelligent document processing, and enterprise automation workflows.",

  applicationName: "Ishan Kaushik Portfolio",

  authors: [
    {
      name: "Ishan Kaushik",
    },
  ],

  creator: "Ishan Kaushik",

  publisher: "Ishan Kaushik",

  category: "Technology",

  referrer: "origin-when-cross-origin",

  keywords: [
    "Ishan Kaushik",
    "AI Engineer",
    "Software Engineer",
    "Generative AI",
    "AI Agents",
    "RAG",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Python",
    "Machine Learning",
    "LLMs",
    "Prompt Engineering",
    "Automation",
    "Backend Development",
    "Portfolio",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ishan Kaushik | AI Software Engineer",

    description:
      "Portfolio showcasing production AI agents, RAG pipelines, FastAPI services, intelligent document processing, automation, and backend engineering.",

    url: "/",

    siteName: "Ishan Kaushik Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary",

    title: "Ishan Kaushik | AI Software Engineer",

    description:
      "Portfolio showcasing AI engineering, AI agents, RAG systems, FastAPI, LangChain, and intelligent automation.",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className="bg-[#0a0a0a] text-white antialiased"
      >
        <Navbar />

        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
