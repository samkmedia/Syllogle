import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syllogle – Daily Logic Puzzle',
  description:
    'A daily logic puzzle game. Can all the statements be true at once? Free to play, new puzzles every day.',
  keywords: [
    'logic puzzle',
    'daily puzzle game',
    'syllogism',
    'LSAT logic game',
    'brain teaser',
    'word puzzle',
    'daily brain game',
    'Syllogle',
  ],
  metadataBase: new URL('https://syllogle.com'),
  openGraph: {
    title: 'Syllogle – Daily Logic Puzzle',
    description:
      'Five LSAT-style logic puzzles every day. Can all the statements be true at once?',
    url: 'https://syllogle.com',
    siteName: 'Syllogle',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Syllogle – Daily Logic Puzzle',
    description:
      'Five LSAT-style logic puzzles every day. Can all the statements be true at once?',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#fafaf9]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
