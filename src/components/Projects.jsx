import Image from 'next/image'
import React from 'react'
import ProjectItem from './ProjectItem'
import im from "../public/assests/one.jpg"
import im1 from "../public/assests/two.jpg"
import im2 from "../public/assests/three.jpg"
import im3 from "../public/assests/four.jpg";
const Projects = () => {
    return (
        <div id="projects" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto px-2">
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2>What i have Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem title="Property Finder" backgroundImg={im} projectUrl={'/property'} />
                    <ProjectItem title="Crypto App" backgroundImg={im1} projectUrl={'/crypto'} />
                    <ProjectItem title="Nature1" backgroundImg={im2} projectUrl={'/nature1'} />
                    <ProjectItem title="Nature2" backgroundImg={im3} projectUrl={'/nature2'} />

                </div>
            </div>
        </div >
    )
}

export default Projects