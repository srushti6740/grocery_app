import Link from "next/link";
import React from "react";
import Search from "./Search";
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";

  
const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-3">
        <div className="logo">
          <Link href={"/"}>
            <img src={"/logo.png"} width={230} height={61} alt="logo"></img>
          </Link>
        </div>

        <Search />

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Link href={"/login"} className="hover:text-primary">
              Login
            </Link>
            <span>|</span>
            <Link href={"/register"} className="hover:text-primary">
              Register
            </Link>
          </div>

          <div className="flex item-center gap-5 ">
            <Link href={'/wishlist'} className="relative flex group">
              <span className="bg-[#DC2626] w-6 h-6 text-white rounded-full justify-center text-center align-center absolute -top-[10px] rounded-full -right-[17px] z-50">3</span>
              <CiHeart size={25} className="text-gray-700 group-hover:text-primary"/>
            </Link>

             <Link href={'/cart'} className="relative flex group">
              <span className="bg-[#DC2626] w-6 h-6 text-white rounded-full justify-center text-center align-center absolute -top-[10px] rounded-full -right-[17px] z-50">1</span>
              <IoBagAddOutline size={25} className="text-gray-700 group-hover:text-primary"/>
            </Link>
          </div>
        </div>
      </div>
     
    </header>
  );
};

export default Header;
