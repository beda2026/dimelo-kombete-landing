import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dímelo Kombete',
  description:
    'El spot oficial donde el talento de Puerto Rico se hace mundial. Música, deportes, moda y belleza con flow boricua.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
