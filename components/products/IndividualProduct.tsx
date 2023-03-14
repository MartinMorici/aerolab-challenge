import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { Product } from '../../utils/types';
import Coin from '../../assets/icons/coin.svg';
import Buy from '../../assets/icons/buy-blue.svg';
import BuyWhite from '../../assets/icons/buy-white.svg';
import { UserContext } from '@/context/context';
import { redeemProduct } from '../../pages/api/redeem';


const IndividualProduct = (props: Product) => {
  const { user, setUserState } = useContext(UserContext);
  const [redeemed, setRedeemed] = useState(false)
  const redeemProductHandler = async (id: string, cost: number) => {
    await redeemProduct(id);
    setUserState({ ...user, points: user?.points! - cost });
    setRedeemed(true)
    setTimeout(() => {
      setRedeemed(false)
    }, 1000);
  };
  return (
    <>
      <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full py-4 hover:-translate-y-3 hover:shadow-2xl transition-all group relative'>
        <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' width={252} height={182} src={props.img.url} alt={props.name} />
        <h2 className='text-base text-[#a3a3a3]'>{props.category}</h2>
        <h3 className='text-[18px] text-[#616161] mb-[18px]'>{props.name}</h3>
        {user?.points! < props.cost ? (
          <div className='absolute top-3 right-3 flex gap-2 justify-center items-center text-white bg-[#000000e1] px-3 py-1 rounded-full'>
            You need {props.cost.toLocaleString()}
            <Image className='relative top-[2px]' height={38} width={20} src={Coin} alt='Imagen Moneda' />
          </div>
        ) : (
          <>
            <Image className='absolute top-2 right-2' src={Buy} alt='Icono Comprar' />
            <div className='absolute inset-0 bg-[#0ad2fade] opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col transition-all '>
              <Image className='absolute top-2 right-1' src={BuyWhite} alt='Icono Comprar' />
              <h4 className='text-[30px] text-white flex gap-2 justify-center items-center'>
                {props.cost.toLocaleString()} <Image className='relative top-[3px]' height={38} width={30} src={Coin} alt='Imagen Moneda' />{' '}
              </h4>
              <button className='w-10/12 bg-white rounded-full py-2 mt-3 hover:bg-[#FF7F00] hover:text-white transition-all hover:font-bold'
                onClick={() => {
                  redeemProductHandler(props._id, props.cost);
                }}
              >
                Redeem Now
              </button>
              {redeemed && <div className='text-green-500 bg-white px-2 py-1 rounded-full absolute bottom-2 left-2'> Redeemed successfully! :D</div>}
            </div>
          </>
        )}
      </article>
    </>
  );
};

export default IndividualProduct;
