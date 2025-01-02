'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Profile/Experience";
import { KnowMe, Education, Interest, Skills } from "@/components/profile/Modal";
import { useState } from "react";

export default function Profile() {
    const [openKnowMe, setOpenKnowMe] = useState(true);
    const [openEducation, setOpenEducation] = useState(true);
    const [openInterest, setOpenInterest] = useState(true);
    const [openSkills, setOpenSkills] = useState(true);

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
                <Experience />
            </Canvas>
        </div>


        {/* {openKnowMe && <KnowMe setOpen={setOpenKnowMe} />} */}
        {/* {openEducation && <Education setOpen={setOpenEducation} />} */}
        {/* {openInterest && <Interest setOpen={setOpenInterest} />} */}
        {openSkills && <Skills setOpen={setOpenSkills} />}
    </>
}