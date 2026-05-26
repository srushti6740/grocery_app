import React from "react";
import Link from 'next/link';
import Rating from "@mui/material/Rating";
import CartItems from "./CartItems";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container">
        <div className="flex flex-col w-full lg:flex-row lg:w-[80%] m-auto gap-12">
          <div className="col1 rounded-md bg-white shadow-md h-auto w-full lg:w-[70%]">
            <div className="p-5 border-b-1 border-[rgba(0,0,0,0.1)]">
              <h3 className="text-[18px] font-[600]">Your Cart</h3>
              <p>
                There are<span className="text-primary font-[700]"> 7 </span>
                products in your cart
              </p>
              </div>

              <CartItems />
              <CartItems />
              <CartItems />

            
          </div>

          <div className="col1 w-full lg:w-[30%]">
           <div className=" rounded-md bg-white shadow-md">
            <div className="p-5 border-b-1 border-[rgba(0,0,0,0.1)]">
              <h3 className="text-[18px] font-[600]">Cart Totals</h3>
             </div>

             <div className="info py-3">
                <div className="flex justify-between items-center p-2">
                    <h5>Subtotal</h5>
                    <p className="text-red-700 font-[600]">$2,133</p>
                </div>
                  <div className="flex justify-between items-center p-2">
                    <h5>Shipping</h5>
                    <p className="text-gray-700 font-[600]">Free</p>
                </div>

                  <div className="flex justify-between items-center p-2">
                    <h5>Estimate for</h5>
                    <p className="text-gray-700 font-[600]">India</p>
                </div>
                  <div className="flex justify-between items-center p-2">
                    <h5>Total</h5>
                    <p className="text-red-700 font-[600]">$2,133</p>
                </div>
                
             </div>
            
            <div className="m-3 pb-4">
               <Button className="!text-white !bg-primary w-full !capitalize !font-[600]">Next</Button>
               
            </div>
           </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
