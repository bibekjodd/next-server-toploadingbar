import Navbar from '@/components/navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import LoadingBar from '@/components/loading-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Top Loading Bar',
  description: 'Top Loading Bar on Next Server Component'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingBar />
        <Navbar />
        <main className="page-container">{children}</main>
      </body>
    </html>
  );
}
