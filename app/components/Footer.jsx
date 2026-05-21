import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { CiChat1 } from "react-icons/ci";
import Link from "next/link";
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
            <p>
              ClassyShop- Mega Super Store <br /> 507 Union Trade Center France
            </p>
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
          <div className="col2 flex flex-col w-[20%]">
            <h3 className="font-[600] text-[17px] py-2">Products</h3>
            <Link href={"/"} className="py-1">Price Drop</Link>
            <Link href={"/"} className="py-1">New Products</Link>
            <Link href={"/"} className="py-1">Best Sales</Link>
            <Link href={"/"} className="py-1">Contact Us</Link>
            <Link href={"/"} className="py-1">Sitemap</Link>
          </div>

          <div className="col2 flex flex-col w-[20%]">
            <h3 className="font-[600] text-[17px] py-2">Our Company</h3>
            <Link href={"/"} className="py-1">Price Drop</Link>
            <Link href={"/"} className="py-1">New Products</Link>
            <Link href={"/"} className="py-1">Best Sales</Link>
            <Link href={"/"} className="py-1">Contact Us</Link>
            <Link href={"/"} className="py-1">Sitemap</Link>
          </div>
          <div className="col2 flex flex-col w-[30%]">
            <h3 className="text-gray-900 text-[17px] py-3 font-[600]">Subscribe Newsletter</h3>
            <p>
              Subscribe to our newsletter to get news about special discourts.
            </p>
            <input type="text" placeholder="    Your Email Address" className="border-1 py-2 rounded mt-3" />
            <div>
            <button className="bg-primary text-white py-2 mt-3 px-4 rounded">Subscribe</button>
            </div>
            <div className="flex gap-1 py-2">
            <input type="checkbox" /> <p>I agree to the terms and condition and the privacy policy</p></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
