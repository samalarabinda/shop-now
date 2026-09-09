
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BestSellingProduct from './components/Products/BestSellingProduct'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const App = () => {
    useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <BestSellingProduct />
      
    </div>
  )
}

export default App