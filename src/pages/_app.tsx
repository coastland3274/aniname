import type { AppProps } from 'next/app';
import Provider from '@/providers';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Layout from '@/components/Layout';
import '@/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
