import "./globals.css";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Ishan Kaushik | AI Engineer",
    template: "%s | Ishan Kaushik",
  },
  description:
    "AI Engineer specializing in AI Automation, RAG systems, and scalable backend solutions using LLMs and modern cloud technologies.",
  keywords: [
    "Ishan Kaushik",
    "AI Engineer",
    "RAG",
    "LLM",
    "LangChain",
    "FastAPI",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Ishan Kaushik" }],
  creator: "Ishan Kaushik",
  metadataBase: new URL("https://your-domain.com"), // update later
  openGraph: {
    title: "Ishan Kaushik | AI Engineer",
    description:
      "AI Engineer building intelligent automation systems, RAG pipelines, and scalable backend solutions.",
    url: "https://your-domain.com",
    siteName: "Ishan Portfolio",
    images: [
      {
        url: "/og.png", // add later
        width: 1200,
        height: 630,
        alt: "Ishan Kaushik Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Kaushik | AI Engineer",
    description:
      "AI Engineer building AI automation systems and RAG pipelines.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-[#0a0a0a] text-white antialiased selection:bg-white selection:text-black">

        {/* Navbar */}
        <Navbar />

        {/* Main Content Wrapper */}
        <main className="relative overflow-x-hidden">
          {children}
        </main>

      </body>
    </html>
  );
}