import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { CiChat1 } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] py-8">
      <div className="container">
        <div className="flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 lg:pb-8 lg:px-5 scrollableBox footerBoxWrap">
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <LiaShippingFastSolid
              size={40}
              className="transition-all duration-300 group-hover:text-primary"
            />
            <h3 className="font-[600] mt-1">Free Shipping</h3>
            <p className="text-gray-500 text-[13px] mt-3">
              For all Orders over $100
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <PiKeyReturn
              size={40}
              className="transition-all duration-300 group-hover:text-primary"
            />
            <h3 className="font-[600] mt-1">30 Days Return</h3>
            <p className="text-gray-500 text-[13px] mt-3">
              For an Exchange Product
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BsWallet2
              size={40}
              className="transition-all duration-300 group-hover:text-primary"
            />
            <h3 className="font-[600] mt-1">Secured Payment</h3>
            <p className="text-gray-500 text-[13px] mt-3">
              Payment Cards Accepted
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <IoGiftOutline
              size={40}
              className="transition-all duration-300 group-hover:text-primary"
            />
            <h3 className="font-[600] mt-1">Special Gifts</h3>
            <p className="text-gray-500 text-[13px] mt-3">
              Payment Cards Accepted
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BiSupport
              size={40}
              className="transition-all duration-300 group-hover:text-primary"
            />
            <h3 className="font-[600] mt-1">Support 24/7</h3>
            <p className="text-gray-500 text-[13px] mt-3">Contact Us Anytime</p>
          </div>
        </div>

        <hr />

        <div className="flex items-center justify-between py-8 gap-2">
          <div className="col1 flex-col gap-4 border-r-[1px] border-[rgba(0,0,0,0.2)] w-[25%]">
            <h3 className="font-[600] py-3">Contact Us</h3>
            <p>ClassyShop- Mega Super Store <br /> 507 Union Trade Center France</p>
            <p className="py-2">sales@yourcompany.com</p>
            <h2 className="text-primary font-bold">(+91) 96456 84654</h2>

            <div className="flex items-center gap-1">
              <CiChat1 size={30} className="text-primary" />
              <p className="py-3">
                Online Chat <br />
                Get Exper Help
              </p>
            </div>
          </div>
          <div className="col2 flex-col w-[30%]">
            
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
