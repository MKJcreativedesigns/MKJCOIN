import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'MKJCOIN | Buy, Sell & Manage Crypto Instantly',
  description: 'Fast and secure crypto transactions with MKJCOIN. The premium platform for Web3 financial services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-white bg-[#0B0E14] min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
