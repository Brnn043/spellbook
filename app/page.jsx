'use client';
import Experience from './Experience';
import { KeyboardControls, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

export default function Page() {
  const [controls, setControls] = useState({ forward: false, backward: false });

  const handleControl = (action, state) => {
    setControls((prev) => ({ ...prev, [action]: state }));
  };

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


      <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4 z-10">
        <button
          tabIndex={-1}
          onMouseDown={() => handleControl('backward', true)}
          onMouseUp={() => handleControl('backward', false)}
          onTouchStart={() => handleControl('backward', true)}
          onTouchEnd={() => handleControl('backward', false)}
          className="w-28 h-12 flex items-center justify-center text-center text-base bg-white text-black border-2 border-black rounded-full hover:bg-gray-100 focus:outline-none"
        >
          Backward
        </button>
        <button
          tabIndex={-1}
          onMouseDown={() => handleControl('forward', true)}
          onMouseUp={() => handleControl('forward', false)}
          onTouchStart={() => handleControl('forward', true)}
          onTouchEnd={() => handleControl('forward', false)}
          className="w-28 h-12 flex items-center justify-center text-center text-base bg-white text-black border-2 border-black rounded-full hover:bg-gray-100 focus:outline-none"
        >
          Forward
        </button>
      </div>
    </>
  );
}
