import Image from 'next/image';
import React from 'react';

const Card = () => {
  const images = [
    { src: '/images/img1.jpg', title: 'Discover More' },
    { src: '/images/img2.jpg', title: 'Explore Depths' },
    { src: '/images/img3.jpg', title: 'Mystery Forest' },
    { src: '/images/img4.jpg', title: 'Sandy Shores' },
    { src: '/images/img5.jpg', title: 'Rocky Mountains' },
    { src: '/images/img6.jpg', title: 'Mystery Forest' },
    { src: '/images/img7.jpg', title: 'Sandy Shores' },
    { src: '/images/img8.jpg', title: 'Rocky Mountains' },
    { src: '/images/img9.jpg', title: 'Mystery Forest' },
    { src: '/images/img10.jpg', title: 'Sandy Shores' },
  ];

  return (
    <div className="w-full grid grid-cols-5 ">
      {images.map((image, index) => (
        <div key={index} className="relative group h-96">
          <Image
            src={image.src}
            alt={image.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="transition-opacity duration-500 group-hover:opacity-75"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500">
            <h2 className="hidden group-hover:flex text-white text-4xl font-bold">
              {image.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
