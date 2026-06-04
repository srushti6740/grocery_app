"use client"
import React from "react";
import Link from "next/link";
import CartItems from "../cart/CartItems";
import { usePathname } from "next/navigation";
import Account from "./account";

const MyAccount = () => {
  
  return (
    <div className="bg-gray-200 py-12">
      <div className="container">
        <div className="flex flex-col w-full lg:flex-row lg:w-[80%] m-auto gap-12">
          <Account />
          <div className="col1 rounded-md bg-white shadow-md h-auto w-full lg:w-[70%]">
            <div className="p-5 border-b-1 border-[rgba(0,0,0,0.1)]">
              <h3 className="text-[18px] font-[600]">My List</h3>
              <p>
                There are<span className="text-primary font-[700]"> 7 </span>
                products in my List
              </p>
            </div>

            <CartItems />
            <CartItems />
            <CartItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
