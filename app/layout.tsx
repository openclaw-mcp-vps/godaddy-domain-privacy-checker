import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoDaddy Domain Privacy Checker",
  description: "Check if your desired domain was previously searched on GoDaddy to avoid front-running."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="65869365-eb2b-4a03-b9fd-cb1be1a36dc5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
