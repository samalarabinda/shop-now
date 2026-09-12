import React from 'react'
import TestimonialsData from './TestimonialsCard'
import SliderImport from "react-slick";
const Slider = SliderImport.default ?? SliderImport;

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        caseEase: "Linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='py-10'>
            <div className='container mx-auto' >
                {/* Header Section start */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-base text-primary'>What our customers says about us</p>
                    <h1 className='text-3xl font-bold'>Testimonials</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Et necessitatibus laudantium excepturi! Tempore,
                        quibusdam ad?
                    </p>
                </div>
                {/* Body Section testimonials card*/}
                <div data-aos="zoom-in">
                    <Slider {...settings}>{
                        TestimonialsData.map((data) => (
                            <div className="my-6">
                                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                    <div className="mb-4">
                                        <img src={data.img} alt=""
                                            className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>

                                        <p>{data.text}</p>
                                        <h1 className='w-full text-xl font-bold text-black/80 text-left'>{data.Name}</h1>
                                    </div>
                                    <p className='text-black/20 text-9xl absolute top-0 right-0'>”</p>
                                </div>
                            </div>
                        ))
                    }</Slider>
                </div>

            </div>

        </div>
    )
}

export default Testimonials