import "./fontawesome";

import "./globals.css";
import { GlobalBigBall } from "@/components/GlobalFloatingBall";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aung Thawe Thit Oo | Academic Portfolio & Achievements",
  description:
    "The official academic and personal portfolio of Aung Thawe Thit Oo. Showcasing educational milestones, some experience, GELC achievements, and professional certifications.",
  keywords: [
    "Aung Thawe Thit Oo",
    "Aung Thawe",
    "Academic Portfolio",
    "Graduation",
    "React.js",
    "GELC",
    "Certifications",
    "Education Background",
    "Student Achievements",
  ],
  authors: [{ name: "Aung Thawe Thit Oo" }],
  creator: "Aung Thawe Thit Oo",
  metadataBase: new URL("https://aungthawe-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aung Thawe Thit Oo | Education & Credentials",
    description:
      "Explore the academic journey, qualifications, GELC achievements , Fun Projects , and certifications of Aung Thawe Thit Oo.",
    url: "https://aungthawe-portfolio.vercel.app",
    siteName: "Aung Thawe Academic Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Aung Thawe Thit Oo Academic Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "profile", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Aung Thawe Thit Oo | Academic Portfolio & Credentials",
    description:
      "Discover the educational background, qualifications, and certified achievements of Aung Thawe Thit Oo.",
    images: ["/ged_photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Footer></Footer>
      </body>
    </html>
  );
}
