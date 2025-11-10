import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "RIDES - Viện Nghiên cứu Thiên tai và Môi trường",
  description:
    "RIDES là đơn vị trực thuộc Viện Nghiên cứu Thiên tai và Môi trường, hoạt động trong lĩnh vực môi trường, năng lượng xanh, biến đổi khí hậu và phát triển bền vững"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
