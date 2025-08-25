import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'hhhiii',
  description: 'Simple page saying hhhiii',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
