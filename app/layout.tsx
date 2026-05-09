import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site-data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dímelo Kombete',
  description:
    'El spot oficial donde el talento de Puerto Rico se hace mundial. Música, deportes, moda y belleza con flow boricua.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Dímelo Kombete',
    description:
      'El spot oficial donde el talento de Puerto Rico se hace mundial. Música, deportes, moda y belleza con flow boricua.',
    siteName: 'Dímelo Kombete',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dímelo Kombete',
    description:
      'El spot oficial donde el talento de Puerto Rico se hace mundial. Música, deportes, moda y belleza con flow boricua.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
