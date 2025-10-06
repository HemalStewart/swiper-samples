"use client";
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function Swiper09() {

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
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
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
