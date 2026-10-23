import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "DIO Capital Partners";
const description =
  "DIO Capital Partners buys and builds founder-owned distribution and niche manufacturing businesses, investing patient capital as hands-on operators.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dio-capital.com"),
  title: { default: title, template: `%s · ${title}` },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${hanken.variable} ${newsreader.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
