import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DropGuard – Predict which students will drop out",
  description: "Analyzes student engagement patterns to predict course dropouts before they happen. Built for online course creators and education platforms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8d163aea-54fb-4f96-8b22-a4fee7df6ca5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
