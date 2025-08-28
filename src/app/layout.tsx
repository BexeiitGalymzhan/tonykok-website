import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tonykok",
  description:
    "Строительная компания «Tonykok» в Атырау. Бетонные работы, фасадные панели, тротуарная плитка, строительные конструкции. Собственный автопарк и техника.",
  keywords: [
    "строительная компания",
    "бетонные работы",
    "фасадные панели",
    "тротуарная плитка",
    "строительные конструкции",
    "строительство Атырау",
    "строительная техника",
    "Tonykok",
    "Атырау",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
