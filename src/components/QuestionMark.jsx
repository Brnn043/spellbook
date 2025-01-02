import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const QuestionMark = ({ position, setOpen }) => {
    const { camera } = useThree();
    const questionMarkRef = useRef();

    useFrame(() => {
        if (questionMarkRef.current) {
            questionMarkRef.current.lookAt(camera.position);  // Make it always face the camera
        }
    });

    const handleClick = () => {
        console.log('clicked');

        setOpen(true);  // Handle interaction on click
    };

    return (
        <sprite
            ref={questionMarkRef}
            position={position}
            onClick={handleClick}
            scale={0.6}
        >
            <spriteMaterial
                attach="material"
                map={new THREE.TextureLoader().load('/question.webp')}  // Load texture from the path
            />
        </sprite >
    );
};
