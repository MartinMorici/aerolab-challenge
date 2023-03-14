import Image from 'next/image';
import Coin from '../../assets/icons/coin.svg';
import React, { useContext } from 'react';
import { postCoins } from '@/pages/api/points';
import { UserContext } from '@/context/context';
interface Props {
  setLoadingPoints: (loadingPoints: boolean) => void;
}

const AddPoints = ({ setLoadingPoints }: Props) => {
  const { user, setUserState, setShowAddCoins, showCoins } = useContext(UserContext);

  const fetchPointsHandler = async (coins: number) => {
    await postCoins(coins);
    setUserState({ ...user, points: user?.points! + coins });
    setShowAddCoins(false)
    setLoadingPoints(true)
    setTimeout(() => {
      setLoadingPoints(false)
    }, 1000);
  };

  return (
    <>
      <div className={`absolute inset-0 z-10 ${showCoins ? 'pointer-events-auto' : 'pointer-events-none'}`} onClick={() => { setShowAddCoins(false)}}>
        <div className={`duration-[0.3s] origin-top-right pointer-events-auto ${showCoins ? 'scale-100 transition-all' : 'scale-0 transition-none'}   flex flex-col justify-center items-center absolute right-[42px] top-[16px] z-10 bg-[#ededed] px-3 py-5 text-xl rounded-[25px]`} onClick={(e) => { e.stopPropagation()}}>
          <p>Add coins</p>
          <div className='flex gap-4 mt-2 text-xl  '>
            <span className='flex gap-1  rounded-[25px] border-[1px] bg-white transition-all cursor-pointer hover:bg-gray-500 hover:text-white border-gray-500 px-1 ' onClick={() => {fetchPointsHandler(1000)}}>
              +1000 <Image className='relative top-[1px]' src={Coin} alt='Poins' width={26} ></Image>
            </span>
            <span className='flex gap-1  rounded-[25px] border-[1px] bg-white transition-all cursor-pointer hover:bg-gray-500 hover:text-white border-gray-500 px-1 ' onClick={() => {fetchPointsHandler(5000)}}>
              +5000 <Image className='relative top-[1px]' src={Coin} alt='Poins' width={26} ></Image>
            </span>
            <span className='flex gap-1  rounded-[25px] border-[1px] bg-white transition-all cursor-pointer hover:bg-gray-500 hover:text-white border-gray-500 px-1 ' onClick={() => {fetchPointsHandler(7500)}}>
              +7500 <Image className='relative top-[1px]' src={Coin} alt='Poins' width={26} ></Image>
            </span>
          </div>
          <button className='mt-3 ml-4 mr-auto text-lg text-red-400' onClick={() => setShowAddCoins(false)}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPoints;
