import { StoreProvider } from '@/app/StoreProvider';
import { Footer, Header, Navbar } from '@/components/MainParts/index';
// import '@/styles/css/globals.css';
import '../styles/css/globals.css';

import { Lato } from 'next/font/google';
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import Loading from './loading';
import { TracingBeam } from '@/components/Ui/SideEffect/TracingBeam';

export const metadata = {
  title: 'Cuồng phim',
  description: 'Generated by create next app',
};

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});
export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`antialiased ${lato.className} min-h-screen`}>
          <Header />
          <Navbar />
          <TracingBeam className={`layout-arrange`}>
            <main>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <Footer />
          </TracingBeam>
        </body>
      </html>
    </StoreProvider>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
