// components/ImageGrid.js
'use client';

import React from 'react';

const BusinessCategory = () => {
  const images = [
    { src: '/images/pnt.png', alt: 'Image 1', title: 'Peanut' },
    { src: '/images/pnt1.png', alt: 'Image 2', title: 'Pine nut' },
    { src: '/images/pist.png', alt: 'Image 3', title: 'pistachio' },
    { src: '/images/sun.png', alt: 'Image 4', title: 'Sunflower' },
  ];

  return (
    <div className="container mx-auto px-4">
        <div className='py-[40px]'><h1 className='text-center text-[54px] font-orbitron text-green-900 text-black'>BUSINESS <span className='text-[54px] text-gray-300'>CATEGORY</span></h1></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col justify-evenly p-4 w-80 hover:border-2 hover:border-[#ad8c19]">
            <img src={image.src} alt={image.alt} className="w-40 h-20 mb-4 flex items-center justify-center" />
            <h2 className="text-[#2b5c17] text-2xl font-bold hover:text-[#ad8c19] text-center">{image.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessCategory;