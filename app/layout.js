import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Caring Club IIUM Official Website",
  description:
    "Caring Club is a club focusing on orphans welfare. The club is based at Internation Islamic University Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer></body>
    </html>
  );
}
