"use client";
import Image from 'next/image';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

export default function Swiper02() {
  return (
    <>
      <Swiper className="mySwiper"
            spaceBetween = {50}
            slidesPerView = {1}
            pagination = {{ clickable : true }}
            scrollbar = {{ dragable : true }}
            loop = {true}
            >
        <SwiperSlide className="w-full h-150 object-cover">
          <Image 
              src="https://wallpapers.com/images/high/mr-incredible-poster-vofcgubbroz29up9.webp" 
              width={1000}
              height={200}
              className='rounded-2xl w-[500] h-full mx-auto'
              alt="Description of the image" // Always add alt text
            />
        </SwiperSlide>
        <SwiperSlide className="w-full h-150 object-cover">
          <Image 
              src="https://wallpapers.com/images/high/mr-incredible-pixar-the-incredibles-movie-by1j1ocdvuub7okq.webp" 
              width={1000}
              height={200}
              className='rounded-2xl w-[500] h-full mx-auto'
              alt="Description of the image" // Always add alt text
            />
        </SwiperSlide>
        <SwiperSlide className="w-full h-150 object-cover">
          <Image 
              src="https://wallpapers.com/images/high/mr-incredible-lego-2tguy9hjxqqjyx2v.webp" 
              width={1000}
              height={200}
              className='rounded-2xl w-[500] h-full mx-auto'
              alt="Description of the image" // Always add alt text
            />
        </SwiperSlide>
        <SwiperSlide className="w-full h-150 object-cover rounded-3xl">
          <Image 
              src="https://wallpapers.com/images/high/awesome-mr-incredible-and-family-6fsrf7chf8ekwujp.webp" 
              width={1000}
              height={200}
              className='rounded-2xl w-[500] h-full mx-auto'
              alt="Description of the image" // Always add alt text
            />
        </SwiperSlide>
        <SwiperSlide className="w-full h-150 object-cover">
          <Image 
              src="https://wallpapers.com/images/high/awe-inspiring-sunset-over-the-mountains-o4652bzxnej3886j.webp" 
              width={1000}
              height={200}
              className='rounded-2xl w-[500] h-full mx-auto'
              alt="Description of the image" // Always add alt text
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
