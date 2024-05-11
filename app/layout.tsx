import type { Metadata } from 'next';
import local from 'next/font/local';
import { Inter } from 'next/font/google';
import Header from './components/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const gilroy = local({
  src: [
    {
      path: '../public/Gilroy/Gilroy-Regular.ttf',
      weight: '400',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Flowers delivery service',
  description: 'Flowers delivery service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
