'use client';

// import Swiper JS
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//modules
import { Pagination, Navigation } from 'swiper/modules';

const SwiperComponent01 = () => {
    return (
        <Swiper
            spaceBetween = {50}
            slidesPerView = {3}
            navigation = {true}
            pagination = {{ clickable : true }}
            scrollbar = {{ dragable : true }}
            className = 'w=[80%]'
            loop = {true}
            modules = {[Pagination, Navigation]}
        >
            <SwiperSlide>
                <Image 
                  src="https://lh3.googleusercontent.com/proxy/x9wtel74CGndj7gdiClR8mYlTgGzUFoDDRDVvgGpAu_jcRbnwF28ltc2HTsG4_72xP5rNGz723QV9hD9smYaR5JOj8UEHRwtL6jKRYfwtayzuVxtFgk" 
                  width={3000}
                  height={100}
                  className='rounded-2xl h-[550]'
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="https://m.media-amazon.com/images/S/pv-target-images/9552935dbc42f282810b432318ec0dad3717f4c743caf56e92ac10040a67f675.jpg" 
                  width={3000}
                  height={200}
                  className='rounded-2xl h-[550]'
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="https://m.media-amazon.com/images/M/MV5BYzQ0OTVmZDEtZmJhYi00NWJkLTk1NWYtODYxOTE1ZDMwOGY2XkEyXkFqcGc@._V1_.jpg" 
                  width={3000}
                  height={200}
                  className='rounded-2xl h-[550]'
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="https://media-cache.cinematerial.com/p/500x/utaqgyha/the-garfield-movie-movie-poster.jpg?v=1711993365" 
                  width={3000}
                  height={200}
                  className='rounded-2xl h-[550]'
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="https://images.squarespace-cdn.com/content/v1/538de52be4b0ac20b46b210c/8298b340-2c96-4306-a2c7-24df0d27908e/garfield-2024.jpeg" 
                  width={3000}
                  height={200}
                  className='rounded-2xl h-[550]'
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="https://media-cache.cinematerial.com/p/500x/vighfbjd/the-garfield-movie-argentinian-movie-poster.jpg?v=1713309859" 
                  width={3000}
                  height={200}
                  className='rounded-2xl h-[550]'
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            

        </Swiper>
    )
}

export default SwiperComponent01