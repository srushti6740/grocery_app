"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Link from "next/link";

const Banners = () => {
  return (
    <div>
      <section className="Banners py-4 bg-white">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="py-3 px-2">
              <Link href={"/"} className="item rounded-md group overflow-hidden w-full">
                <img src={"/banner.png"} alt="banner" className="w-full transition group-hover:scale-105" />
              </Link>
            </SwiperSlide>
             <SwiperSlide className="py-3 px-2">
              <Link href={"/"} className="item rounded-md group overflow-hidden w-full ">
                <img src={"/banner2.png"} alt="banner" className="w-full transition group-hover:scale-105" />
              </Link>
            </SwiperSlide>
             <SwiperSlide className="py-3 px-2">
              <Link href={"/"} className="item group overflow-hidden w-full rounded-md">
                <img src={"/banner3.png"} alt="banner" className="w-full transition group-hover:scale-105" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Banners;
