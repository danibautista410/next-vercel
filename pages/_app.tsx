import { NextPage } from 'next';
import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement ) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getlayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />

  return getlayout( <Component {...pageProps} /> )
}
