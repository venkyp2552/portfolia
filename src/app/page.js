import About from '@/components/About';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

// import { useClient } from 'react-server-components/client';
import Image from 'next/image'
export default function Home() {
  return (
    <div >
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  )
}


