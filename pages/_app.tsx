import '../styles/MC.css'; // добавь этот импорт
import '../styles/XKCDComic.css';
import '../styles/footer.css';
import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="author" content="Jeanne" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
