"use client"
import React from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsBagPlus } from "react-icons/bs";
import { Button } from "@mui/material";
import { TbLogout } from "react-icons/tb";
import CartItems from "../cart/CartItems";
import { usePathname } from "next/navigation";


const Account = () => {
  const NavLinks = [
    {
      name: "My Profile",
      href: "/my-profile",
      icon: <FaRegUser size={20} />,
    },
    {
      name: "Address",
      href: "/address",
      icon: <MdOutlineLocationOn size={20} />,
    },
    {
      name: "My List",
      href: "/my-list",
      icon: <FaRegHeart size={20} />,
    },
    {
      name: "My Orders",
      href: "/my-orders",
      icon: <BsBagPlus size={20} />,
    },
    {
      name: "Logout",
      href: "/logout",
      icon: <TbLogout size={20} />,
    }
  ];

  return (

          <div className="col1 w-full lg:w-[30%]">
            <div className=" rounded-md shadow-md">
              <div className="flex flex-col items-center justify-center p-5 border-b-1 bg-white border-[rgba(0,0,0,0.1)]">
                <img src={"/profile.png"} className="w-[25%]" />
                <h3 className="text-[14px] text-center font-[400]">
                  RINKU VERMA
                </h3>

                <h3 className="text-[14px] text-center font-[400]">
                  advanceduitechniques@gmail.com
                </h3>
              </div>

              <div className="info py-3 myAcc">
                {NavLinks?.map((item, index) => {
                  const isActive = usePathname === item.href;
                  return(
                  <Link href={item.href} className="!flex" key={index}>
                    <Button className={`!items-center !px-4 !py-2 !gap-2 !text-black w-full !justify-start  ${isActive === true && 'active'}`}>
                     {item.icon}
                      {item.name}
                    </Button>
                  </Link>
                  );
                })}

                
              </div>
            </div>
          </div>
          
        
  );
};
export default Account;