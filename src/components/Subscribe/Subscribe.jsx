import React from 'react'
// const bannerImage = {

//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "100%",
//     width: "100%"
// }

const Subscribe = () => {
    return (
        <div data-aos='zoom-in'
            className=' bg-linear-to-r from-primary to-amber-600 text-white'>
            <div className='container py-10 mx-auto'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-bold'>
                        Get Notified About New Product
                    </h1>
                    <input
                       
                        type="text"
                        placeholder='Enter your email'
                        className='w-full p-3 bg-gray-200 text-black focus:border-0 outline-0' />
                </div>
            </div>
        </div>
    )
}

export default Subscribe