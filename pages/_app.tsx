
import '../styles/MC.css'; // добавь этот импорт
import '../styles/XKCDComic.css'
import '../styles/footer.css'

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
