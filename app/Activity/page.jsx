'use client';
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "@/Activity/Experience";
import { Work } from "@/components/activity/Modal";
import { Suspense, useState } from "react";
import { BackButton } from "@/components/NavigateButton";
import { LoadingScreen } from "@/components/LoadingScreen";
import HintMessage from "@/components/HintMessage";
import { roomSentences } from "@/utils/Sentence";

export default function Activity() {
    const [openWork, setOpenWork] = useState(false);

    return (
        <>
            <Suspense fallback={LoadingScreen}>
                <div className='absolute top-0 left-0 w-full h-full z-10 bg-gradientcustom2'>
                    <Canvas
                        shadows
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            // position: [2.5, 4, 6],
                            position: [2, 2, 2]
                        }}
                    >
                        <OrbitControls />
                        <Experience setOpenWork={setOpenWork} />
                        <Preload all />
                    </Canvas>
                </div>

                {openWork && <Work setOpen={setOpenWork} />}

                <BackButton />

                <HintMessage sentences={roomSentences} />
            </Suspense>
        </>
    );
}
