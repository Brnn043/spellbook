'use client'
import Experience from "./Experience";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Page() {

  return (

    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'backward', keys: ['ArrowLeft', 'KeyA'] },
      ]}
    >
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6]
        }}
      >
        <OrbitControls />
        <Experience />
      </Canvas>
    </KeyboardControls>
  );
}