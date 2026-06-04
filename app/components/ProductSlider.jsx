"use client"    
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import ProductItem from "@/app/components/ProductItem";


const ProductSlider = () => {
  return (
    <div className='productSlider py-4'>
       <Swiper
        slidesPerView={1.2}
        spaceBetween={12}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 22,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      <SwiperSlide className='py-3 px-2'><ProductItem /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductSlider
