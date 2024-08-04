'use client'

import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { src: '/images/slide.jpg', title: 'AFROHARVEST FOODSTUFF LLC', description: 'BEST AGRI COMMODITIED IN THE WORLD' },
  { src: '/images/slide1.jpg', title: 'AFROHARVEST FOODSTUFF LLC', description: 'BEST AGRI COMMODITIED IN THE WORLD' },
  { src: '/images/slide2.jpg', title: 'AFROHARVEST FOODSTUFF LLC', description: 'BEST AGRI COMMODITIED IN THE WORLD' },
];

const SliderComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative w-full h-full">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[600px] relative">
            <Image src={slide.src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div>
                <h2 className="text-white text-4xl md:text-4xl font-thin py-6 bg-[#ad8c19] px-4 bg-opacity-50">{slide.title}</h2>
                <div className='py-2'><p className="text-white text-4xl md:text-4xl font-block py-6 bg-[#ad8c19] px-4 bg-opacity-50">{slide.description}</p></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute right-0 top-3/4 z-20 flex flex-col items-center space-y-4">
        <button onClick={prevSlide} className="bg-white text-black rounded border-1 p-2 hover:w-[40px] hover:bg-[#ad8c19]"></button>
        <button onClick={nextSlide} className="bg-white text-black rounded border-1 p-2 hover:w-[40px] hover:bg-[#ad8c19]"></button>
      </div>
    </div>
  );
};

export default SliderComponent;
