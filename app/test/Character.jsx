import { useRef, useEffect } from "react";
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


    useEffect(() => {
        if (animations) {
            console.log("Loaded animations:", animations.map(anim => anim.name));
        }

        if (actions && actions['Armature.001|Armature.001Action']) {
            actions['Armature.001|Armature.001Action'].play();
        } else {
            console.warn("Animation 'Armature.001|Armature.001Action' not found. Check name.");
        }
    }, [actions, animations]);

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
            castShadow
        />
    );
}

