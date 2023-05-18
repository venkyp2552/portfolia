"use client";
import Image from 'next/image';
import Link from 'next/link';
import React,{useState}from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa"
const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }

    
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
                {/* <img src="/./" alt="LogoIcon" width={100} height={100} /> */}
                <h4>Logo</h4>
                {/* div for creating menu links */}
                <div>
                    <ol className='hidden md:flex'>
                        <Link href="/"><li className="ml-4 text-sm uppercase border-red-400 hover:border-b-4 ">Home</li></Link>
                        <Link href="/"><li className="ml-4 text-sm uppercase border-red-400 hover:border-b-4 ">About</li></Link>
                        <Link href="/"><li className="ml-4 text-sm uppercase border-red-400 hover:border-b-4 ">Projects</li></Link>
                        <Link href="/"><li className="ml-4 text-sm uppercase border-red-400 hover:border-b-4 ">Contact</li></Link>
                    </ol>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            {/* div for side left view */}
            {/* intial code */}
            {/* <div className='fixed top-0 left-0 w-full h-full bg-black/70'> */}
            <div className={nav ? 'fixed top-0 left-0 w-full h-full bg-black/70 md:hidden':''}>
                <div className={nav ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500':
            'fixed top-0 left-[-100%] p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h4>Logo</h4>
                            <div onClick={handleNav} className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                                <AiOutlineClose />
                            </div>
                        </div>


                        <div className='my-4 border-b border-gray-400'>
                            <p className='w-[85%] md:w-[90%] py-4' >Lets Build Something Legendary...</p>
                        </div>
                    </div>
                    <div className='flex flex-col py-4 uppercase'>
                        <ul>
                            <Link href='/'><li className='py-4 text-sm'>Home</li></Link>
                            <Link href='/'><li className='py-4 text-sm'>About</li></Link>
                            <Link href='/'><li className='py-4 text-sm'>Projects</li></Link>
                            <Link href='/'><li className='py-4 text-sm'>Contact</li></Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widset text-[#5651e5]'>Lets Connect here...</p>
                            <div className='flex items-center justify-between w-full my-4'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn/>
                                </div>


                                
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Navbar;