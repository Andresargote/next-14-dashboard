import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        <title>My dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </header>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
