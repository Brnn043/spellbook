import { useState } from "react";

export const Work = ({ setOpen }) => {
    const sentences = [
        "Hello, I’m Raksakul Hiranas, but please feel free to call me Beam.",
        "Born on July 2nd, 2005, I am currently in my 2nd year studying Computer Engineering at Chulalongkorn university.",
        "I am an enthusiastic, hardworking, and passionate individual with a love for creativity.",
        "I am someone who quickly adapts to new challenges and always seeks innovative solutions.",
        "When faced with difficulties, I rely on my dedication and commitment to push through and achieve success.",
        'My motto is "Commitment is the key to success."'
    ];

    const [sentenceIndex, setSentenceIndex] = useState(0);

    const showNextSentences = () => {
        setSentenceIndex((prevIndex) => {
            const nextIndex = prevIndex + 2;
            return nextIndex < sentences.length ? nextIndex : prevIndex;
        });
        if (sentenceIndex + 1 === sentences.length - 1) setOpen(false)
    };

    return (
        <>
            <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
                <div className="bg-white border-2 border-black rounded-xl p-6 w-3/4 max-w-xl flex flex-col space-y-2 md:flex-row md:space-x-4 relative">
                    <img src="/Beam.webp" className="w-48" alt="Beam" />
                    <div>
                        <p className="text-base">
                            {sentences[sentenceIndex]}
                        </p>
                        <p className="text-base mt-2">
                            {sentences[sentenceIndex + 1]}
                        </p>
                    </div>
                    <div className="flex justify-center items-center pt-4 mt-4">
                        <button
                            onClick={showNextSentences}
                            className="bg-blue-500 hover:bg-blue-400 text-white border-2 border-black px-4 py-2 rounded-lg"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
