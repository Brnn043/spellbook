import { useState } from "react";

export const KnowMe = ({ setOpen }) => {
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

export const Education = ({ setOpen }) => {
    return (
        <>
            <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
                <div className="bg-white border-2 border-black rounded-xl p-6 flex flex-col space-y-2 md:flex-row md:space-x-4 relative">
                    <div>
                        <h1>Education</h1>
                        <h2>Sci-Math program, Saint Joseph Convent</h2>
                        <h2>Computer Engineering, Chulalongkorn university</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => setOpen(false)}
                            className="bg-blue-500 hover:bg-blue-400 text-white border-2 border-black px-4 py-2 rounded-lg"
                        >
                            close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export const Interest = ({ setOpen }) => {
    return (
        <>
            <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
                <div className="bg-white border-2 border-black rounded-xl p-6 flex flex-col space-y-2 md:flex-row md:space-x-4 relative">
                    <div>
                        <h1>Interest</h1>
                        <h2>Web development</h2>
                        <h2>Game development</h2>
                        <h2>Augmented Reality/Virtual Reality</h2>
                        <h2>Computer Graphics</h2>
                        <h2>Artificial Intelligence</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => setOpen(false)}
                            className="bg-blue-500 hover:bg-blue-400 text-white border-2 border-black px-4 py-2 rounded-lg"
                        >
                            close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export const Skills = ({ setOpen }) => {
    const [currentSection, setCurrentSection] = useState("technical");

    return (
        <>
            <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
                <div className="bg-white border-2 border-black rounded-xl p-6 flex flex-col space-y-4 md:flex-row md:space-x-4 relative">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-center mb-4">Skills</h2>

                        {currentSection === "technical" ? (
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                                <h4 className="font-semibold">Programming Languages:</h4>
                                <p>C, C++, C#, Python, Java</p>

                                <h4 className="font-semibold mt-2">Web Technologies:</h4>
                                <p>HTML, CSS, JavaScript, TypeScript</p>

                                <h4 className="font-semibold mt-2">Frameworks & Libraries:</h4>
                                <p>React, Next.js, Astro, Vue.js, Three.js, React-Three-Fiber</p>

                                <h4 className="font-semibold mt-2">UI Frameworks:</h4>
                                <p>Tailwind CSS</p>

                                <h4 className="font-semibold mt-2">Game Development & 3D Tools:</h4>
                                <p>Unity, Blender</p>

                                <h4 className="font-semibold mt-2">Version Control:</h4>
                                <p>Git, GitHub</p>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Language Skills</h3>
                                <ul className="list-disc pl-5">
                                    <li>Advanced Level (C1) in English, certified by Stafford House</li>
                                    <li>Currently practicing Japanese</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center items-center mt-4 md:mt-0 space-x-4">
                        <button
                            onClick={() => {
                                if (currentSection === "technical") {
                                    setCurrentSection("language");
                                } else {
                                    setOpen(false);
                                }
                            }}
                            className="bg-green-500 hover:bg-green-400 text-white border-2 border-black px-4 py-2 rounded-lg"
                        >
                            {currentSection === "technical" ? "Next" : "Close"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};