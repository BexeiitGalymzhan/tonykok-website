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
  title: "ТОО «Тоныкөк Құрылыс» | Строительная компания в Атырау",
  description:
    "ТОО «Тоныкөк Құрылыс» — надежный партнер в сфере промышленного и гражданского строительства с 2010 года. Строим жилые и коммерческие объекты, инженерные сети, инфраструктуру и занимаемся реставрацией памятников культуры.",
  keywords: [
    "строительная компания Атырау",
    "Тоныкөк Құрылыс",
    "строительство жилья",
    "промышленное строительство Казахстан",
    "реставрация памятников",
    "строительство школ Атырау",
    "инженерные сети строительство",
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
