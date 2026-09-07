import React from "react";
import SliderImport from "react-slick";
const Slider = SliderImport.default ?? SliderImport;
import img1 from '../../../src/assets/hero/women-shoping.webp'


const ImageList = [
    {
        id: 1,
        img: img1,
        title: "Upto 20% off on all Men's wear",
        description: "lorem ipsum dolor sit amet consectetur adipiscing elit repellendus dolorum dolor est est et cillum excepteur consectetur minim corrupti possimus enim proident et quidem et"
    },
    {
        id: 2,
        img: img1,
        title: "Upto 30% off on all Men's wear",
        description: "lorem ipsum dolor sit amet consectetur adipiscing elit repellendus dolorum dolor est est et cillum excepteur consectetur minim corrupti possimus enim proident et quidem et"
    },
    {
        id: 3,
        img: img1,
        title: "Upto 10% off on all Men's wear",
        description: "lorem ipsum dolor sit amet consectetur adipiscing elit repellendus dolorum dolor est est et cillum excepteur consectetur minim corrupti possimus enim proident et quidem et"
    },

]
const Hero = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (


        <div className="relative overflow-hidden min-h-[550px]
        sm:min-height-[650px] bg-gray-100 justify-center
        items-center ">
            {/* backlground pattern */}
            <div className="h-[600px] w-[600px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-9">

            </div>
            {/* hero section */}
            <div className="container pb-8 sm:pb-0 sm:mx-auto px-5 z-20 relative">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id} >
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                                {/* text content section */}
                                <div className="2xl:px-25 flex flex-col gap-5">
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                    <p className="text-base">{data.description}
                                    </p>
                                    <div>
                                        <button className="bg-gradient-to-r from-primary
                                to-secondary hover:scale-105 duration-200
                                text-white py-2 px-4 rounded-full cursor-pointer">Order Now</button>
                                    </div>

                                </div>

                                {/* text content section */}

                                {/* Image Section */}
                                <div className="z-10">
                                    <img src={data.img} alt=""
                                        className="w-[300px] h-[300px] sm:h-[450px]
                            sm:w-[450px] sm-scale-125 object-contain mx-auto" />
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>


            </div>
        </div>

    )
};

export default Hero;