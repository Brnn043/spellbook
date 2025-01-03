import { useState } from 'react';

export default function MoveButton({ setControls }) {
    const [isLeftPressed, setIsLeftPressed] = useState(false);
    const [isRightPressed, setIsRightPressed] = useState(false);

    const handleControl = (action, state) => {
        setControls((prev) => ({ ...prev, [action]: state }));
    };

    const handleLeftMouseDown = () => {
        setIsLeftPressed(true);
    };

    const handleLeftMouseUp = () => {
        setIsLeftPressed(false);
    };

    const handleRightMouseDown = () => {
        setIsRightPressed(true);
    };

    const handleRightMouseUp = () => {
        setIsRightPressed(false);
    };

    return (
        <>
            <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4 z-10">
                {/* Left Button */}
                <button
                    tabIndex={-1}
                    onMouseDown={() => {
                        handleControl('backward', true);
                        handleLeftMouseDown();
                    }}
                    onMouseUp={() => {
                        handleControl('backward', false);
                        handleLeftMouseUp();
                    }}
                    onTouchStart={() => {
                        handleControl('backward', true);
                        handleLeftMouseDown();
                    }}
                    onTouchEnd={() => {
                        handleControl('backward', false);
                        handleLeftMouseUp();
                    }}
                    className={`font-karla w-28 h-12 flex items-center justify-center text-center text-lg ${isLeftPressed ? 'bg-gradientcustom border-white' : 'bg-gradientcustom2 border-thisBlack'} text-thisBlack border-2 rounded-full relative overflow-hidden focus:outline-none transition-all duration-200`}
                >
                    <span className="relative z-10">Left</span>
                </button>

                {/* Right Button */}
                <button
                    tabIndex={-1}
                    onMouseDown={() => {
                        handleControl('forward', true);
                        handleRightMouseDown();
                    }}
                    onMouseUp={() => {
                        handleControl('forward', false);
                        handleRightMouseUp();
                    }}
                    onTouchStart={() => {
                        handleControl('forward', true);
                        handleRightMouseDown();
                    }}
                    onTouchEnd={() => {
                        handleControl('forward', false);
                        handleRightMouseUp();
                    }}
                    className={`font-karla w-28 h-12 flex items-center justify-center text-center text-lg ${isRightPressed ? 'bg-gradientcustom border-white' : 'bg-gradientcustom2 border-thisBlack'} text-thisBlack border-2 rounded-full relative overflow-hidden focus:outline-none transition-all duration-200`}
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
                    background-color: rgba(0, 0, 0, 0.1);
                    width: 0%;
                    transition: width 0.5s ease-in-out;
                    z-index: 0;
                }

                button:hover::before {
                    width: 100%;
                }

                button:hover {
                    background-color: rgba(236, 199, 255);
                }
            `}</style>
        </>
    );
}
