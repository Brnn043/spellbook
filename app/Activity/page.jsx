'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Activity/Experience";
import { Work } from "@/components/activity/Modal";
import { useState } from "react";

export default function Activity() {
    const [openWork, setOpenWork] = useState(false);

    return <>
        <div className='absolute top-0 left-0 w-full h-full z-10 bg-black'>
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
                <Experience setOpenWork={setOpenWork} />
            </Canvas>
        </div>

        {openWork && <Work setOpen={setOpenWork} />}
    </>
}