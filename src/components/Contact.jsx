import React from 'react'
import im from "../public/assests/one.jpg";
import Image from 'next/image';
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import Link from 'next/link';
const Contact = () => {
    return (
        <div id="contact" className="mt-[450px] w-full lg:h-screen">
            <div className="max-w-[1240px]  m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                <h2>Get in Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-2 lg:col-span-2 p-1 w-full h-full shadow-lg shadow-gray-400 rounded-xl">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image className="rounded-xl h-[430px] hover:scale-105 ease-in duration-300" src={im} alt="Image" />
                            </div>
                            <div >
                                <p className="py-2">Name Here</p>
                                <p>Front End Developer..</p>
                                <p className="py-4">I am Avilable for freelancing an d Full time Postion also..</p>
                            </div>
                            <div className="lg:w-full p-1">
                                <p className="uppercase tracking-wider ">Connetct with me</p>
                                <div className="w-full flex justify-between items-center py-2">
                                    <div className="shadow-xl cursor-pointer shadow-gray-400 rounded-full p-6 hover:scale-105 ease-in duration:300">
                                        <AiOutlineInstagram />
                                    </div>
                                    <div className="shadow-xl cursor-pointer shadow-gray-400 rounded-full p-6 hover:scale-105 ease-in duration:300">
                                        <AiFillGithub />
                                    </div>
                                    <div className="shadow-xl cursor-pointer shadow-gray-400 rounded-full p-6 hover:scale-105 ease-in duration:300">
                                        <AiFillLinkedin />
                                    </div>
                                    <div className="shadow-xl cursor-pointer shadow-gray-400 rounded-full p-6 hover:scale-105 ease-in duration:300">
                                        <FiFacebook />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="col-span-3 lg-col-span-3 p-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='rounded-lg p-3 flex border-2 border-gray-300 ' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='rounded-lg p-3 flex border-2 border-gray-300 ' type="text" />
                                    </div>
                                </div>
                                <div className='grid'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Email</label>
                                        <input className='rounded-lg p-3 flex border-2 border-gray-300 ' type="email" />
                                    </div>
                                </div>
                                <div className='grid'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Subject</label>
                                        <input className='rounded-lg p-3 flex border-2 border-gray-300 ' type="text" />
                                    </div>
                                </div>
                                <div className='grid'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Message</label>
                                        <textarea className='border-2 border-gray-300 rounded-lg p-3' rows={10}></textarea>
                                    </div>
                                </div>
                                <button className='w-full py-4 rounded-lg mt-4 text-gray-100'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href="/">
                        <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact