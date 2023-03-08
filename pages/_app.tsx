import type { AppProps } from 'next/app';
import '../styles/globals.css';
import UserProvider from '../context/context';
import Header from '@/components/Header';
import { Source_Sans_Pro } from 'next/font/google';

const source = Source_Sans_Pro({
  subsets: ['latin'],
  variable:"--source-font",
  weight: ['200', '400', '600', '900'],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div className={`max-w-[1440px] mx-auto relative ${source.variable} font-source`} >
        <Header/>
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}
