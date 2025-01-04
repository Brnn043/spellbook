import PotionRoom from "@/components/project/PotionRoom";
import { QuestionMark } from "@/components/QuestionMark";
import { BakeShadows, Float } from "@react-three/drei";

export default function Experience({ setOpenWebsite, setOpenGameDev, setOpenCompetitive, setOpenOthers }) {
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
        <group position={[-0.5, -2.1, -1]}>
            <PotionRoom />
            {/* Desk */}
            <QuestionMark position={[0.5, 1.5, 1]} setOpen={setOpenWebsite} title={"WebDev"} />
            {/* Pot */}
            <QuestionMark position={[-1.1, 2, 0.47]} setOpen={setOpenGameDev} title={"GameDev"} />
            {/* BookShelves */}
            <QuestionMark position={[0.75, 2.5, -0.5]} setOpen={setOpenCompetitive} title={"Competitive\nProgramming"} />
            {/* Vase */}
            <QuestionMark position={[-1.25, 3.5, -0.75]} setOpen={setOpenOthers} title={"Others"} />
        </group>
        <BakeShadows />
    </>
}