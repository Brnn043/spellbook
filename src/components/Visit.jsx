export default function Visit({ name, setOpen }) {

    const handleNotyet = () => {
        setOpen(false);
        console.log('change to false');

    }
    return <>
        <div className="fixed w-full h-full flex justify-center items-center z-30">
            <div className="bg-amber-300 flex flex-col justify-center items-center p-6 border-2 border-black rounded-xl space-y-4">
                <p>Want to visit {name} ?</p>
                <button className="bg-white hover:bg-slate-200 border-2 border-black px-4 py-1 rounded-lg text-center w-24">yes</button>
                <button className="bg-white hover:bg-slate-200 border-2 border-black px-4 py-1 rounded-lg text-center w-24" onClick={handleNotyet}>not yet</button>
            </div>
        </div >
    </>
}