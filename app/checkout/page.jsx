"use client";
import React from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Checkout = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container">
        <div className="flex flex-col w-full lg:flex-row lg:w-[80%] m-auto gap-12">
          <div className="col1 rounded-md bg-white shadow-md h-auto w-full lg:w-[70%]">
            <div className="p-5 flex items-center justify-between border-b-1 border-[rgba(0,0,0,0.1)]">
              <h3 className="text-[18px] font-[600]">
                Select Delivery Address
              </h3>
              <Link
                href={"/"}
                className="btn-border-g p-2 text-primary rounded-lg font-[600]"
              >
                + Add New Address
              </Link>
            </div>

            <div className="bg-gray-200 rounded-lg m-5 p-3">
              <div className="flex">
                <div>
                  <FormControlLabel value="fdgd" control={<Radio />} />
                </div>
                <div className="w-full lg:w-[40%]">
                  <h5>Home</h5>
                  <h5>RINKU VERMA</h5>
                  <p>
                    H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi near
                    govt school
                  </p>
                  <p>+919873798202</p>
                </div>
                <div className="text-primary w-full lg:w-[50%] font-[500] text-end">
                
                  EDIT
                </div>
              </div>
            </div>
          </div>

          <div className="col1 w-full lg:w-[30%]">
            <div className=" rounded-md bg-white shadow-md">
              <div className="p-3 py-5 border-b-1 border-[rgba(0,0,0,0.1)]">
                <h3 className="text-[18px] font-[400]">Your Order</h3>
              </div>
              <div className="flex justify-between items-center p-2 border-b-1 border-[rgba(0,0,0,0.1)]">
                <h5 className="">Product</h5>
                <h5>Subtotal</h5>
              </div>

              <div className="info py-3 !max-h-[300px] overflow-y-auto">
                <div className="flex justify-around md:justify-normal items-center p-2">
                  <img
                    src={"/pro1.png"}
                    width={50}
                    alt="product"
                    className="lg:w-[20%]"
                  />
                  <div className="flex flex-col lg:w-[60%] lg:w-[20%]">
                    <h5>Fortune Sunlite Refi...</h5>
                    <p>Qty : 1</p>
                  </div>
                  <p className="text-gray-700 font-[600] lg:w-[20%]">$99</p>
                </div>
                <div className="flex justify-around md:justify-normal items-center p-2">
                  <img
                    src={"/pro1.png"}
                    width={50}
                    alt="product"
                    className="lg:w-[20%]"
                  />
                  <div className="flex flex-col lg:w-[60%] lg:w-[20%]">
                    <h5>Fortune Sunlite Refi...</h5>
                    <p>Qty : 1</p>
                  </div>
                  <p className="text-gray-700 font-[600] lg:w-[20%]">$99</p>
                </div>
                <div className="flex justify-around md:justify-normal items-center p-2">
                  <img
                    src={"/pro1.png"}
                    width={50}
                    alt="product"
                    className="lg:w-[20%]"
                  />
                  <div className="flex flex-col lg:w-[60%] lg:w-[20%]">
                    <h5>Fortune Sunlite Refi...</h5>
                    <p>Qty : 1</p>
                  </div>
                  <p className="text-gray-700 font-[600] lg:w-[20%]">$99</p>
                </div>
                <div className="flex justify-around md:justify-normal items-center p-2">
                  <img
                    src={"/pro1.png"}
                    width={50}
                    alt="product"
                    className="lg:w-[20%]"
                  />
                  <div className="flex flex-col lg:w-[60%] lg:w-[20%]">
                    <h5>Fortune Sunlite Refi...</h5>
                    <p>Qty : 1</p>
                  </div>
                  <p className="text-gray-700 font-[600] lg:w-[20%]">$99</p>
                </div>

                <div className="flex justify-around md:justify-normal items-center p-2">
                  <img
                    src={"/pro1.png"}
                    width={50}
                    alt="product"
                    className="lg:w-[20%]"
                  />
                  <div className="flex flex-col lg:w-[60%]">
                    <h5>Fortune Sunlite Refi...</h5>
                    <p>Qty : 1</p>
                  </div>
                  <p className="text-gray-700 font-[600]  lg:w-[20%]">$99</p>
                </div>
              </div>

              <div className="m-3 pb-4">
                <Button className="!text-white !bg-primary w-full !capitalize !font-[600] !text-[16px]">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
