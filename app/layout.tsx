import "./fontawesome";
import type { Metadata } from "next";

import "./globals.css";
import { GlobalBigBall } from "@/components/GlobalFloatingBall";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Aung Thawe - Portfolio",
  description:
    "Aung Thawe Thit Oo's personal portfolio website showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <GlobalBigBall />

        {children}
      </body>
    </html>
  );
}
