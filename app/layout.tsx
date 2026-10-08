import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurum Amalfi | Coastal Luxury Retreat',
  description: 'A private luxury retreat on Italy’s Amalfi Coast, made for thoughtful stays.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}