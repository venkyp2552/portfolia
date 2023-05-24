import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='h-full max-w-[1240px] w-full flex justify-center items-center mx-auto p-2'>
            <div>
                <p className='uppercase text-sm tracking-widset text-gray-600'>Lets Build Something Together..</p>
                <h2 className='py-1 text-gray-700'>Hi, I am <span className='text-[#5651e5]'>YKNEV</span></h2>
                <h2 className='py-1 text-gray-700'>A Full Stack Web3 Developer</h2>
                <p className='py-2 text-gray-600 sm:max-w-[70%] m-auto'>I’m focused on building responsive front-end web applications
            integrating back-end technologies.</p>
            <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
                <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-100 '>
                <FaLinkedinIn/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-100 '>
                <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-100 '>
                <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-105 ease-in duration-100 '>
                <BsFillPersonLinesFill />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main