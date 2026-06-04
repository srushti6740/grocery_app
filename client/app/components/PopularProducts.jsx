"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "@/app/components/ProductSlider";

const PopularProducts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <section className="bg-white py-5">
        <div className="container">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="col1 w-full md:w-[40%]">
              <h2 className="text-[20px] text-gray-800 font-[600]">
                Popular Products
              </h2>
              <p className="text-sm text-gray-600">Do not miss the current offer</p>
            </div>
            <div className="col2 w-full md:w-[60%] flex md:items-center md:justify-end overflow-hidden">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
              </Tabs>
            </div>
          </div>

            <ProductSlider />
        
        </div>
      </section>
    </div>
  );
};

export default PopularProducts;
