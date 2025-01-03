'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Project/Experience";
import { Suspense, useState } from "react";
import { Competitive, GameDev, Others, Website } from '@/components/project/Modal'
import { BackButton } from "@/components/NavigateButton";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Project() {
    const [openWebsite, setOpenWebsite] = useState(false);
    const [openGameDev, setOpenGameDev] = useState(false);
    const [openCompetitive, setOpenCompetitive] = useState(false);
    const [openOthers, setOpenOthers] = useState(false);

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
                    <Experience setOpenWebsite={setOpenWebsite} setOpenGameDev={setOpenGameDev} setOpenCompetitive={setOpenCompetitive} setOpenOthers={setOpenOthers} />
                </Canvas>
            </div>

            {openWebsite && <Website setOpen={setOpenWebsite} />}
            {openGameDev && <GameDev setOpen={setOpenGameDev} />}
            {openCompetitive && <Competitive setOpen={setOpenCompetitive} />}
            {openOthers && <Others setOpen={setOpenOthers} />}

            <BackButton />
        </Suspense>
    </>
}