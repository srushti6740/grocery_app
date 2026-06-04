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
    <section className="bg-white py-4 sm:py-5">
      <div className="container flex flex-col gap-5 lg:flex-row lg:gap-4">
        <div className="sidebarWrapper w-full lg:w-[260px] lg:shrink-0">
          <Sidebar />
        </div>

        <div className="rightContent w-full lg:flex-1 lg:pl-5">
          <div className="top-strip w-full bg-[#f1f1f1] p-3 rounded-md flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[14px] text-gray-700 px-2 font-[600]">
              There are 25 Products.
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[14px] text-gray-700 font-[600] px-2 sm:px-0">
                Sort by
              </span>
              <Button
                className="!bg-white !capitalize !text-gray-700 !py-[4px] !text-[13px] sm:!text-[14px]"
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
                <MenuItem onClick={handleClose}>A to Z size</MenuItem>
                <MenuItem onClick={handleClose}>Z to A size</MenuItem>
                <MenuItem onClick={handleClose}>High to Low</MenuItem>
                <MenuItem onClick={handleClose}>Low to High</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="my-5 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-5">
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

          <div className="flex items-center justify-center mt-5 py-5 overflow-x-auto">
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
