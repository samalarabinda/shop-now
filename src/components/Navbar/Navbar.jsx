import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosCart, IoMdArrowDropdown } from "react-icons/io";
import { Menu, Dropdownmenu } from './menuitem.js'


const Navbar = () => {
    return (
        <div className='shadow-md bg-white relative z-40'>
            {/* // Upper Nav */}
            <div className='bg-primary/40 py-2 flex justify-between px-10 '>
                <div><h1 className='uppercase w-60 font-bold text-2xl sm-text-3xl'>Arabinda Shop</h1></div>
                {/* Search Bar*/}
                <div className='flex justify-content-between items-center gap-4 '>
                    <div className='group relative hidden sm:block'>
                        <input type="text" placeholder='search' className='bg-white w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-500 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary' />
                        <IoSearchSharp
                            className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />

                    </div>
                    {/* Add to cart button */}
                    <button onClick={() => alert("Order not Available Yet")}
                        className='bg-gradient-to-r from-primary to-secondary
                     transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                        <IoIosCart className='drop-shadow-sm cursor-pointer' />
                    </button>
                </div>





            </div>
            {/* Lower Nav */}
            <div>
                <ul className='flex justify-center items-center gap-10 py-2 text-[18px] font-medium'>
                    {Menu.map((menudata) => {
                        return <li key={menudata.id} className='inline-block  hover:text-primary duration-200'><a href={menudata.link}>{menudata.name}</a></li>
                    })}
                    <li className='group relative cursor-pointer'
                    ><a href="#"
                        className=' hover:text-primary duration-200 gap-[2px] py-2'
                    >Trending Products<IoMdArrowDropdown className='inline-block group-hover:rotate-180 transition-all duration-200' />
                        </a>
                        <div className='absolute z-[999] hidden group-hover:block w-[200px] right-0  rounded-md bg-white p-2 text-black shadow-md' >
                            <ul>
                                {Dropdownmenu.map((dropdowndata) => {
                                    return <li key={dropdowndata.id} className='inline-block  hover:text-primary duration-200'>
                                        <a href={dropdowndata.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20 '> {dropdowndata.name}</a></li>
                                })}
                            </ul>
                        </div>

                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar