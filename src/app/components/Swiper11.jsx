"use client";
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function Swiper11() {

  const images = [
    "https://lh3.googleusercontent.com/proxy/x9wtel74CGndj7gdiClR8mYlTgGzUFoDDRDVvgGpAu_jcRbnwF28ltc2HTsG4_72xP5rNGz723QV9hD9smYaR5JOj8UEHRwtL6jKRYfwtayzuVxtFgk",
    "https://m.media-amazon.com/images/S/pv-target-images/9552935dbc42f282810b432318ec0dad3717f4c743caf56e92ac10040a67f675.jpg",
    "https://m.media-amazon.com/images/M/MV5BYzQ0OTVmZDEtZmJhYi00NWJkLTk1NWYtODYxOTE1ZDMwOGY2XkEyXkFqcGc@._V1_.jpg",
    "https://media-cache.cinematerial.com/p/500x/utaqgyha/the-garfield-movie-movie-poster.jpg?v=1711993365" ,
    "https://images.squarespace-cdn.com/content/v1/538de52be4b0ac20b46b210c/8298b340-2c96-4306-a2c7-24df0d27908e/garfield-2024.jpeg",
    "https://media-cache.cinematerial.com/p/500x/vighfbjd/the-garfield-movie-argentinian-movie-poster.jpg?v=1713309859",
    "https://lh3.googleusercontent.com/proxy/x9wtel74CGndj7gdiClR8mYlTgGzUFoDDRDVvgGpAu_jcRbnwF28ltc2HTsG4_72xP5rNGz723QV9hD9smYaR5JOj8UEHRwtL6jKRYfwtayzuVxtFgk",
    "https://m.media-amazon.com/images/S/pv-target-images/9552935dbc42f282810b432318ec0dad3717f4c743caf56e92ac10040a67f675.jpg",
    "https://m.media-amazon.com/images/M/MV5BYzQ0OTVmZDEtZmJhYi00NWJkLTk1NWYtODYxOTE1ZDMwOGY2XkEyXkFqcGc@._V1_.jpg",
    "https://media-cache.cinematerial.com/p/500x/utaqgyha/the-garfield-movie-movie-poster.jpg?v=1711993365" ,
    "https://images.squarespace-cdn.com/content/v1/538de52be4b0ac20b46b210c/8298b340-2c96-4306-a2c7-24df0d27908e/garfield-2024.jpeg",
    "https://media-cache.cinematerial.com/p/500x/vighfbjd/the-garfield-movie-argentinian-movie-poster.jpg?v=1713309859",
  ];

  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* 🔹 Map images into SwiperSlide */}
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="rounded-2xl"
                      width={750}
                      height={10}
                    />
                  </SwiperSlide>
                ))}
      </Swiper>
    </>
  );
}
