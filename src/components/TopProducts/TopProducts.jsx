import React from 'react'
import productsData from './productsdata'
import { FaStar } from "react-icons/fa";

const TopProducts = () => {
    return (
        <div>
            <div className='container mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-24 max-w-[600pxpx] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>
                        Top Rated Products For You
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                    <p  data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Atque tempore aut velit! Quam, maxime natus?
                    </p>
                </div>
                {/* Body Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2
           md:grid-cols-4 gap-20 place-items-center'>
                    {productsData.map((data) => (
                        <div data-aos="zoom-in"
                        key={data.id}
                            className='rounded-2xl bg-white hover:bg-black
                          hover:text-white relative shadow-xl duration-1000 group max-w-[300px]'>
                            <div>
                                {/* img section */}
                                <div className='h-[200px]'>
                                    <img src={data.img} alt=""
                                        className=' block mx-auto
                                      transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md '
                                    />
                                </div>
                                {/* Details Section */}
                                <div className='p-4 text-center'>
                                    {/* star rating   */}
                                    <div className=' w-full flex justify-center items-center gap-1'>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                                        {data.description}
                                    </p>
                                    <button className="bg-primary hover:scale-105
                                    duration-300 text-white py-1 px-4 
                                    rounded-full mt-4 group-hover:bg-white
                                     group-hover:text-primary"> Order Now</button>
                                    <div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopProducts;