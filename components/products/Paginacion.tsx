import React, { useContext } from 'react';
import Image from 'next/image';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import { UserContext } from '@/context/context';

const Paginacion = () => {
  const { products, setCurrentPage, page } = useContext(UserContext);
  const maxPage = Math.ceil(products?.length! / 16);


  return (
    <div className='flex ml-auto'>
      <Image className={` ${page <= 1 && 'hidden'}`} src={ArrowLeft} alt='Retroceder página de productos' onClick={() => setCurrentPage(page -1)} />
      <Image className={`ml-3 ${page >= maxPage && 'pointer-events-none'}`} src={ArrowRight} alt='Siguiente página de productos' onClick={() => setCurrentPage(page + 1)} />
    </div>
  );
};

export default Paginacion;
