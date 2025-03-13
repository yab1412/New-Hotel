"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
// import style from './index.module.scss'

export default function VirtualTour() {
  const texture = useLoader(TextureLoader, "/image.jpg"); 

  return (
    <Canvas style={{  height: '600px' }} camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      <mesh>
        <sphereGeometry args={[5, 60, 40]} />
        <meshBasicMaterial map={texture} side={2} />
      </mesh>
    </Canvas>
  );
}
