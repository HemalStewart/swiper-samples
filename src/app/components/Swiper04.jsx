"use client";
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import "./styles.css";

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function Swiper04() {

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
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {/* 🔹 Map images into SwiperSlide */}
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
      </Swiper>
    </>
  );
}
