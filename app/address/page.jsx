"use client";
import React,{useState} from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Account from "../my-list/account";
import { HiDotsVertical } from "react-icons/hi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Checkout = () => {
      const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="bg-gray-100 py-12">
      <div className="container">
        <div className="flex flex-col w-full lg:flex-row lg:w-[80%] m-auto gap-12">
          <Account />
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
                <div className="w-full">
                  <h5 className="bg-gray-300 w-fit text-black p-2 rounded-lg">
                    Home
                  </h5>
                  <div className="flex gap-4 font-[600] text-[15px] py-2">
                    <h5>RINKU VERMA</h5>
                    <p>+919873798202</p>
                  </div>
                  <p>H No 222 Street No 6 Adarsh Mohalla Delhi India Delhi</p>
                </div>
                <div className="text-primary w-full lg:w-[5%] font-[500] text-end">
                  <HiDotsVertical  onClick={handleClick}/>

                   <Menu
                    id="fade-menu"
                    slotProps={{
                    list: {
                        'aria-labelledby': 'fade-button',
                    },
                    }}
                    slots={{ transition: Fade }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
              
                </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
