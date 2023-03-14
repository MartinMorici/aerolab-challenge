import { UserContext } from '@/context/context'
import React, { useContext, useEffect, useState } from 'react'
import Paginacion from './Paginacion'



const ProductsFilters = () => {
    const [selected, setSelected] = useState<string>('recent')
    const {products,page, setActualProducts, currentProducts} = useContext(UserContext)

    useEffect(() => {
      const prodAct = products?.slice((page - 1) * 16, page * 16);
      setSelected('recent')
      setActualProducts(prodAct!);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    

    const setFilter = (filter: string) => {
      switch (filter) {
        case 'recent':
          const prodAct = products?.slice((page - 1) * 16, page * 16);
          setSelected('recent')
          setActualProducts(prodAct!);
          break;
          case 'lowest':
            setSelected('lowest')
            const sortedArray1 = [...currentProducts!].sort((a, b) => (a.cost) - (b.cost));
            setActualProducts(sortedArray1);
            break;
          case 'highest':
            setSelected('highest')
            const sortedArray2 = [...currentProducts!].sort((a, b) => (b.cost) - (a.cost));
            setActualProducts(sortedArray2);
            break;
        }
    }

  return (
    <section className='text-[24px] flex items-center pt-[64px] pb-[24px] border-b border-[#d9d9d9]'>
        <span className='text-[#616161] border-r border-[#d9d9d9] pr-[24px] mr-[24px]'>{products?.length! / 2} of {products?.length} products</span>
        <div className='text-[#a3a3a3] flex gap-[24px] items-center'>
            <span className=''>Sort by:</span>
            <button className={`rounded-[100px] bg-[#ededed] px-6 py-2 ${selected === 'recent' && 'filter-active' }`} onClick={() => {setFilter('recent')}}>Most recent</button>
            <button className={`rounded-[100px] bg-[#ededed] px-6 py-2 ${selected === 'lowest' && 'filter-active'}`} onClick={() => {setFilter('lowest')}}>Lowest price</button>
            <button className={`rounded-[100px] bg-[#ededed] px-6 py-2 ${selected === 'highest' && 'filter-active'}`} onClick={() => {setFilter('highest')}}>Highest price</button>
        </div>
        <Paginacion/>
    </section>
  )
}

export default ProductsFilters