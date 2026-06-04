"use client"
import React from "react";
// Import Swiper styles

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import {Navigation } from 'swiper/modules';

const CatSlider = () => {
  return (
    <div className="py-4">
      <div className="container">
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 10,
              spaceBetween: 30,
            },
          }}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
         
          navigation={true}
          modules={[ Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
          <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"/>
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link href={"/"} className='group'>
            <div className="bg-white p-3 sm:p-5 mt-5 w-full rounded-md shadow-md flex items-center justify-center">
                <img src={'/cat1.png'} alt="Category" className="transition group-hover:scale-105"  />
            </div>
            <h4 className="text-[13px] sm:text-[15px] text-center mt-2 font-[600] group-hover:text-primary">Fruits & Frozen</h4>
            </Link>
          </SwiperSlide>
        
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
