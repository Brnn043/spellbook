import { useState } from "react";

export const NavigateButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-4 right-4 z-10 flex flex-col justify-center items-center">
            <div className="w-24 space-y-4">
                {/* Visit Button without any animation */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-24 py-2 border-2 border-black bg-[#ecc7ff] text-black rounded-full shadow-lg hover:bg-[#d4ade9] transition-all"
                >
                    Visit
                </button>

                {/* The dropdown menu with slide effect */}
                {isOpen && (
                    <div
                        className="shadow-lg rounded-lg flex flex-col space-y-2 justify-center items-center"
                    >
                        <a
                            href="/Profile"
                            onClick={() => setIsOpen(false)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-24 py-2 border-2 border-black text-center bg-white hover:bg-purple-100 rounded-full transition-all"
                            style={{
                                animation: isOpen ? `slideIn 0.3s ease-out forwards` : "none",
                                animationDelay: "0s", // First item appears immediately
                            }}
                        >
                            Profile
                        </a>
                        <a
                            href="/Project"
                            onClick={() => setIsOpen(false)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-24 py-2 border-2 border-black text-center bg-white hover:bg-purple-100 rounded-full transition-all"
                            style={{
                                animation: isOpen ? `slideIn 0.3s ease-out forwards` : "none",
                                animationDelay: "0.1s", // Second item with a slight delay
                            }}
                        >
                            Project
                        </a>
                        <a
                            href="/Activity"
                            onClick={() => setIsOpen(false)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-24 py-2 border-2 border-black text-center bg-white hover:bg-purple-100 rounded-full transition-all"
                            style={{
                                animation: isOpen ? `slideIn 0.3s ease-out forwards` : "none",
                                animationDelay: "0.2s", // Third item with a further delay
                            }}
                        >
                            Activity
                        </a>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-25px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};
