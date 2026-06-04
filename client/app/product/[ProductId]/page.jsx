"use client"
import React from 'react'
import ProductDetails from '../../components/ProductDetails'


const productDetails = ({ params }) => {
  return (
    <section className='py-1 bg-white gap-10'>
      <div className="container">

        <ProductDetails />

      </div>
    </section>
  )
}

export default productDetails
