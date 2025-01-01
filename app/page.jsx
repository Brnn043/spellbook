'use client';
import MoveButton from '@/components/MoveButton';
import Experience from './Experience';
import { KeyboardControls, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Visit from '@/components/Visit';

export default function Page() {
  const [controls, setControls] = useState({ forward: false, backward: false });
  const [openProfile, setOpenProfile] = useState(true);
  const [openProject, setOpenProject] = useState(true);
  const [openActivity, setOpenActivity] = useState(true);

  const isOpen = openProfile || openProfile || openActivity;

  return (
    <>
      <div className='absolute top-0 left-0 w-full h-full z-10'>
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
            <Experience controls={controls} openModal={isOpen} />
          </Canvas>
        </KeyboardControls>
      </div>

      <MoveButton setControls={setControls} />
      {openProfile && <Visit name={'Profile'} setOpen={setOpenProfile} />}
      {openProject && <Visit name={'Project'} setOpen={setOpenProject} />}
      {openActivity && <Visit name={'Activity'} setOpen={setOpenActivity} />}
    </>
  );
}
