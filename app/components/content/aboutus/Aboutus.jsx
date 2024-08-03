import React from 'react';
import afro from '../../../../public/images/arfo.png';
import Image from 'next/image';

const Aboutus = ({ title, description, buttonText, imageSrc, heading, paragraph }) => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="flex justify-center items-center py-[60px]">
        <Image src={afro} alt='banner' width={600} height={350} />
      </div>
      <div className="container mx-auto flex gap-8 justify-between bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className="w-1/2 flex flex-col bg-transparent p-6">
          <h2 className="font-black text-6xl mb-4">{title}</h2>
          <p className="text-gray-700 text-4xl font-thin mb-4 text-balance">{description}</p>
          <button className="w-[200px] my-[20px] border-2 border-[#ad8c19] text-gray-700 text-[16px] py-4 px-4 rounded-full font-normal hover:bg-gradient-to-r hover:from-[#2b5c17] hover:to-[#ad8c19] hover:text-white">
            {buttonText}
          </button>
        </div>
        <div className="w-1/2 flex flex-col bg-transparent p-6">
          <h2 className="font-bold text-4xl mb-4">{heading}</h2>
          <p className="text-gray-700 text-xl font-light mb-4 text-balance">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;
