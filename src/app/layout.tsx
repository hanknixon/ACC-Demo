import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "American Charger Corporation | Welcome to Your Pitstop",
  description:
    "Flexible EV charging solutions for personal, commercial, fleet, public, government, and industrial use.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
