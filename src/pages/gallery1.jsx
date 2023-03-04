
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "./gallery1.css";
// import "swiper/components/navigation/navigation.min.css"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function Gallery1() {
  
  
  
  return (
    <div className="swiper-container">
    <Swiper spaceBetween={30} centeredSlides={true} slidesPerView={3} autoplay={{
  "delay":2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="swiper-wrapper">
  <SwiperSlide className="swiper-slide"><img src="imagesg/1.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/2.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/3.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/4.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/5.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/6.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/7.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/8.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/9.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/10.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/11.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/12.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/13.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/14.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/15.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/16.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/17.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/18.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/19.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/20.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/21.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/22.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/23.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/24.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/25.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/26.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/27.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/28.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/29.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/30.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/31.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/32.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/33.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/34.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/35.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/36.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/37.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/38.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/39.jpg"/></SwiperSlide>
  <SwiperSlide className="swiper-slide"><img src="imagesg/40.jpg"/></SwiperSlide>
  </Swiper>
    </div>
  )
}