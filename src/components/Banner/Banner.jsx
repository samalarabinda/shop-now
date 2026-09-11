import React from 'react'
import img1 from '../../../src/assets/product/women-shoping-1.webp'
import { GrSecure } from "react-icons/gr";


const Banner = () => {
    return (
        <div className='min-h-[550px] flex justify-center
    items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/* Image section */}
                    <div data-aos="zoom-in">
                        <img src={img1} alt=""
                            className='max-w-[450px] h-[450px] w-full mx-auto object-cover object-centre drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]' />
                    </div>
                    {/* text details section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>Winter sale upto 50% off</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatum tempore ad est sint expedita magnam.
                        </p>
                        <div>
                            <div data-aos='fade-up' className='flex items-center gap-4 pb-4'>
                                <GrSecure 
                                className='text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full bg-violet-100'/>
                                <p>Quality Product</p>
                            </div>
                             <div data-aos='fade-up' className='flex items-center gap-4 pb-4'>
                                <GrSecure 
                                className='text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full bg-primary/20'/>
                                <p>Quality Product</p>
                            </div>
                             <div data-aos='fade-up' className='flex items-center gap-4'>
                                <GrSecure 
                                className='text-4xl h-12 w-12 shadow-sm 
                                p-4 rounded-full bg-violet-100'/>
                                <p>Quality Product</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner;