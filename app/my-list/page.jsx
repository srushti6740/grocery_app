import React from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsBagPlus } from "react-icons/bs";
import { Button } from "@mui/material";
import { TbLogout } from "react-icons/tb";
import CartItems from "../cart/CartItems";

const Cart = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container">
        <div className="flex flex-col w-full lg:flex-row lg:w-[80%] m-auto gap-12">
          <div className="col1 w-full lg:w-[30%]">
            <div className=" rounded-md shadow-md">
              <div className="flex flex-col items-center justify-center p-5 border-b-1 bg-white border-[rgba(0,0,0,0.1)]">
                <img src={"/profile.png"} className="w-[25%]" />
                <h3 className="text-[14px] text-center font-[400]">RINKU VERMA</h3>

                <h3 className="text-[14px] text-center font-[400]">advanceduitechniques@gmail.com</h3>
              </div>

              <div className="info py-3">
                <div className="flex items-center px-4 py-2 gap-2 ">
                  <h5><FaRegUser /></h5>
                  <p className="text-black-600 font-[500]">My Profile</p>
                </div>
                <div className="flex items-center px-4 py-2 gap-2 ">
                  <h5><MdOutlineLocationOn /></h5>
                  <p className="text-black-600 font-[500]">Address</p>
                </div>

                <div className="flex items-center px-4 py-2 gap-2 ">
                  <h5><FaRegHeart /></h5>
                  <p className="text-black-600 font-[500]">My List</p>
                </div>
                <div className="flex items-center px-4 py-2 gap-2 ">
                  <h5><BsBagPlus /></h5>
                  <p className="text-black-600 font-[500]">My Orders</p>
                </div>
                <div className="flex items-center px-4 py-2 gap-2 ">
                  <h5><TbLogout /></h5>
                  <p className="text-black-600 font-[500]">Logout</p>
                </div>
              </div>

              
            </div>
          </div>
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

export default Cart;
