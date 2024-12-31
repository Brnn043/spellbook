import { RigidBody } from "@react-three/rapier";

export default function Floor() {
    // return <RigidBody type="fixed" restitution={0.2} friction={0}>
    return <mesh receiveShadow>
        <boxGeometry args={[10, 0.5, 2]} />
        <meshStandardMaterial />
    </mesh>
    // </RigidBody>
}