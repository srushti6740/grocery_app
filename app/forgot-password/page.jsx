"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Button } from "@mui/material";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPassword = () => {
  const [isshowPassword, setIsshowPassword] = useState(false);

  return (
    <section className="py-10 w-full  bg-gray-100 flex items-center justify-center relative overflow-hidden">
      <div className="container">
        <div className="bg-white rounded-md shadow-md border border-[rgba(0,0,0,0.1)] max-w-[500px] m-auto p-5">
        <div className="flex items-center justify-center">
            <img src={"/lock.png"} className="w-[15%]"  /></div>
          <h3 className="text-[20px] font-[600] py-4 text-center">
            Forgot Password
          </h3>
          <p className="text-center">Enter your registered email address and we’ll send you a 
            One-Time Password (OTP) to reset your password.</p>

          <form>
            <div className="py-3 mx-3">
              <TextField
                id="email"
                label="Email Id"
                className="w-full"
                variant="outlined"
              />
            </div>

            <div className="py-3 mx-3 relative">
              
              <div className="my-4 w-full relative">
                <Button className="w-full !bg-primary !text-white !font-[600]">
                  Submit
                </Button>
              </div>

              <div className="text-center text-gray-500">
                <Link href={"/login"} className="flex items-center justify-center">
                    <FaArrowLeftLong /> <span>&nbsp; Back to login</span>
                  </Link>
                
              
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="circle1 w-[400px] h-[400px] rounded-full bg-primary opacity-25 absolute -bottom-[50px] -left-[14%] " ></div>
       <div className="circle2 w-[400px] h-[400px] rounded-full bg-primary opacity-25 absolute -top-[50px] -right-[14%] " ></div>
    </section>
  );
};

export default ForgotPassword;
