import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Movies & Entertainment",
  description: "Discover great films, series and anime.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /><Analytics /></body></html>;
}
