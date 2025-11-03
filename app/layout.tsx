import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Chi nhánh Viện Nghiên cứu Thiên tai và Môi trường tại TP.HCM",
  description: "RIDES-HCM là đơn vị trực thuộc Viện Nghiên cứu Thiên tai và Môi trường, hoạt động trong lĩnh vực môi trường, năng lượng xanh, biến đổi khí hậu và phát triển bền vững",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

