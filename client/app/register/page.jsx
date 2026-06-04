"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Button } from "@mui/material";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [isshowPassword, setIsshowPassword] = useState(false);

  return (
    <section className="py-10 w-full  bg-gray-100 flex items-center justify-center relative overflow-hidden">
      <div className="container">
        <div className="bg-white rounded-md shadow-md border border-[rgba(0,0,0,0.1)] max-w-[500px] m-auto p-5">
          <h3 className="text-[20px] font-[600] py-4 text-center">
            Register with a new account
          </h3>

          <form>
            <div className="py-3 mx-3">
              <TextField
                id="fullname"
                label="Full Name"
                className="w-full"
                variant="outlined"
              />
            </div>

            <div className="py-3 mx-3">
              <TextField
                id="email"
                label="Email"
                className="w-full"
                variant="outlined"
              />
            </div>

            <div className="py-3 mx-3 relative">
              <TextField
                id="password"
                label="Password"
                type={isshowPassword ? "text" : "password"}
                className="w-full"
                variant="outlined"
              />

              <button
                type="button"
                className="absolute right-[15px] top-[15%] translate-y-[-50%]"
                onClick={() => setIsshowPassword(!isshowPassword)}
              >
                {isshowPassword ? <FaEye /> : <FaEyeSlash />}
              </button>

              <div className="my-4 w-full relative">
                <Button className="w-full !bg-primary !text-white">
                  Register
                </Button>
              </div>

              <div className="text-center text-gray-500">
                <p>
                  Already an Account?{" "}
                  <Link href={"/login"}>
                    <span className="text-primary font-[600]">Login</span>{" "}
                  </Link>{" "}
                </p>
                <p className="py-2">Or continue with social account</p>
                <Button
                  loading={false}
                  loadingPosition="start"
                  startIcon={<FcGoogle />}
                  variant="outlined"
                  className="w-full !bg-gray-200 !text-gray-800 !font-[600] !py-3 !border !border-[rgba(0,0,0,0.1)]"
                >
                   Sign Up With Google
                </Button>
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

export default Register;
