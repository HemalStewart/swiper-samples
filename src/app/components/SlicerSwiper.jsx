'use client';

import React, { useEffect, useRef } from 'react';
import NextImage from 'next/image'; // 1. IMPORT Next.js Image component and RENAME it
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules'; // Import core modules
import EffectSlicer from './ui-initiative/effect-slicer.esm.js'; // Adjust the path for premium module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ui-initiative/effect-slicer.css'; // Adjust the path for premium styles

// If the Slicer Effect relies on the global 'Image' object for preloading,
// the conflict happens when the code calls 'Image()' without 'new'.
// By renaming the imported component to 'NextImage', you prevent
// the component from overriding the native 'window.Image' constructor.

export default function SlicerSwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // 2. Swiper initialization is wrapped in useEffect, running only on client
      new Swiper(swiperRef.current, {
        // Pass the Slicer Effect module to the modules array
        modules: [Navigation, Pagination, EffectSlicer],
        // Specify the 'slicer' effect
        effect: 'slicer',
        // Add other Swiper options here
        loop: true, // Typically good for sliders
        speed: 1000, // Example speed for effect
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // ...other parameters from the documentation
      });
    }

    // Cleanup function to destroy Swiper instance on component unmount
    return () => {
      // It's good practice to cleanup the instance, though not strictly necessary for this simple setup
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.destroy();
      }
    };
  }, []);

  return (
    <div ref={swiperRef} className="swiper">
      <div className="swiper-wrapper">
        {/* Swiper Slides */}
        <div className="swiper-slide">
            {/* 3. Use the RENAMED Next.js Image component */}
            <NextImage
              src="https://media-cache.cinematerial.com/p/500x/vighfbjd/the-garfield-movie-argentinian-movie-poster.jpg?v=1713309859"
              alt="The Garfield Movie Poster" // Always provide descriptive alt text
              className="w-100 h-full object-cover" // Example classes for full-size image
              width={500} // Set dimensions that match the source or desired layout
              height={740} // Example height
              priority // Use 'priority' if this is a primary image above the fold
            />
        </div>
        <div className="swiper-slide">
            {/* 3. Use the RENAMED Next.js Image component */}
            <NextImage
              src="https://images.squarespace-cdn.com/content/v1/538de52be4b0ac20b46b210c/8298b340-2c96-4306-a2c7-24df0d27908e/garfield-2024.jpeg"
              alt="The Garfield Movie Poster" // Always provide descriptive alt text
              className="w-100 h-full object-cover" // Example classes for full-size image
              width={500} // Set dimensions that match the source or desired layout
              height={740} // Example height
              priority // Use 'priority' if this is a primary image above the fold
            />
        </div>

        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 4</div>
        <div className="swiper-slide">Slide 5</div>
      </div>
      {/* Navigation and pagination elements */}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}