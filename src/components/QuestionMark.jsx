import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const QuestionMark = ({ position, setOpen }) => {
    const { camera } = useThree();
    const questionMarkRef = useRef();

    useFrame(() => {
        if (questionMarkRef.current) {
            questionMarkRef.current.lookAt(camera.position);
        }
    });

    const handleClick = () => {
        console.log("clicked");
        setOpen(true);
    };

    const handlePointerOver = (e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
    };

    const handlePointerOut = (e) => {
        e.stopPropagation();
        document.body.style.cursor = "default";
    };

    return (
        <sprite
            ref={questionMarkRef}
            position={position}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            scale={0.6}
        >
            <spriteMaterial
                attach="material"
                map={new THREE.TextureLoader().load("/question.webp")}
            />
        </sprite>
    );
};
