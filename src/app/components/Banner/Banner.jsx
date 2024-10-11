'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import "./Banner.css";

const Banner = () => {
    return (
        <section className='my-3'>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                    },
                }}
                navigation
                loop={true}
                speed={1500}               
                // autoplay={{delay : 3000}}
                modules={[EffectCreative, Navigation, Pagination, Autoplay]}
                className="mySwiper2 w-11/12 "
            >
                <SwiperSlide>
                    <div className='bg-black relative rounded-xl exo-2'>
                        <img src='https://i.imgur.com/3E1N0Rr.jpg' className='w-full lg:h-[650px] md:h-[650px] h-[350px] object-cover rounded-xl opacity-45' />
                        <div className='lg:w-1/2 md:w-3/4 absolute top-[42%] text-white lg:left-16 md:left-12 left-7 italic'>
                            <p className='lg:text-4xl md:text-4xl text-xl  font-semibold'>Motivation is what gets you started. Habit is what keeps you going.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-black relative rounded-xl exo-2'>
                        <img src='https://i.imgur.com/hjMyIpN.jpg' className='w-full lg:h-[650px] md:h-[650px] h-[350px] object-cover rounded-xl opacity-45' />
                        <div className='w-1/2 absolute top-[42%] text-white lg:left-12 md:left-7 left-1 italic'>
                            <p className='text-4xl font-semibold'>Don’t stop when you’re tired. Stop when you’re done.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-black relative rounded-xl exo-2'>
                        <img src='https://i.imgur.com/x6bL9BZ.jpg' className='w-full lg:h-[650px] md:h-[650px] h-[350px] object-cover rounded-xl opacity-45' />
                        <div className='w-1/2 absolute top-[42%] text-white lg:left-12 md:left-7 left-1 italic'>
                            
                            <p className='text-4xl font-semibold'>No matter how slow you go, you’re still lapping everyone on the couch.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-black relative rounded-xl exo-2'>
                        <img src='https://i.imgur.com/oClB0M5.jpg' className='w-full lg:h-[650px] md:h-[650px] h-[350px] object-cover rounded-xl opacity-45' />
                        <div className='w-1/2 absolute top-[42%] text-white lg:left-12 md:left-7 left-1 italic'>
                            <p className='text-4xl font-semibold'>Strength doesn’t come from what you can do, it comes from overcoming the things you once thought you couldn’t.</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </section>
    );

};

export default Banner;