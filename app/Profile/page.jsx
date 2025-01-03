'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Profile/Experience";
import { KnowMe, Education, Interest, Skills } from "@/components/profile/Modal";
import { Suspense, useState } from "react";
import { BackButton } from "@/components/NavigateButton";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Profile() {
    const [openKnowMe, setOpenKnowMe] = useState(false);
    const [openEducation, setOpenEducation] = useState(false);
    const [openInterest, setOpenInterest] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);

    return <>
        <Suspense fallback={<LoadingScreen />}>
            <div className='absolute top-0 left-0 w-full h-full z-10 bg-gradientcustom2'>
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
                    <Experience setOpenKnowMe={setOpenKnowMe} setOpenEducation={setOpenEducation} setOpenInterest={setOpenInterest} setOpenSkills={setOpenSkills} />
                </Canvas>
            </div>


            {openKnowMe && <KnowMe setOpen={setOpenKnowMe} />}
            {openEducation && <Education setOpen={setOpenEducation} />}
            {openInterest && <Interest setOpen={setOpenInterest} />}
            {openSkills && <Skills setOpen={setOpenSkills} />}

            <BackButton />
        </Suspense>
    </>
}