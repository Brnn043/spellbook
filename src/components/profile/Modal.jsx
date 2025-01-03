import { useState } from "react";
import { InfoModal } from "../GlobalModal";

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
    const data = [
        "Sci-Math Program, Saint Joseph Convent School",
        "Computer Engineering , Chulalongkorn University"
    ];

    return <InfoModal title={'Education'} setOpen={setOpen} data={data} />
}

export const Interest = ({ setOpen }) => {
    const data = [
        "Web development",
        "Game development",
        "Augmented reality / Virtual reality / Metaverse",
        "Computer graphics",
        "Artificial Intelligence"
    ]
    return <InfoModal title={'Interests'} setOpen={setOpen} data={data} />
}


export const Skills = ({ setOpen }) => {
    const data = [
        {
            title: 'Programming Languages',
            content: [
                {
                    title: 'Programming Languages',
                    content: 'C, C++, C#, Python, Java'
                },
                {
                    title: 'Web Technologies',
                    content: 'HTML, CSS, JavaScript, TypeScript'
                },
                {
                    title: 'Frameworks & Libraries',
                    content: 'React, Next.js, Astro, Vue.js, Three.js, React-Three-Fiber'
                },
                {
                    title: 'UI Frameworks',
                    content: 'Tailwind CSS'
                },
                {
                    title: 'Game Development & 3D Tools',
                    content: 'Unity, Blender'
                },
                {
                    title: 'Version Control',
                    content: 'Git, GitHub'
                }
            ]
        },
        {
            title: 'Language Skills',
            content: [
                'Advanced Level (C1) in English, certified by Stafford House UK',
                'Currently practicing Japanese',
                'Native speaker, Thai language'
            ]
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevGame = () => {
        if (currentPage === 0) setCurrentPage(1);
        else setCurrentPage(0);
    };

    const handleNextGame = () => {
        if (currentPage === 0) setCurrentPage(1);
        else setCurrentPage(0);
    };

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-white border-2 border-thisBlack rounded-xl overflow-hidden w-3/4 max-w-xl flex flex-col md:flex-col relative">
                {/* Header */}
                <div className="bg-gradientcustom text-thisBlack border-b-2 border-thisBlack h-16 text-center flex justify-center items-center font-payToneOne text-2xl relative">
                    Skills
                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-2 right-2 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
                    >
                        X
                    </button>
                </div>

                <div className="p-4">
                    <div className="flex justify-between items-center mb-4 font-karla text-thisBlack text-xl">
                        <button
                            onClick={handlePrevGame}
                            className="px-4 py-2 bg-[#f3bfe1] hover:bg-[#ef9ad2] text-white rounded-full"
                        >
                            &lt;
                        </button>
                        <h3 className="font-karla text-lg">{data[currentPage].title}</h3>
                        <button
                            onClick={handleNextGame}
                            className="px-4 py-2 bg-lightPink hover:bg-[#ef9ad2] text-white rounded-full"
                        >
                            &gt;
                        </button>
                    </div>

                    <div className="flex flex-col space-y-3">
                        {currentPage === 1 ? (
                            <ul className="list-none pl-0 space-y-2">
                                {data[currentPage].content.map((item, index) => (
                                    <li key={index} className="text-thisBlack font-karla flex items-center">
                                        <span className="text-thisBlack mr-2">★</span>{item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            data[currentPage].content.map((item, index) => (
                                <div key={index} className="text-thisBlack rounded text-base font-karla">
                                    {/* Display Content Titles and Descriptions */}
                                    {typeof item === 'object' ? (
                                        <div>
                                            <h4 className="font-bold">{item.title}</h4>
                                            <p>{item.content}</p>
                                        </div>
                                    ) : (
                                        <p>{item}</p>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};