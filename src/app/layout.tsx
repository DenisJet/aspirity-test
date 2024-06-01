import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/Layout/Header/Header';
import Modal from '@/components/Modal/Modal';
import { ModalContextProvider } from '@/context/modal.context';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Aspirity test',
  description: 'Layout test task for Aspirity (NextJS, tailwind).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={poppins.className}>
        <ModalContextProvider>{children}</ModalContextProvider>
      </body>
    </html>
  );
}
