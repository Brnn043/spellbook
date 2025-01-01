import { Physics } from "@react-three/rapier"
import Floor from "./Floor"
import Character from "./Character"
import Wall from "./Wall"
import Hallway from "./Hallway"
export default function Experience() {
    return <>

        <color args={['#000000']} attach="background" />
        <ambientLight intensity={0.5} />
        <directionalLight
            castShadow
            name="shadowLight"
            position={[5, 10, 15]}
            intensity={3}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-camera-near={1}
            shadow-camera-far={100}
            shadow-camera-left={-4}
            shadow-camera-right={30}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
        />
        {/* <pointLight position-y={3} intensity={10} castShadow /> */}
        {/* <Physics debug> */}
        {/* <Floor /> */}
        <Character />
        {/* <Wall /> */}
        <Hallway />
        {/* </Physics> */}
    </>
}
