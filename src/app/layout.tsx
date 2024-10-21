import { Title } from '@/components/Title';

import type { Metadata } from 'next';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Recognize Text',
  description: 'OCR web app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning className='my-10'>
        <Title />
        <div className='content'>{children}</div>
      </body>
    </html>
  );
}
