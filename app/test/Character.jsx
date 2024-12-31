import { useRef } from "react";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Character() {
    const body = useRef();
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const { scene } = useGLTF('/scene.gltf');

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });


    useFrame((state, delta) => {
        if (!body.current) return;
        const { forward, backward } = getKeys();

        const speed = 1.5 * delta;

        body.current.position.x += forward ? speed : backward ? -speed : 0;
    });

    return (
        <primitive
            ref={body}
            object={scene}
            scale={0.5}
            position={[0, 0.25, 0]}
            rotation-y={Math.PI * 3 / 2}
        />
    );
}
