
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BestSellingProduct from './components/Products/BestSellingProduct'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';



const App = () => {
    useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing: "ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <BestSellingProduct producttitle="Products"/>
      <TopProducts />
      <Banner />
      <Subscribe />
       <BestSellingProduct producttitle="Best Selling Product"/>
       <Testimonials />
      
    </div>
  )
}

export default App