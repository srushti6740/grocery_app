"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "@/app/components/ProductItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductPage = () => {
  const [sortBy, setSortBy] = useState("name, A to Z");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="py-5 bg-white">
      <div className="container flex gap-4">
        <div className="sidebarWrapper w-[15%]">
          <Sidebar />
        </div>

        <div className="rightContent w-[85%] pl-5">
          <div className="top-strip w-full bg-[#f1f1f1] p-2 rounded-md h-12 flex items-center justify-between">
            <span className="text-[14px] text-gray-700 px-2 font-[600]">
              There are 25 Products.
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-gray-700 font-[600]">
                Sort by
              </span>
              <Button
                className="!bg-white !capitalize !text-gray-700 !py-[4px]"
                onClick={handleClick}
              >
                {sortBy}
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{}}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-5 my-5">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
             <ProductItem />
            <ProductItem />
             <ProductItem />
            <ProductItem />
          </div>

          <div className="flex items-center justify-center mt-5 py-5">
            <Stack spacing={2}>
            
              <Pagination count={10} size="large" />
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
