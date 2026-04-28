import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syllogle',
  description: 'Can all of these statements be true at once?',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#fafaf9]">{children}</body>
    </html>
  );
}
