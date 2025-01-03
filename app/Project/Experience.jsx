import PotionRoom from "@/components/project/PotionRoom";
import { QuestionMark } from "@/components/QuestionMark";

export default function Experience({ setOpenWebsite, setOpenGameDev, setOpenCompetitive, setOpenOthers }) {
    return <>
        <ambientLight intensity={0.5} color="#f8eaff" />
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
        <PotionRoom />

        {/* Desk */}
        <QuestionMark position={[0.5, 1.5, 1]} setOpen={setOpenWebsite} />
        {/* Pot */}
        <QuestionMark position={[-1.1, 2, 0.47]} setOpen={setOpenGameDev} />
        {/* BookShelves */}
        <QuestionMark position={[0.75, 2.5, -0.5]} setOpen={setOpenCompetitive} />
        {/* Vase */}
        <QuestionMark position={[-1.25, 3.5, -0.75]} setOpen={setOpenOthers} />
    </>
}