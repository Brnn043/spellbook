import { useLoader } from "@react-three/fiber";
import { DRACOLoader, GLTFLoader } from "three-stdlib";
import * as THREE from 'three';
import { useEffect } from "react";

export default function Bedroom() {
    const model = useLoader(GLTFLoader, '/profile.glb', (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        loader.setDRACOLoader(dracoLoader);
    });

    const texture = useLoader(THREE.TextureLoader, '/Textures1.png');

    useEffect(() => {
        if (model && model.scene) {
            model.scene.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.map = texture;
                    child.material.needsUpdate = true;

                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        }
    }, [model, texture]);

    if (texture) {
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;
    }

    return (
        <>
            <group>
                <primitive object={model.scene} />
            </group>
        </>
    );
}
