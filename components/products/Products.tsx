import React, { useContext } from 'react'
import ProductsFilters from './ProductsFilters'
import Image from 'next/image'
import {Product} from '../../utils/types'
import { UserContext } from '@/context/context'
import Paginacion from './Paginacion'

const Products = () => {
    const {loading, products, page} = useContext(UserContext);
    const productosActuales = products?.slice((page - 1) * 16, page * 16);
    
  return (
    <main className='bg-[#f9f9f9]'>
        <div className='w-[1176px] mx-auto'>
            <ProductsFilters/>
            <section className='mt-[42px] grid grid-cols-4 gap-4'>
                {!loading && productosActuales?.map((prod) => {
                    return <article key={prod._id} className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                        <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' width={252} height={182}  src={prod.img.url} alt={prod.name} />
                        <h2 className='text-base text-[#a3a3a3]'>{prod.category}</h2>
                        <h3 className='text-[18px] text-[#616161] mb-[18px]'>{prod.name}</h3>
                    </article>
                })}
            </section>
            <section className='text-[24px] flex items-center pt-[64px] pb-[24px] border-b border-[#d9d9d9]'>
                <span className='text-[#616161] pr-[24px] mr-[24px]'>{products?.length! / 2} of {products?.length} products</span>
                <div className='text-[#a3a3a3] flex gap-[24px] items-center'>
                </div>
                <Paginacion/>
            </section>
        </div>
    </main>
  )
}

export default Products