import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Contact from '../components/Contact/Contact';

const roboto = Roboto({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Faks Tour Guide',
  description: 'Faks Tour Guide - Explore the best tours and experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Navigation */}
        <div className="flex-1">{children}</div>
        <Contact />
      </body>
    </html>
  );
}
