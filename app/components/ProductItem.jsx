import React from 'react'
import Link from 'next/link'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


const ProductItem = () => {
  return (
    <div className='productItem shadow-md w-full bg-white rounded-md'>
      <Link href={"/products"} className='img overflow-hidden group flex p-3 sm:p-4'>
            <img src={"/pro1.png"} alt="Product Image" className='w-full object-contain transition group-hover:scale-105'/>
      </Link>

        <div className='info p-3'>
            <Link href={"/products"} className='text-[14px] text-gray-[500] font-[500] hover:text-primary'>100 Percent Apple 
            Juice – 64 fl oz Bottle</Link>
            <br />
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size='small' />

            <div className='flex flex-wrap items-center justify-between gap-2'>
                <span className='text-[#CB000] text-[18px] font-[600]'>$25.99</span>
                <span className='font-[600] text-gray-500'>$38.10</span>

            </div>

            <Button className="btn-border-g mt-2 text-[14px]">Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductItem
