import { UserContext } from '@/context/context';
import Image from 'next/image';
import React, { ReactNode, useContext } from 'react';
import Logo from '../assets/aerolab-logo.svg';
import Coin from '../assets/icons/coin.svg';
import Banner from '../assets/header-x1.png';
import { postCoins } from '@/pages/api/points';

const Header = () => {
  const { user, setUserState } = useContext(UserContext);

  const fetchPointsHandler = async (coins: number) => {
    await postCoins(coins);
    setUserState({ ...user, points: user?.points! + coins });
  };

  return (
    <>
      <header>
        <div className=' px-[42px] py-4 flex justify-between items-center'>
          <Image src={Logo} width='39' height='36' alt='logo'></Image>
          <div
            className='flex text-[#616161] text-[24px] justify-center items-center gap-[18px]'
          >
            <span className=' tracking-[-0.15px] '>{user?.name}</span>
            <span className='bg-[#ededed] rounded-[100px] w-[110px] h-[48px] flex justify-center items-center gap-2'>
              {user?.points} <Image className='relative top-[1px]' src={Coin} alt='Poins' width={26}></Image>
            </span>
          </div>
        </div>
        <div className='relative'>
          <Image src={Banner} className='h-[412px] object-cover' alt='banner' priority />
          <h1 className='absolute left-[132px] bottom-[48px] font-semibold text-[64px] text-white'>Electronics</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
