"use client";
import React, { useState } from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaCaretDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdClose } from "react-icons/io";

const CartItems = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="productRow flex items-center gap-5 border-b-1 border-[rgba(0,0,0,0.1)]">
      <Link href={"product/5645"} className="img w-[15%] group">
        <img
          src={"/pro1.png"}
          alt="img"
          className="w-full transition group-hover:scale-90"
        />
      </Link>

      <div className="flex flex-col gap-1 p-3 w-[70%]">
        <span>Fortune</span>
        <Link href={"product/5645"} className="text-[18px] font-[600]">
          Fortune Sunlite Refined Sunflower Oil 1 L
        </Link>
        <Rating
          name="half-rating"
          defaultValue={5}
          precision={0.5}
          className=""
        />

        <div className="flex gap-3 py-2">
          <div className="relative">
            <Button
              className="!bg-gray-200 !text-gray-600 !capitalize"
              onClick={handleClick}
            >
              Qty: 1 <FaCaretDown />
            </Button>
            <Menu
              id="qtydrop"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{}}
              transformOrigin={{}}
              className="absolute"
            >
              {Array.from({ length: 15 }).map((_, index) => (
                <MenuItem key={index} onClick={() => handleClose(index + 1)}>{index + 1}</MenuItem>
              ))}
            </Menu>
          </div>
          <p className="text-[18px] text-red-600 font-[700]">$25.99</p>
          <p className="text-[18px] text-gray-400 font-[700] line-through">
            $38.10
          </p>
          <p className="text-[18px] text-green-500 font-[700]">14% OFF</p>
        </div>
      </div>

      <IoMdClose size={20} className="cursor-pointer hover:text-primary" />
    </div>
  );
};

export default CartItems;
