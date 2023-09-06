import Navbar from './components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

// 3600  = 1 hour
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'Next Image Gallery'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
