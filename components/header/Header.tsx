import { UserContext } from '@/context/context';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import Logo from '../../assets/aerolab-logo.svg';
import Coin from '../../assets/icons/coin.svg';
import Banner from '../../assets/header-x1.png';
import AddPoints from './AddPoints'

const Header = () => {
  const { user, setUserState, setShowAddCoins, showCoins } = useContext(UserContext);
  const [loadingPoints, setLoadingPoints] = useState<boolean>(false);

  return (
    <>
      <header>
        <div className=' px-[42px] py-4 flex justify-between items-center'>
          <Image src={Logo} width='39' height='36' alt='logo' />
          <div className=' flex text-[#616161] text-[24px] justify-center items-center gap-[18px] '>
            <span className=' tracking-[-0.15px] '>{user?.name}</span>
            <div className='relative bg-[#ededed] rounded-[25px] px-4 h-[48px] flex justify-center items-center gap-2 cursor-pointer ' onClick={() => setShowAddCoins(!showCoins)}>
              {loadingPoints ? (
                <div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' role='status'></div>
              ) : (
                <>
                  {user?.points} <Image className='relative top-[1px]' src={Coin} alt='Poins' width={26} /> <div className='text-gray-400 ml'>+</div>
                </>
              )}
            </div>
            <AddPoints setLoadingPoints={setLoadingPoints} />
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
