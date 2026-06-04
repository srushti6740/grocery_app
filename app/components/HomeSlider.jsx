"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div>
      <div className='homeSlider'>
          <div className='container'>
            <Swiper navigation={true}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Navigation, Autoplay]} className="mySwiper">
            <SwiperSlide>
            <div className='item'>
                <Image src={"/slider.png"} alt="slider" width={1344} height={514} className='w-full rounded-md object-cover aspect-[16/8] sm:aspect-[16/6] lg:aspect-[1344/514]'>

                </Image>
            </div>
            </SwiperSlide>
             <SwiperSlide>
            <div className='item'>
                <Image src={"/slider.png"} alt="slider" width={1344} height={514} className='w-full rounded-md object-cover aspect-[16/8] sm:aspect-[16/6] lg:aspect-[1344/514]'>

                </Image>
            </div>
            </SwiperSlide>
             <SwiperSlide>
            <div className='item'>
                <Image src={"/slider.png"} alt="slider" width={1344} height={514} className='w-full rounded-md object-cover aspect-[16/8] sm:aspect-[16/6] lg:aspect-[1344/514]'>

                </Image>
            </div>
            </SwiperSlide>
         </Swiper>
          </div>
      </div>
    </div>
  )
}

export default HomeSlider
