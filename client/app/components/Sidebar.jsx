"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Collapse } from "react-collapse";
import { MdKeyboardArrowUp } from "react-icons/md";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Sidebar = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(true);

  const [isPriceFilter, setOpenPriceFilter] = useState(true);

  const [price, setPrice] = useState([0, 30000]);

  return (
    <aside className="lg:sticky lg:top-[150px]">
      <div className="box rounded-md border border-gray-100 bg-white p-3 shadow-sm lg:border-0 lg:p-0 lg:shadow-none">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] font-[600] text-gray-700">
            Shop by Category
          </h3>
          <Button
            className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full"
            onClick={() => setIsOpenFilter(!isOpenFilter)}
          >
            {isOpenFilter === true ? <MdKeyboardArrowUp /> : <FaAngleDown />}
          </Button>
        </div>
        <Collapse isOpened={isOpenFilter}>
          <div className="scroll max-h-[220px] overflow-y-auto overflow-x-hidden lg:max-h-[250px]">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Fruits & Vegetables"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Meats & Seafood"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Breaksfast & Dairy"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Breads & Bakery"
              />

              <FormControlLabel control={<Checkbox />} label="Frozen Foods" />

              <FormControlLabel control={<Checkbox />} label="Beverages" />
              <FormControlLabel
                control={<Checkbox />}
                label="Biscuits & Snacks"
              />
              <FormControlLabel
                control={<Checkbox />}
                label=" Grocery & Staples"
              />
            </FormGroup>
          </div>
        </Collapse>
        <div className="py-2">
          <h3 className="text-[16px] font-[600] text-gray-700 py-5">
            Filter By Price
          </h3>

          <RangeSlider
            value={price}
            onInput={setPrice}
            min={100}
            max={30000}
            step={5}
          />
          <div className="flex item-center justify-between mt-2 text-sm">
            <span>${price[0]}</span>
            <span>${price[1]}</span>
          </div>
        </div>
        <Collapse isOpened={isPriceFilter}>
          <div className="flex items-center justify-between mb-3 mt-5">
            <h3 className="text-[16px] font-[600] text-gray-700">
              Filter By Rating
            </h3>
            <Button className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full">
              <FaAngleDown />
            </Button>
          </div>
          <Stack spacing={1}>
            <div className="item flex items-center">
              <FormControlLabel control={<Checkbox />} />
              <Rating name="read-only" value={5} readOnly />
            </div>
            <div className="item flex items-center">
              <FormControlLabel control={<Checkbox />} />
              <Rating name="read-only" value={4} readOnly />
            </div>
            <div className="item flex items-center">
              <FormControlLabel control={<Checkbox />} />
              <Rating name="read-only" value={3} readOnly />
            </div>
            <div className="item flex items-center">
              <FormControlLabel control={<Checkbox />} />
              <Rating name="read-only" value={2} readOnly />
            </div>
            <div className="item flex items-center">
              <FormControlLabel control={<Checkbox />} />
              <Rating name="read-only" value={1} readOnly />
            </div>
          </Stack>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
