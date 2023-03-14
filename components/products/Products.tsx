import React, { useContext, useEffect, useState } from 'react'
import ProductsFilters from './ProductsFilters'
import { UserContext } from '@/context/context'
import Paginacion from './Paginacion'
import IndividualProduct from './IndividualProduct'

const Products = () => {
    const {loading, products, page, currentProducts, setActualProducts} = useContext(UserContext);
    useEffect(() => {
        const prods = products?.slice((page - 1) * 16, page * 16)
        setActualProducts(prods!)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    
    
  return (
    <main className='bg-[#f9f9f9]'>
        <div className='w-[1176px] mx-auto'>
            <ProductsFilters/>
            <section className='mt-[42px] grid grid-cols-4 gap-4'>
                {!loading && currentProducts?.map((prod) => {
                    return <IndividualProduct key={prod._id} {...prod}/>
                })}
            </section>
            {loading && <div className='mt-[42px] w-full flex justify-center items-center'>
                <div className='inline-block h-8 w-8 animate-spin text-orange-400 rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' role='status'></div>
            </div>}
            <section className='text-[24px] flex items-center pt-[64px] pb-[24px] border-b border-[#d9d9d9]'>
                <span className='text-[#616161] pr-[24px] mr-[24px]'>{products?.length! / 2} of {products?.length} products</span>
                <div className='text-[#a3a3a3] flex gap-[24px] items-center'></div>
                <Paginacion/>
            </section>
        </div>
    </main>
  )
}

export default Products