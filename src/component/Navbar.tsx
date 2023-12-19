import React from 'react'
import "./allcss.css"
import { div } from 'three/examples/jsm/nodes/Nodes.js'
const Navbar = () => {
  return (
    <>
    <div id="nav"> <span  className='text-white font-bold'>Sphere </span>
    
     <ul className='list'>
        <li >Explore</li>
         <li>Create</li>
     </ul>
    </div>
    </>
  )
}

export default Navbar