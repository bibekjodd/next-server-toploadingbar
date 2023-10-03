import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import TopLoadingBar from "@/components/TopLoadingBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Top Loading Bar",
  description: "Top Loading Bar on Next Server Component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopLoadingBar />
        <Navbar />
        <main className="page-container">{children}</main>
      </body>
    </html>
  );
}
