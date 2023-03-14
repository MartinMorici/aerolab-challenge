import React, { useContext } from 'react';
import Image from 'next/image';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import { UserContext } from '@/context/context';

const Paginacion = () => {
  const { products, setCurrentPage, page, setActualProducts } = useContext(UserContext);
  const maxPage = Math.ceil(products?.length! / 16);


  const nextPageHandler = () => {
    setCurrentPage(page+1)  
  }

  const prevPageHandler = () => {
    setCurrentPage(page-1)
  }

  return (
    <div className='flex ml-auto'>
      <Image className={` ${page <= 1 && 'hidden'}`} src={ArrowLeft} alt='Retroceder página de productos' onClick={prevPageHandler} />
      <Image className={`ml-3 ${page >= maxPage && 'pointer-events-none'}`} src={ArrowRight} alt='Siguiente página de productos' onClick={nextPageHandler} />
    </div>
  );
};

export default Paginacion;
