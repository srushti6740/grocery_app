import React from "react";
import Sidebar from "../components/Sidebar";

const ProductPage = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container flex gap-4">
        <div className="sidebarWrapper w-[25%]">
          <Sidebar />
        </div>

        <div className="rightContent w-[75%] bg-gray-300 h-[1000px]">

        </div>
      </div>
    </section>
  );
};

export default ProductPage;