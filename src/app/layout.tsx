import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#eaeae2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Mpuhwe | Software Engineer",
    template: "%s | Mpuhwe",
  },
  description:
    "Software Engineer specializing in Frontend and Mobile Development. Building interfaces people actually enjoy using.",
  keywords: ["Mpuhwe", "Software Engineer", "Frontend", "Mobile", "Developer"],
  authors: [{ name: "Mpuhwe" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${urbanist.variable} min-h-screen font-urbanist bg-background selection:bg-[#2563EB]/20 selection:text-[#0A1F44]`}
      >
        {children}
      </body>
    </html>
  );
}
