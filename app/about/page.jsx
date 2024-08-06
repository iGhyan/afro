
import React from 'react';
// import afro from '../../../public/images/arfo.png';
import ContactForm from '../components/contactform/ContactForm';

const page = () => {
  const data = {
    title: 'AFROHARVEST FOODSTUFF LLC',
    description: 'Exporter of high-quality Sudanese origin commodities and crops',
    buttonText: 'MORE ABOUT',
    
  };

  return (
    <>
    <div className='container mx-auto px-4 py-6'>
        {/* <div className='flex justify-center items-center my-[60px]'>
            <Image src={afro} alt='bannar' width={600} height={350}/>
        </div> */}
        <div className="flex gap-8 justify-between">
        <div className="w-1/2 flex flex-col bg-transparent p-6">
          <h2 className="font-black text-6xl mb-4">{data.title}</h2>
          <p className="text-gray-700 text-4xl font-thin mb-4 text-balance">{data.description}</p>
          <button className="w-[200px] my-[20px] border-2 border-[#ad8c19] text-gray-700 text-[14px] py-4 px-4 rounded-full font-normal hover:bg-gradient-to-r hover:from-[#2b5c17] hover:to-[#ad8c19] hover:text-white">
            {data.buttonText}
          </button>
        </div>
        </div>
        
    </div>
    <ContactForm />
    </>
  )
}

export default page;
