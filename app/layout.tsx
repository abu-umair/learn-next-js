import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { getSetting } from "./queries/getSetting";

const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const setting = await getSetting();

  return {
    title: {
      template: `%s | ${setting.siteName}`,
      default: "Untitled",
    },
    description: "Blog gue",
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  throw new Error("Error throw from root layout"); //?dibuat error

  return (
    <html lang="en"
      data-darkreader-mode="dynamic"
    >
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

//mirip seperti ini 
{/* <RootLayout> //?hanya menginpyt layout root (default)
    <Page />
</RootLayout> */}