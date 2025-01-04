import Bedroom from "@/components/profile/Bedroom";
import { QuestionMark } from "@/components/QuestionMark";
import { BakeShadows, Float } from "@react-three/drei";

export default function Experience({ setOpenKnowMe, setOpenEducation, setOpenInterest, setOpenSkills }) {
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
        <group position={[-0.75, -2, -1]}>
            <Bedroom />
            {/* Bed */}
            <QuestionMark position={[-0.75, 1.5, 0.5]} setOpen={setOpenInterest} title={"Interests"} />
            {/* Broom */}
            <QuestionMark position={[-1, 1.5, 2]} setOpen={setOpenEducation} title={"Education"} />
            {/* Mirror */}
            <QuestionMark position={[0.65, 2.2, -0.3]} setOpen={setOpenKnowMe} title={"Me"} />
            {/* Hat */}
            <QuestionMark position={[1.65, 2.85, -0.75]} setOpen={setOpenSkills} title={"Skills"} />
        </group>

        <BakeShadows />
    </>
}