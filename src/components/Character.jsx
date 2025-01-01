import { useRef } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

export default function Character({ controls, openModal }) {
    const body = useRef();
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const { scene, animations } = useGLTF('/scene.gltf');

    const { actions } = useAnimations(animations, scene);

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }

        if (child.material) {
            child.material.emissive = new THREE.Color(0xbc5cff);
            child.material.emissiveIntensity = 1;
        }
    });

    useFrame((state, delta) => {
        if (!body.current) return;
        if (openModal) return;
        let { forward, backward } = getKeys();

        forward = forward || controls.forward;
        backward = backward || controls.backward;

        const speed = 2 * delta;

        const positionX = body.current.position.x + (forward ? speed : backward ? -speed : 0);

        if (!(positionX < -0.8 || positionX > 26)) body.current.position.x = positionX;

        if (actions && (forward || backward)) {
            actions['Armature.001|Armature.001Action'].play();
        } else {
            actions['Armature.001|Armature.001Action'].stop();
        }

        let rotationY = Math.PI * 3 / 2;
        if (backward) rotationY *= -1;
        body.current.rotation.y = rotationY

    });

    return (
        <>
            <primitive
                ref={body}
                object={scene}
                scale={0.5}
                position={[0.3, 0, 0]}
                rotation-y={Math.PI * 3 / 2}
                castShadow
            />
        </>
    );
}

