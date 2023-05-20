import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
    return (
        // <div className="grid md:grid-cols-2 gap-8">
        <div className='flex justify-center items-center relative w-full h-[430px] shadow-xl shadow-gray-400 rounded-xl  my-1 group hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
            <Image className='rounded-xl group-hover:opacity-10  h-[430px]' src={backgroundImg} alt="img1" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>Reactjs</p>
                <Link href={projectUrl} className='cursor-pointer text-center p-2 bg-white rounded-xl text-lg font-bold text-gray-700'>More Info</Link>
            </div>
        </div>

        // </div>
    )
}

export default ProjectItem