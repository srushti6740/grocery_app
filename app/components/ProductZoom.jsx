"use client"
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


const ProductZoom = () => {

      const [slideIndex, setSlideIndex] = useState(0);
      const zoomSliderBig = useRef();
      const zoomSliderSml = useRef();
    
      const gotoSlide = (index) =>{
        setSlideIndex(index)
        zoomSliderBig.current.swiper.slideTo(index);
        zoomSliderSml.current.swiper.slideTo(index);
      }

  return (

         <div className="imageWrapper w-[30%]">
      <div className="productImages  border border-[rgba(0,0,0,0.1)] p-5 rounded-lg overflow-hidden">
         <Swiper className="bigSwiper" ref={zoomSliderBig}>
            <SwiperSlide>
              <div className="item">
              <InnerImageZoom zoomType="hover" zoomScale={1} src={"/pro.png"} />
              
              </div>
            </SwiperSlide>
                <SwiperSlide><div className="item">
                <InnerImageZoom zoomType="hover" zoomScale={1} src={"/pro1.avif"} />
              </div></SwiperSlide>
                <SwiperSlide><div className="item">
                <InnerImageZoom zoomType="hover" zoomScale={1} src={"/pro2.avif"}/>
              </div></SwiperSlide>
                <SwiperSlide><div className="item">
                 <InnerImageZoom zoomType="hover" zoomScale={1} src={"/pro3.avif"}/>
              </div></SwiperSlide>
                <SwiperSlide><div className="item">
                 <InnerImageZoom zoomType="hover" zoomScale={1} src={"/pro4.avif"} />
              </div>
              </SwiperSlide>
      
         </Swiper>
      </div>
      <div className="productImages py-4">
         <Swiper className="smlSwiper" 
         ref={zoomSliderSml}
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
          clickable: true,
          
          }}>
            <SwiperSlide className="p-1 rounded overflow-hidden cursor-pointer">
              <div className={`border item ${slideIndex === 0 ? "border-[rgba(0,0,0,0.4)]" : "border-[rgba(0,0,0,0.1)]"}`} onClick={()=>gotoSlide(0)}>
                <img src={"/pro.png"} className="w-full" alt="Product Image" width="80" height="80" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-1 rounded overflow-hidden cursor-pointer"><div className={`border item ${slideIndex === 1 ? "border-[rgba(0,0,0,0.4)]" : "border-[rgba(0,0,0,0.1)]"}`} onClick={()=>gotoSlide(1)}>
                <img src={"/pro1.avif"} className="w-full" alt="Product Image" width="80" height="80" />
              </div></SwiperSlide>
            <SwiperSlide className="p-1 rounded overflow-hidden cursor-pointer"><div className={`border item ${slideIndex === 2 ? "border-[rgba(0,0,0,0.4)]" : "border-[rgba(0,0,0,0.1)]"}`} onClick={()=>gotoSlide(2)}>
                <img src={"/pro2.avif"} className="w-full" alt="Product Image" width={80} height={80} />
              </div></SwiperSlide>
            <SwiperSlide className="p-1 rounded overflow-hidden cursor-pointer"><div className={`border item ${slideIndex === 3 ? "border-[rgba(0,0,0,0.4)]" : "border-[rgba(0,0,0,0.1)]"}`} onClick={()=>gotoSlide(3)}>
                <img src={"/pro3.avif"} className="w-full" alt="Product Image" width={80} height={80} />
              </div></SwiperSlide>
            <SwiperSlide className="p-1 rounded overflow-hidden cursor-pointer"><div className={`border item ${slideIndex === 4 ? "border-[rgba(0,0,0,0.4)]" : "border-[rgba(0,0,0,0.1)]"}`} onClick={()=>gotoSlide(4)}>
                <img src={"/pro4.avif"} className="w-full" alt="Product Image" width={80} height={80} />
              </div>
              </SwiperSlide>
      
      </Swiper>
      </div>
    </div>

  )
}

export default ProductZoom
