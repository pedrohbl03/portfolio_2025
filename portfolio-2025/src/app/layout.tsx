import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Analytics } from "@/components/Analytics";
import { getSiteConfig } from "@/lib/sanity";
import { generateAnalyticsScript } from "@/lib/metadata";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Lima - Full Stack Developer",
  description: "Personal portfolio of Pedro Lima, a Full Stack Developer. Explore my projects, skills, and contact information.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = await getSiteConfig();
  const analytics = generateAnalyticsScript(siteConfig);

  return (
    <html lang={siteConfig?.seo?.language || "en"}>
      <body
        className={`${montserrat.variable}`}
      >
        <Analytics {...analytics} />
        {children}

        <AnimatedBackground />
      </body>
    </html>
  );
}
