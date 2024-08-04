import React from "react";
import Aboutus from "./components/aboutus/Aboutus";
import BusinessCategory from "./components/businesscategory/Businesscategory";
import FeatureComponent from './components/feature/FeatureComponent';
import Card from './components/card/Card';

export default function Home() {
  const data = {
    title: 'AFROHARVEST FOODSTUFF LLC',
    description: 'Exporter of high-quality Sudanese origin commodities and crops',
    buttonText: 'MORE ABOUT',
    imageSrc: '/images/ceo.png',
    imageAlt: 'Example Image',
    heading: 'Right Column Title',
    paragraph:'Welcome to Afroharvest where excellence meets nourishment. As a leading enterprise in the heart of Sudan, we take immense pride in our role as specialists in the export of high-quality Sudanese origin commodities and crops. Our commitment to quality, sustainability, and innovation sets us apart in the agricultural and food production industry',
  };

  return (
    <main >
    <BusinessCategory />
    <Aboutus {...data}/>
    <FeatureComponent />
    <div className="mt-[60px] mb-[10px]"><h1 className="text-center text-6xl font-black ">OUR PRODUCTS</h1></div>
    <Card />
    {/* <Content /> */}
      </main>
  );
}
