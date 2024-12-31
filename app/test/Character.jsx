import { useRef } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Character() {
    const body = useRef();
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const { scene, animations } = useGLTF('/scene.gltf');

    const { actions } = useAnimations(animations, scene);

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

        if (forward || backward) {
            actions['Armature.001|Armature.001Action'].play();
        } else {
            actions['Armature.001|Armature.001Action'].stop();
        }

        let rotationY = Math.PI * 3 / 2;
        if (backward) rotationY *= -1;
        body.current.rotation.y = rotationY
    });

    return (
        <primitive
            ref={body}
            object={scene}
            scale={0.5}
            position={[0, 0.25, 0]}
            rotation-y={Math.PI * 3 / 2}
            castShadow
        />
    );
}

