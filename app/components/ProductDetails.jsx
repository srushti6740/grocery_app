"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
// Import Swiper styles
import "swiper/css";
import ProductZoom from "./ProductZoom";
import { Button } from "@mui/material";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import QtyBox from "./QtyBox";
import ProductRow from "@/app/components/ProductRow";

const ProductDetails = () => {

  const [isActiveTab, setIsActiveTab] = useState(0);

  return (
    <>
    <div className="flex gap-10">
      <ProductZoom />

      <div className="content my-4">
        <h1 className="text-[23px] font-[600] text-gray-600 py-3">
          Lay's American Style Cream & Onion Potato <br /> Chips 82 g
        </h1>
        <div className="flex gap-3 py-3">
          <p className="text-[14px] text-gray-600">
            Brand: <span>Lay's</span>
          </p>
          <Rating name="size-medium" defaultValue={4} />
          <p>Review(0)</p>
        </div>
        <div className="flex gap-3 py-2">
          <p className="text-[18px] text-red-600 font-[700]">$25.99</p>
          <p className="text-[18px] text-gray-400 font-[700] line-through">
            $38.10
          </p>
          <p className="text-[14px] ">
            Available In Stock:{" "}
            <span className="text-green-600 font-[700]">74,853 Items</span>
          </p>
        </div>
        <p className="py-3 pr-5 w-[75%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make va type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book
        </p>

        <div className="flex gap-3 py-4 items-center">
          <QtyBox />
         <Button className="!bg-primary !text-white"><HiOutlineShoppingCart size={20} className="mx-1"/> Add to Cart</Button>
         <div className="bg-gray-200 p-2 rounded-full"><LuHeart className="text-gray-600" size={20}/></div>
        </div>

        

      </div>
    </div>

    <div className="flex items-center gap-8 mt-8">
          <span className={`text-[18px] text-gray-800 font-[500] cursor-pointer flex pb-1  ${isActiveTab === 0 ? "border-b border-primary text-primary" : ""}`} onClick={()=>{setIsActiveTab(0)}}>Description</span>
           <span className={`text-[18px] text-gray-800 font-[500] cursor-pointer flex pb-1  ${isActiveTab === 1 ? "border-b border-primary text-primary" : ""}`} onClick={()=>{setIsActiveTab(1)}}>Review</span>
        </div>


        {

          isActiveTab === 0 && <p className="py-7 pr-40 w-[75%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make va type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book
        </p>
          
        }

         {

          isActiveTab === 1 && 
          <div className="reviews">
            <h3>Customer questions & answers</h3>
            <div className="grid col-3">

            </div>
          </div>
        }
      <ProductRow title={"Related Products"} />
    </>
  );
};

export default ProductDetails;
