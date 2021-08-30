import type { AppProps } from 'next/app';
import GlobalStyles from '@/utils/global-styles';
import { FormProvider } from '@/contexts/form';
import { UpdateProvider } from '@/contexts/refresh';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <FormProvider>
        <UpdateProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </UpdateProvider>
      </FormProvider>
    </>
  );
}
