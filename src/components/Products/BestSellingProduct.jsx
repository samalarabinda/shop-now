import React from 'react'
import productData from './productsdata'
import { FaStar } from "react-icons/fa";


const BestSellingProduct = (props) => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-base text-primary'>Top Selling Products</p>
                    <h1 className='text-3xl font-bold'>{props.producttitle}</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Et necessitatibus laudantium excepturi! Tempore,
                        quibusdam ad?
                    </p>
                </div>
                {/* Body Section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3
                    md:grid-cols-4 lg:grid-cols-6 place-items-center gap-5'>
                        {/* card section */}
                        {productData.map((data) => (
                            <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                                <img src={data.img} alt=""
                                    className='h-[220px] w-[150px]
                                object-cover rounded-md' />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* card section */}
                    </div>
                    <div className='max-w-[600px] mt-10 text-center mx-auto' >
                        <button className="bg-gradient-to-r from-primary
                                to-secondary hover:scale-105 duration-200
                                text-white py-2 px-4 rounded-md cursor-pointer">View all Products</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BestSellingProduct;