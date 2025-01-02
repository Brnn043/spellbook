export default function MoveButton({ setControls }) {
    const handleControl = (action, state) => {
        setControls((prev) => ({ ...prev, [action]: state }));
    };
    return <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4 z-10">
        <button
            tabIndex={-1}
            onMouseDown={() => handleControl('backward', true)}
            onMouseUp={() => handleControl('backward', false)}
            onTouchStart={() => handleControl('backward', true)}
            onTouchEnd={() => handleControl('backward', false)}
            className="w-28 h-12 flex items-center justify-center text-center text-base bg-white text-black border-2 border-black rounded-full hover:bg-gray-100 focus:outline-none"
        >
            Left
        </button>
        <button
            tabIndex={-1}
            onMouseDown={() => handleControl('forward', true)}
            onMouseUp={() => handleControl('forward', false)}
            onTouchStart={() => handleControl('forward', true)}
            onTouchEnd={() => handleControl('forward', false)}
            className="w-28 h-12 flex items-center justify-center text-center text-base bg-white text-black border-2 border-black rounded-full hover:bg-gray-100 focus:outline-none"
        >
            Right
        </button>
    </div>
}