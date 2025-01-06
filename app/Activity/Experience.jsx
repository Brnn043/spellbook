import ExploreRoom from "@/components/activity/ExploreRoom";
import { QuestionMark } from "@/components/QuestionMark";
import { BakeShadows } from "@react-three/drei";
import Character from "@/components/StaticCharacter";

export default function Experience({ setOpenWork }) {
    return <>
        <ambientLight intensity={0.25} color="#f8eaff" />
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
            shadow-bias={-0.0005}
        />
        <group position={[-0.5, -2.25, -1]}>
            <ExploreRoom />
            <QuestionMark position={[0, 2, 0]} setOpen={setOpenWork} title={"Activity"} />
        </group>

        <Character position={[0.75, -2.06, -1]} rotation={[0, Math.PI - 0.25, 0]} />
        <BakeShadows />
    </>
}