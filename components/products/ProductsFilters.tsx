import { UserContext } from '@/context/context'
import React, { useContext, useState } from 'react'
import Paginacion from './Paginacion'



const ProductsFilters = () => {
    const [selected, setSelected] = useState<string>('recent')
    const {products, setCurrentPage,page} = useContext(UserContext)


  return (
    <section className='text-[24px] flex items-center pt-[64px] pb-[24px] border-b border-[#d9d9d9]'>
        <span className='text-[#616161] border-r border-[#d9d9d9] pr-[24px] mr-[24px]'>{products?.length! / 2} of {products?.length} products</span>
        <div className='text-[#a3a3a3] flex gap-[24px] items-center'>
            <span className=''>Sort by:</span>
            <button className={`rounded-[100px] bg-[#ededed] px-6 py-2 ${selected === 'recent' && 'filter-active' }`} onClick={() => {setSelected('recent')}}>Most recent</button>
            <button className={`rounded-[100px] bg-[#ededed] px-6 py-2 ${selected === 'lowest' && 'filter-active'}`} onClick={() => {setSelected('lowest')}}>Lowest price</button>
            <button className={`rounded-[100px] bg-[#ededed] px-6 py-2 ${selected === 'highest' && 'filter-active'}`} onClick={() => {setSelected('highest')}}>Highest price</button>
        </div>
        <Paginacion/>
    </section>
  )
}

export default ProductsFilters