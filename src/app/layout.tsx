import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const title = "DIO Capital Partners";
const description =
  "DIO Capital Partners is an independent sponsor partnering with founder-owned distribution and niche manufacturing businesses to help them scale responsibly.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dio-capital.com"),
  title,
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
        className={`${inter.variable} ${playfair.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
