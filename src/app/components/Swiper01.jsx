"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Swiper01() {
  // 🔹 Image array (replace with your own images / static imports)
  const images = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1019/1000/600/",
    "https://picsum.photos/id/1020/1000/600/",
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect="fade"
        speed={800}
        centeredSlides={true}
        grabCursor={true}
        className="rounded-lg overflow-hidden"
      >
        {/* 🔹 Map images into SwiperSlide */}
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover"
              width={100}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Custom Lucide Navigation Buttons */}
      <button className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md">
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}