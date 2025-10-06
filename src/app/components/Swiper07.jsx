"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
// 🚨 Correct imports for the modules you are using
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Swiper07() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://wallpapers.com/images/high/mr-incredible-poster-vofcgubbroz29up9.webp",
    "https://wallpapers.com/images/high/mr-incredible-pixar-the-incredibles-movie-by1j1ocdvuub7okq.webp",
    "https://wallpapers.com/images/high/mr-incredible-lego-2tguy9hjxqqjyx2v.webp",
    "https://wallpapers.com/images/high/awesome-mr-incredible-and-family-6fsrf7chf8ekwujp.webp",
    "https://wallpapers.com/images/high/awe-inspiring-sunset-over-the-mountains-o4652bzxnej3886j.webp",
    "https://wallpapers.com/images/high/mr-incredible-and-violet-ug3s98475c1td35v.webp",
  ];

  return (
    <>
      {/* Main Swiper - controlled by the thumbsSwiper state
        The 'thumbs' prop links this Swiper to the thumbnail Swiper.
      */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-150 object-cover rounded-2xl"
              width={100}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper - This is what sets the thumbsSwiper state.
        The 'onSwiper' prop is crucial here. It passes the Swiper instance
        of the thumbnail slider to the 'setThumbsSwiper' state function.
      */}
      <Swiper
        onSwiper={setThumbsSwiper} // 🚨 This is the key part that was missing
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-20 object-cover rounded-md"
              width={100}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}