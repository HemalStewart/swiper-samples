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
                  src="/img1.jpg" 
                  width={3000}
                  height={200}
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="/img1.jpg" 
                  width={3000}
                  height={200}
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="/img1.jpg" 
                  width={3000}
                  height={200}
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="/img1.jpg" 
                  width={3000}
                  height={200}
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="/img1.jpg" 
                  width={3000}
                  height={200}
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                  src="/img1.jpg" 
                  width={3000}
                  height={200}
                  alt="Description of the image" // Always add alt text
                />
            </SwiperSlide>
            

        </Swiper>
    )
}

export default SwiperComponent01