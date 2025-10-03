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
      <Swiper className="mySwiper w=[80%] mx-auto"
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
              alt="Description of the image" // Always add alt text
            />
        </SwiperSlide>
        <SwiperSlide className="w-full h-150 object-cover">
          <Image 
              src="https://wallpapers.com/images/high/mr-incredible-pixar-the-incredibles-movie-by1j1ocdvuub7okq.webp" 
              width={1000}
              height={200}
              alt="Description of the image" // Always add alt text
            />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
