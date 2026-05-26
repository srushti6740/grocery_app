"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Button } from "@mui/material";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isshowPassword, setIsshowPassword] = useState(false);

  return (
    <section className="py-10 w-full  bg-gray-100 flex items-center justify-center relative overflow-hidden">
      <div className="container">
        <div className="bg-white rounded-md shadow-md border border-[rgba(0,0,0,0.1)] max-w-[500px] m-auto p-5">
          <h3 className="text-[20px] font-[600] py-4 text-center">
            Verify OTP
          </h3>
          <p className="text-center">OTP send to <span className="text-primary"> rinkuv.planetc@gmail.com</span></p>

          <form>
            

            <div className="py-3 mx-3 relative">
              
              <div className="my-4 w-full relative">
                <Button className="w-full !bg-primary !text-white !font-[600]">
                  Verify OTP
                </Button>
              </div>

              
            </div>
          </form>
        </div>
      </div>

      <div className="circle1 w-[400px] h-[400px] rounded-full bg-primary opacity-25 absolute -bottom-[50px] -left-[14%]" ></div>
      <div className="circle2 w-[400px] h-[400px] rounded-full bg-primary opacity-25 absolute -top-[50px] -right-[14%]" ></div>
    </section>
  );
};

export default Login;
