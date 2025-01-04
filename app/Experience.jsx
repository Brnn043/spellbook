import Character from "../src/components/Character"
import Hallway from "../src/components/Hallway"

export default function Experience({ controls, openModal, checkDoorTrigger }) {
    return <>

        <ambientLight intensity={0.5} color="#ecc7ff" />
        <directionalLight
            castShadow
            name="shadowLight"
            position={[10, 13, 5]}
            intensity={3}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-camera-near={1}
            shadow-camera-far={100}
            shadow-camera-left={-3}
            shadow-camera-right={20}
            shadow-camera-top={15}
            shadow-camera-bottom={-20}
        />
        <Character controls={controls} openModal={openModal} checkDoorTrigger={checkDoorTrigger} />
        <Hallway />
    </>
}
