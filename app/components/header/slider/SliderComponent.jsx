// 'use client'

// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image';

// const slides = [
//   { src: '/images/slide.jpg', caption: 'Caption for Slide 1' },
//   { src: '/images/slide1.jpg', caption: 'Caption for Slide 2' },
//   { src: '/images/slide2.jpg', caption: 'Caption for Slide 3' },
// ];

// const SliderComponent = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   const nextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const prevSlide = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="relative w-full h-full">
//       <Slider ref={sliderRef} {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative w-full h-[500px]">
//             <div className="w-full h-full relative">
//               <Image src={slide.src} alt={`Slide ${index}`} fill className="object-cover" />
//             </div>
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <h2 className="text-white text-2xl md:text-4xl font-bold">{slide.caption}</h2>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
//         <button onClick={prevSlide} className="bg-white text-black p-2 rounded-full shadow-lg">Prev</button>
//       </div>
//       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20">
//         <button onClick={nextSlide} className="bg-white text-black p-2 rounded-full shadow-lg">Next</button>
//       </div>
//     </div>
//   );
// };

// export default SliderComponent;
