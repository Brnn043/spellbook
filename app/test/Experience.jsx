import { Physics } from "@react-three/rapier"
import Floor from "./Floor"
import Character from "./Character"
export default function Experience() {
    return <>

        <color args={['#bdedfc']} attach="background" />
        <ambientLight intensity={0.5} castShadow />
        <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1.5}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={0.1}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
        />
        {/* <pointLight position-y={3} intensity={10} castShadow /> */}
        {/* <Physics debug> */}
        <Floor />
        <Character />
        {/* </Physics> */}
    </>
}