'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: () => setCurrentSlide(),
    };

    return (


        <div className='mx-auto max-w-1145 px-4 sm:px-6 lg:px-8 mb-20'>
            <div className='text-center py-20'>
                <h1 className=' capitalize font-bold md:text-[42px] text-3xl md:leading-[58px] leading-10 text-[#0D0D0D]'>Certifications & Accreditations</h1>
            </div>

            <Slider  {...settings} className='mx-auto ' >

                <div className='!flex justify-center py-2'>
                    <Image src='/images/Group 1000002910.png' alt="" height={95} width={95} />
                </div>
                <div className='!flex justify-center py-2'>
                    <Image src='/images/Group 1000002911.png' alt="" height={95} width={95} />
                </div>
                <div className='!flex justify-center py-2'>
                    <Image src='/images/Group 1000002900.png' alt="" height={95} width={95} />
                </div>
                <div className='!flex justify-center py-2'>
                    <Image src='/images/Group 1000002906.png' alt="" height={95} width={95} />
                </div>
                <div className='!flex justify-center py-2'>
                    <Image src='/images/Group 1000002902.png' alt="" height={95} width={95} />
                </div>
                <div className='!flex justify-center py-2'>
                    <Image src='/images/Group 1000002911.png' alt="" height={95} width={95} />
                </div>
                <div className='!flex justify-center py-2'>
                    <Image src='/images/Group 1000002900.png' alt="" height={95} width={95} />
                </div>
                <div className='!flex justify-center py-2'>
                    <Image src='/images/Group 1000002906.png' alt="" height={95} width={95} />
                </div>


            </Slider>
            {currentSlide}

        </div>



    );
};

export default SlickCarousel;