import { Button } from "@mui/material";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sticky top-[150px]">
      <div className="box">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-[600] text-gray-700">
            Shop by Category
          </h3>
          <Button className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full"><FaAngleDown /></Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
