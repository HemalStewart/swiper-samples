"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swiper08() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
    // 🚨 Add a null check before accessing the ref's properties
    // if (progressCircle.current) {
    //   progressCircle.current.style.setProperty('--progress', 1 - progress);
    // }
    // if (progressContent.current) {
    //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // }
  // };

  const images = [
    "https://wallpapers.com/images/high/mr-incredible-poster-vofcgubbroz29up9.webp",
    "https://wallpapers.com/images/high/mr-incredible-pixar-the-incredibles-movie-by1j1ocdvuub7okq.webp",
    "https://wallpapers.com/images/high/mr-incredible-lego-2tguy9hjxqqjyx2v.webp",
    "https://wallpapers.com/images/high/awesome-mr-incredible-and-family-6fsrf7chf8ekwujp.webp",
    "https://wallpapers.com/images/high/awe-inspiring-sunset-over-the-mountables-o4652bzxnej3886j.webp",
    "https://wallpapers.com/images/high/mr-incredible-and-violet-ug3s98475c1td35v.webp",
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        //onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-150 object-cover rounded-2xl"
              width={200}
              height={2000}
            />
          </SwiperSlide>
        ))}

        {/* This block must be in the component to work */}
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </>
  );
}