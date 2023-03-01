import type { AppProps } from 'next/app';
import UserProvider from '@/context/context';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}