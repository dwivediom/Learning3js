'use client'

import "./allcss.css"

import React, { useRef, MutableRefObject, useEffect, useState } from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';
type CanvasRef = MutableRefObject<HTMLCanvasElement | null>;
import { TextGeometry, FontLoader } from "three/examples/jsm/Addons.js";

const Testing2 = () => {
    const [resizelistner, setresizelistner] = useState<number[] | null>(null)
    const canvasRef: CanvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            console.error("Canvas element not found.");
            return;
        }
        if (typeof window !== 'undefined') {
            const scene = new THREE.Scene();
            const geometry = new THREE.SphereGeometry(6, 64, 64)
            const texture = new THREE.TextureLoader().load("/earth.png")
            const material2 = new THREE.MeshStandardMaterial({ map: texture })
            material2.wireframe = false
         

            const material = new THREE.MeshStandardMaterial({
                color: 0x00ff83,
                roughness: 0.3
            })
            const mesh = new THREE.Mesh(geometry, material2)
            scene.add(mesh)
            // text 
            const loader = new FontLoader();

            loader.load('/Poppins_Regular.json', function (font: any) {

                const textGeometry = new TextGeometry('Hello ', {
                    font: font,
                    size: 2,
                    height: 0.2,
                    // curveSegments: 12,
                    // bevelEnabled: true,
                    bevelThickness: 0.5,
                    // bevelSize: 8,
                    // bevelOffset: 0,
                    // bevelSegments: 5

                });
                var textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff ,roughness: 0.1});

                // var textPosition = new THREE.Vector3(1, 10, 0); // Adjust the position as needed

                // Apply the camera's matrix to the text position
                // textPosition.applyMatrix4(camera.matrixWorld);

                // Create the text mesh
                var textMesh = new THREE.Mesh(textGeometry, textMaterial);

                // Set the position of the text mesh
                // textMesh.position.copy(textPosition);
                textMesh.position.set(-7, -7, -10)
                scene.add(textMesh)
                
            });

            ;
            //size 
            const sizes = {
                height: window.innerHeight,
                weight: window.innerWidth
            }
            // light 
            const light = new THREE.PointLight(0xffffff, 60)
            const color = 0xFFFFFF;
const intensity = 1;
// const light = new THREE.DirectionalLight(color, intensity)
            light.position.set(4.6, 9.88, 5.82)
            scene.add(light)

            //camra 

            const camera = new THREE.PerspectiveCamera(45, sizes.weight / sizes.height, 0.1, 100)
            camera.position.z = 20
            scene.add(camera)
            const canvas = canvasRef.current
            //controls

            const controls = new OrbitControls(camera, canvas)
            controls.enableDamping = true
            controls.enablePan = false;
            controls.enableZoom = false;
            controls.autoRotate = false
            controls.autoRotateSpeed = 5

            // render

            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
            // canvasRef.current?.appendChild(renderer.domElement);
            renderer.setSize(sizes.weight, sizes.height)
            renderer.setPixelRatio(2)
            renderer.render(scene, camera)



            //color 

            let mousedown = false
            window.addEventListener("mousedown", () => mousedown = true)
            window.addEventListener("mouseup", () => mousedown = false)



            window.addEventListener("mousemove", (e) => {
                if (mousedown) {
                    let rgb: number[] = []
                    rgb = [Math.round((e.pageX / sizes.weight) * 255), Math.round((e.pageY / sizes.height) * 255), 150]
                    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
                    console.log(rgb)

                    gsap.to(mesh.material.color, {
                        r: newColor.r,
                        g: newColor.g,
                        b: newColor.b
                    })

                }
            })

            const handleResize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                renderer.setSize(width, height);
            };

            window.addEventListener('resize', handleResize);




            const loop = () => {
                
                controls.update()
                renderer.render(scene, camera)
                window.requestAnimationFrame(loop)
            }
            loop()
            //gsap

            const t1 = gsap.timeline({ defaults: { duration: 1 } })
            t1.fromTo(mesh.scale, { x: 0, z: 0, y: 0 }, { x: 1, z: 1, y: 1 })
            t1.fromTo("#nav", { y: "-100" }, { y: "0%" })
            t1.fromTo(".title", { opacity: 0 }, { opacity: 1 })
            gsap.to(mesh.rotation, { duration: 30, y: Math.PI * 2, repeat: -1, ease: "power2.inOut" });

            // Start the animation
            // gsap.fromTo(
            //   mesh.rotation,
            //   { x: 0, y: 0, z: 0 }, // Initial rotation
            //   { duration: 3, x: Math.PI * 0.5, y: Math.PI * 0.5, z: Math.PI * 0.5, repeat: -1, ease: "power2.inOut" } // Final rotation
            // );


            // Clean up the event listener when the component is unmounted
            // var tl = gsap.timeline({ repeat: -1, ease: "power2.inOut" });

            // // Animate the light's position around the sphere
            // tl.to(light.position, { duration: 3, x: 0, y: 13, z: -10 });
            // tl.to(light.position, { duration: 3, x: 10, y: 13, z: 0 });
            // tl.to(light.position, { duration: 3, x: 0, y: 13, z: 10 });
            // tl.to(light.position, { duration: 3, x: -10, y: 13, z: 0 });
            var t2 = gsap.timeline({ repeat: -1, ease: "linear" });

            // Animate the light's rotation around the sphere
            t2.to(light.rotation, { duration: 3, x: Math.PI * 2, z: Math.PI * 2 });
            
            // Start the animation
            t2.play();
            // Start the animation
            // tl.play();
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [resizelistner]);


    return (

        <div>
            <p className="title ">Give it a spin</p>
            <canvas ref={canvasRef} className='webgl'>

            </canvas>

        </div>
    )
}

export default Testing2