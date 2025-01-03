export default function MoveButton({ setControls }) {
    const handleControl = (action, state) => {
        setControls((prev) => ({ ...prev, [action]: state }));
    };

    return (
        <>
            <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4 z-10">
                {/* Left Button with hover fill animation */}
                <button
                    tabIndex={-1}
                    onMouseDown={() => handleControl('backward', true)}
                    onMouseUp={() => handleControl('backward', false)}
                    onTouchStart={() => handleControl('backward', true)}
                    onTouchEnd={() => handleControl('backward', false)}
                    className="w-28 h-12 flex items-center justify-center text-center text-base bg-white text-black border-2 border-black rounded-full relative overflow-hidden hover:bg-gray-100 focus:outline-none"
                >
                    <span className="relative z-10">Left</span>
                </button>

                {/* Right Button with hover fill animation */}
                <button
                    tabIndex={-1}
                    onMouseDown={() => handleControl('forward', true)}
                    onMouseUp={() => handleControl('forward', false)}
                    onTouchStart={() => handleControl('forward', true)}
                    onTouchEnd={() => handleControl('forward', false)}
                    className="w-28 h-12 flex items-center justify-center text-center text-base bg-white text-black border-2 border-black rounded-full relative overflow-hidden hover:bg-gray-100 focus:outline-none"
                >
                    <span className="relative z-10">Right</span>
                </button>
            </div>

            <style jsx>{`
                button::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.1); /* Light fill color */
                    width: 0%;
                    transition: width 0.5s ease-in-out;
                    z-index: 0;
                }

                button:hover::before {
                    width: 100%; /* Fill the button on hover */
                }

                button:hover {
                    background-color: rgba(236, 199, 255); /* Slight darken effect on hover */
                }
            `}</style>
        </>
    );
}
