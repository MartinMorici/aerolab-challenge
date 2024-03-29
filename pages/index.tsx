import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { UserContext } from '@/context/context';

import Products from '@/components/products/Products';

export default function Home() {
  const {setUserState, setIsLoading, loading, setTotalProducts, setActualProducts, page } = useContext(UserContext);

  const fetchUser = async () => {
    const res = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });
    const resUser = await res.json();

    setUserState(resUser);
  };

  const fetchProducts = async () => {
    const res = await fetch('https://coding-challenge-api.aerolab.co/products', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    const resProducts = await res.json();

    setTotalProducts(resProducts);
    setActualProducts(resProducts.slice((page - 1) * 16, page * 16));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUser();
    fetchProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Products />
    </>
  );
}
