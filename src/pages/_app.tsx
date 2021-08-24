import type { AppProps } from 'next/app';
import GlobalStyles from '@/utils/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
