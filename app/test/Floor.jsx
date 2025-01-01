import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three';

export default function Floor() {

    const { scene } = useGLTF('/floor_005.glb')
    const texture = useLoader(THREE.TextureLoader, '/Textures1.png')
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.map = texture;
            child.material.needsUpdate = true;
        }
    });

    // return <RigidBody type="fixed" restitution={0.2} friction={0}>
    return <>
        <mesh position={[7.5, -0.251, 0.5]} receiveShadow>
            <boxGeometry args={[18, 0.5, 3]} />
            <meshStandardMaterial color="white" />
        </mesh>
        <primitive object={scene.clone()} scale={0.75} position={[0, 0, 0.5]} />
        <primitive object={scene.clone()} scale={0.75} position={[3, 0, 0.5]} />
        <primitive object={scene.clone()} scale={0.75} position={[6, 0, 0.5]} />
        <primitive object={scene.clone()} scale={0.75} position={[9, 0, 0.5]} />
        <primitive object={scene.clone()} scale={0.75} position={[12, 0, 0.5]} />
        <primitive object={scene.clone()} scale={0.75} position={[15, 0, 0.5]} />
    </>
    // </RigidBody>
}