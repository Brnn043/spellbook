import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";

function WallWood() {
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshStandardMaterial({ color: '#876c5e' })
    const { scene } = useGLTF('/wallwood.glb')

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
    return <>
        {/* <mesh receiveShadow geometry={geometry} material={material} rotation={[0, 0, Math.PI / 2]} position={[-1, 1.25, -0.95]} scale={[2.5, 0.25, 0.1]} /> */}
        <primitive object={scene} scale={0.5} rotation-y={Math.PI / 2 * 3} position={[-5.5, -4, 0]} />
    </>
}

export default function Wall() {

    const { scene } = useGLTF('/floor_034.glb')

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    return <>
        <mesh rotation-y={Math.PI} position={[7.5, 1, -1.05]} receiveShadow>
            <boxGeometry args={[18, 3, 0.1]} />
            <meshStandardMaterial color="#ffdd96" />
        </mesh>
        {/* <primitive object={scene.clone()} scale={0.75} rotation-x={Math.PI / 2} position={[0, 1.25, -1]} /> */}
        <WallWood />
    </>
}   