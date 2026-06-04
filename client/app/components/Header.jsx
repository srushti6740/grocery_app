import Link from "next/link";
import React from "react";
import Search from "./Search";
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import Nav from "@/app/components/Nav.jsx";
  
const Header = () => {
  return (
    <div className="headerWrapper py-3 sticky top-0 z-50 bg-white ">
    
    <header className="border-b-[1px] border-[rgba(0,0,0,0.1)]">
      <div className="container flex flex-wrap items-center justify-between gap-3 py-3 lg:flex-nowrap">
        <div className="logo shrink-0">
          <Link href={"/"}>
            <img src={"/logo.png"} width={230} height={61} alt="logo" className="w-[170px] sm:w-[210px] lg:w-[230px]"></img>
          </Link>
        </div>

        <div className="order-3 w-full lg:order-none lg:flex-1 lg:px-4">
          <Search />
        </div>

        <div className="flex shrink-0 items-center gap-4 sm:gap-5">
          <div className="hidden sm:flex items-center gap-3">
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

       <Nav/>
    </div>
  );
};

export default Header;
