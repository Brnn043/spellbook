'use client';
import MoveButton from '@/components/MoveButton';
import Experience from './Experience';
import { KeyboardControls, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

export default function Page() {
  const [controls, setControls] = useState({ forward: false, backward: false });

  return (
    <>
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
            position: [2.5, 4, 6],
          }}
        >
          <OrbitControls />
          <Experience controls={controls} />
        </Canvas>
      </KeyboardControls>

      <MoveButton setControls={setControls} />
    </>
  );
}
