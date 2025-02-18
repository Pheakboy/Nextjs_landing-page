import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'InstaFoodKH',
  description: 'Find great restaurants for your daily meal today.',
  openGraph: {
    title: 'InstaFoodKH',
    description: 'Find great restaurants for your daily meal today.',
    images: [
      {
        url: 'https://87a0-96-9-79-154.ngrok-free.app/image/instaFood_logo.jpg',
        width: 800,
        height: 600,
        alt: 'InstaFoodKH Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' >
      <body
      className= {`${inter.className} `}
      >
        {children}
      </body>
    </html>
  );
}
