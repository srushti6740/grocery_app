import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
const Nav = () => {
  return (
    <nav>
      <div className="container flex items-center justify-between gap-7">
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600]  hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Fruits & Vegetables
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Meats & Seafood
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Breaksfast & Dairy
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Breads & Bakery
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Beverages
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Frozen Foods
        </Link>

        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Biscuits & Snacks
        </Link>
        <Link
          href="/"
          className="text-[16px] text-gray-800 font-[600] hover:text-primary"
        >
          Grocery & Staples
        </Link>
        <Link href="/" className="text-[16px] text-gray-800">
          Home
        </Link>
        <div className="relative group">
          <span className="text-[17px] text-gray-800 font-[600] hover:text-primary flex items-center gap-1 cursor-pointer rounded-md  overflow-hidden ">
            More
            <FaAngleDown size={18}  />
            <div className="dropdown-menu flex flex-col absolute top-[100%] invisible opacity-0 right-0 bg-white shadow-md rounded-md overflow-hidden transition group-hover:opacity-100 group-hover:visible w-[200px] pt-4">
                <Link href='' className="text-[16px] text-gray-800 font-[600] hover:text-primary py-2 px-2">Grocery & Staples</Link>
                <Link href='' className="text-[16px] text-gray-800 font-[600] hover:text-primary py-2 px-2">Grocery & Staples</Link>
                <Link href='' className="text-[16px] text-gray-800 font-[600] hover:text-primary py-2 px-2">Grocery & Staples</Link>
                 <Link href='' className="text-[16px] text-gray-800 font-[600] hover:text-primary py-2 px-2">Grocery & Staples</Link>

            </div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
