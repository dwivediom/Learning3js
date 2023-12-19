"use client"

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
 export const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
        console.error("Canvas element not found.");
        return;
      }
    if (typeof window !== 'undefined') {
        
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({canvas:containerRef.current});
            renderer.setSize(window.innerWidth, window.innerHeight);
           
            camera.position.z = 5;
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
          
          // Render the scene and camera
            renderer.render(scene, camera);
        
        
        }
  }, []);

  return <div ref={containerRef} />;
};

;