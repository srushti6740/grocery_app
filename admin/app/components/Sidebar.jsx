import React from "react";
import { RxDashboard } from "react-icons/rx";
import { PiImageSquareBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { LuUsersRound } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoImagesOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const Sidebar = () => {
  const sidebarTabs = [
    {
      name: "Dashboard",
      icon: <RxDashboard size={22} />,
      href: "",
    },
    {
      name: "Home Slides",
      icon: <PiImageSquareBold size={22} />,
      href: "null",
      children: [
        {
          name: "Home Slides List",
          href: "/home-slides",
        },
        {
          name: "Add Slide",
          href: "/add-home-slides",
        },
      ],
    },
    {
      name: "Category",
      icon: <BiCategory size={22} />,
      href: "null",
      children: [
        {
          name: "All Category",
          href: "/all-category",
        },
        {
          name: "Add Category",
          href: "/add-category",
        },
      ],
    },
    {
      name: "Products",
      icon: <RxDashboard size={22} />,
      href: "null",
      children: [
        {
          name: "All Products",
          href: "/all-products",
        },
        {
          name: "Add Product",
          href: "/add-product",
        },
      ],
    },
    {
      name: "Users",
      icon: <LuUsersRound size={22} />,
      href: "",
    },
    {
      name: "Orders",
      icon: <IoBagCheckOutline size={22} />,
      href: "",
    },
    {
      name: "Banners",
      icon: <IoImagesOutline size={22} />,
      href: "",
    },
    {
      name: "Banners",
      icon: <AiOutlineLogout size={22} />,
      href: "",
    },
  ];

  return (
    <div>
      <aside className="bg-white w-full px-2">
        <div className="p-4">
          <img src="/logo.png" alt="logo" />
        </div>

        <div className="scrolling">
          {sidebarTabs &&
            sidebarTabs.map((item, index) => {
              return (
                <>
                  {item?.href !== null ? (
                    <Link href={item?.href} key={index}>
                      <Button className="w-full! !text-left !justify-start !capitalize text-gray-800! text-[15px]! hover:bg-gray-200! px-4! py-[6px]!  gap-3">
                        {item?.icon}
                        {item?.name}

                        {item?.children && (
                          <FaAngleDown size={15} className="ml-auto" />
                        )}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="w-full! !text-left !justify-start !capitalize text-gray-800! text-[15px]! hover:bg-gray-200! px-4! py-[6px]!  gap-3"
                      key={index}
                    >
                      {item?.icon}
                      {item?.name}

                      {item?.children && (
                        <FaAngleDown size={15} className="ml-auto" />
                      )}
                    </Button>
                  )}
                  {item?.children && (
                    <div className="dropdown">
                      {item?.children?.map((tab, index_) => {
                        return (
                          <Link className="text-[13px] fex items-center gap-3">
                            {tab?.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
