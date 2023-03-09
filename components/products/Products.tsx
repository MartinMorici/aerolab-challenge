import React from 'react'
import ProductsFilters from './ProductsFilters'
import Img from '../../assets/product-pics/AcerAspire-x1.png'
import Image from 'next/image'
import ArrowRight from '../../assets/icons/arrow-right.svg'

const Products = () => {
  return (
    <main className='bg-[#f9f9f9]'>
        <div className='w-[1176px] mx-auto'>
            <ProductsFilters/>
            <section className='mt-[42px] grid grid-cols-4 gap-4'>
                <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                    <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' src={Img} alt="Imagen Producto"/>
                    <h3 className='text-base text-[#a3a3a3]'>Phones</h3>
                    <h2 className='text-[18px] text-[#616161] mb-[18px]'>iPhone 8</h2>
                </article>
                <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                    <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' src={Img} alt="Imagen Producto"/>
                    <h3 className='text-base text-[#a3a3a3]'>Phones</h3>
                    <h2 className='text-[18px] text-[#616161] mb-[18px]'>iPhone 8</h2>
                </article>
                <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                    <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' src={Img} alt="Imagen Producto"/>
                    <h3 className='text-base text-[#a3a3a3]'>Phones</h3>
                    <h2 className='text-[18px] text-[#616161] mb-[18px]'>iPhone 8</h2>
                </article>
                <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                    <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' src={Img} alt="Imagen Producto"/>
                    <h3 className='text-base text-[#a3a3a3]'>Phones</h3>
                    <h2 className='text-[18px] text-[#616161] mb-[18px]'>iPhone 8</h2>
                </article>
                <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                    <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' src={Img} alt="Imagen Producto"/>
                    <h3 className='text-base text-[#a3a3a3]'>Phones</h3>
                    <h2 className='text-[18px] text-[#616161] mb-[18px]'>iPhone 8</h2>
                </article>
                <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                    <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' src={Img} alt="Imagen Producto"/>
                    <h3 className='text-base text-[#a3a3a3]'>Phones</h3>
                    <h2 className='text-[18px] text-[#616161] mb-[18px]'>iPhone 8</h2>
                </article>
                <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                    <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' src={Img} alt="Imagen Producto"/>
                    <h3 className='text-base text-[#a3a3a3]'>Phones</h3>
                    <h2 className='text-[18px] text-[#616161] mb-[18px]'>iPhone 8</h2>
                </article>
                <article className='px-[22px] bg-white shadow-md max-w-[276px] w-full'>
                    <Image className='pb-[11px] border-b border-[#d9d9d9] mx-auto block mb-[20px]' src={Img} alt="Imagen Producto"/>
                    <h3 className='text-base text-[#a3a3a3]'>Phones</h3>
                    <h2 className='text-[18px] text-[#616161] mb-[18px]'>iPhone 8</h2>
                </article>
            </section>
            <section className='text-[24px] flex items-center pt-[64px] pb-[24px] border-b border-[#d9d9d9]'>
                <span className='text-[#616161] pr-[24px] mr-[24px]'>16 of 32 products</span>
                <div className='text-[#a3a3a3] flex gap-[24px] items-center'>
                </div>
                <Image className='ml-auto' src={ArrowRight} alt="Siguiente página de productos" />
            </section>
        </div>
    </main>
  )
}

export default Products