import React from "react";
import "./globals.css";

export const metadata = {
  title: "Ishan Kaushik | AI Engineer",
  description: "AI Engineer specializing in AI Automation and RAG Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

// Layout wraps whatever page is rendered layout = outer frame ; page = inner content

/*  | Element      | Purpose        |
| ------------ | -------------- |
| `<html>`     | root document  |
| `<body>`     | UI container   |
| `style`      | global styling |
| `{children}` | inject page    |
  */

/* export default function RootLayout
export default → makes this the main exported component
Next.js automatically detects this file
This function becomes the root layout of our app

we are not calling it manually.
Next.js calls it internally.  */