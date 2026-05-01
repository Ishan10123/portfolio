import React from "react";
import "./globals.css"

export default function RootLayout({
  children,      // children = dynamic content (our pages)
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0a0a", color: "white" }}>
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