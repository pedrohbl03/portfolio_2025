import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Lima - Full Stack Developer",
  description: "Personal portfolio of Pedro Lima, a Full Stack Developer. Explore my projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}`}
      >
        {children}

        <AnimatedBackground />
      </body>
    </html>
  );
}
