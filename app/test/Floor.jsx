import { RigidBody } from "@react-three/rapier";

export default function Floor() {
    // return <RigidBody type="fixed" restitution={0.2} friction={0}>
    return <mesh position={[0, 0, 0.5]} receiveShadow>
        <boxGeometry args={[10, 0.5, 3]} />
        <meshStandardMaterial />
    </mesh>
    // </RigidBody>
}