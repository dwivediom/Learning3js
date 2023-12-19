'use client '

import Image from 'next/image'
import Testing2 from '@/component/Testing2'
import { ThreeScene } from '@/component/Testing3'
import Navbar from '@/component/Navbar'
export default function Home() {
  return (
    <main className="">
       <Navbar/>
    
        <Testing2/>
         {/* <ThreeScene/> */}
      
    </main>
  )
}
