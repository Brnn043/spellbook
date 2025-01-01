'use client'
import Experience from "./Experience";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Test() {

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
            // gl={{ toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace }}
            >
                {/* Post-processing Effects */}
                {/* <EffectComposer>
                    <Bloom intensity={0.1} luminanceThreshold={0.1} luminanceSmoothing={0.2} />
                </EffectComposer> */}
                <OrbitControls />
                <Experience />
            </Canvas>
        </KeyboardControls>
    );
}

export default Test;
