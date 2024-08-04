import React from 'react'
import BusinessCategory from '../content/businesscategory/Businesscategory';
import Aboutus from '../../components/content/aboutus/Aboutus';

const Content = () => {
  const data = {
    title: 'AFROHARVEST FOODSTUFF LLC',
    description: 'Exporter of high-quality Sudanese origin commodities and crops',
    buttonText: 'MORE ABOUT',
    imageSrc: '/images/',
    imageAlt: 'Example Image',
    heading: 'Right Column Title',
    paragraph:'Welcome to Afroharvest where excellence meets nourishment. As a leading enterprise in the heart of Sudan, we take immense pride in our role as specialists in the export of high-quality Sudanese origin commodities and crops. Our commitment to quality, sustainability, and innovation sets us apart in the agricultural and food production industry',
  };
  return (
    <div>
        <div><BusinessCategory /></div>
        <div><Aboutus {...data}/></div>
    </div>
  )
}

export default Content