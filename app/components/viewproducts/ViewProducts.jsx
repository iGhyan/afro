import Link from "next/link";
import React from "react";

const FullWidthBackground = () => {
    return (
<<<<<<< HEAD
      <div className="relative w-full h-[400px] lg:h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/images/img12.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10  flex flex-col container mx-auto items-start justify-center h-full text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Constant Curation of<br/>Commodity</h1>
          <p className="text-lg mb-8 text-balance">Afroharvest has a strong presence in the international commerce of sesame seeds, peanuts, pulses, and oils. It has outperformed its global potential from its headquarters in India and branch offices in Sudan and Dubai</p>
=======
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/img12.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-start h-full text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Constant Curation of<br/>Commodity</h1>
          <p className="text-lg mb-8">Afroharvest has a strong presence in the international commerce of sesame seeds, peanuts, pulses, and oils. It has outperformed its global potential from its headquarters in India and branch offices in Sudan and Dubai</p>
>>>>>>> 7bc197fe38bccd3651a0893842d979cab291af35
          <Link href="/" className="bg-gradient-to-r from-[#2b5c17] to-[#ad8c19] text-white px-4 py-2 rounded-full ml-4">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    );
  };
  
  export default FullWidthBackground;
  