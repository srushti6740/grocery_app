import React from 'react'
import ProductSlider from "@/app/components/ProductSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const ProductRow = (props) => {
  return (
    <div>
      <section className="bg-white py-4">
      <div className="container">
         <div className="flex items-center justify-between gap-3">
              <h2 className="text-[20px] text-gray-800 font-[600]">
               {props?.title}
              </h2>
              <Link href={"/products"}><p className="flex shrink-0 items-center text-center text-sm sm:text-base hover:text-primary">View All <span> <FaLongArrowAltRight size={20} /> </span></p></Link>
            </div>
        <ProductSlider />
      </div>
    </section>
    </div>
  )
}

export default ProductRow
