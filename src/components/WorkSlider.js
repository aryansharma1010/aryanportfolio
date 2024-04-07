import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './WorkSlider.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import WorkCard from './WorkCard';
import Image from 'next/image';

export default function WorkSlider({ listofitems }) {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                {
                    listofitems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <WorkCard imageprop={item.image} link={item.link} />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </>
    );
}
