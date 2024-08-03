import React from 'react';
import SliderComponent from './slider/SliderComponent';
import Navbar from './navbar/Navbar'


const Header = () => {
  return (
    <header className="relative w-full h-[200px]">
      {/* <SliderComponent /> */}
      <Navbar />
    </header>
  );
};

export default Header;
