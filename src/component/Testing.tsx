import React, { useRef , MutableRefObject, useEffect } from 'react'
import * as THREE from "three"

type CanvasRef = MutableRefObject<HTMLCanvasElement | null>;

const Testing = () => {
  const canvasRef: CanvasRef = useRef<HTMLCanvasElement | null>(null); 

     useEffect(()=>{
      const scene = new  THREE.Scene() ; 
      const geometry = new THREE.SphereGeometry(3,64,64)
      const material =  new THREE.MeshStandardMaterial({color:"0xffff00" })
      const mesh = new THREE.Mesh(geometry , material)
      scene.add(mesh)
      //camra 
  
      const camera = new THREE.PerspectiveCamera(45,800,800)
       scene.add(camera)
      const canvas = canvasRef
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!});
      renderer.setSize(800, 600)
       renderer.render(scene, camera)
     },[])
    
    
  return (
    <div>
        <canvas style={{height:"300px" , width:"400px", border:"2 px solid red "}} ref={canvasRef} className='webgl'> 
        
        </canvas>

    </div>
  )
}

export default Testing