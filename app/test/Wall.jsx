export default function Wall() {
    return <>
        <mesh rotation-y={Math.PI} position={[0, 1.25, -1.05]}>
            <boxGeometry args={[10, 3, 0.1]} />
            <meshStandardMaterial />
        </mesh>
    </>
}   