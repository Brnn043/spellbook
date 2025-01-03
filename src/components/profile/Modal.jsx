import { useState } from "react";
import { InfoModal } from "../GlobalModal";


export const KnowMe = ({ setOpen }) => {
    const sentences = [
        "Hello, my name is Raksakul Hiranas but you can call me Beam!",
        "Born on 2nd July, 2005, I am currently in my 2nd year studying Computer Engineering at Chulalongkorn University.",
        "I am an enthusiastic, hardworking, and passionate individual with a love for creativity. I enjoy learning new things, accept challenges, and am very dedicated to my work.",
        "I am driven by my passion for innovation and creativity, always striving to turn challenges into opportunities while seeking continuous growth in both my personal and academic life.",
        "When faced with difficulties, I rely on my dedication and commitment to push through and achieve success.",
        "In my spare time, I like to do coding, drawing, dancing, and some other creative stuff!"
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const isPrevDisabled = currentPage === 0;
    const isNextDisabled = currentPage === Math.floor(sentences.length / 2) - 1;

    const handlePrevGame = () => {
        if (!isPrevDisabled) setCurrentPage(currentPage - 1);
    };

    const handleNextGame = () => {
        if (!isNextDisabled) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-gradientcustom2 border-2 p-7 space-x-4 border-thisBlack rounded-xl overflow-hidden w-3/4 max-w-xl flex flex-col md:flex-row relative justify-center items-center">
                {/* Left Side Image */}
                <div className="w-full h-36 md:w-1/3 md:h-full">
                    <img
                        src="/Beam.webp"
                        alt="Beam"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-2/3 flex flex-col space-y-2 md:space-y-4 pt-6 md:pt-0">
                    {/* Title */}
                    <h3 className="text-thisBlack text-3xl font-bold text-center mb-4">Me</h3>

                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-0 right-2 md:top-4 md:right-4 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
                    >
                        X
                    </button>

                    {/* Content Display with Fixed Height */}
                    <div className="flex flex-col space-y-3 md:h-60">
                        {sentences.slice(currentPage * 2, currentPage * 2 + 2).map((sentence, index) => (
                            <p key={index} className="text-thisBlack rounded text-base font-karla break-words px-1">
                                {sentence}
                            </p>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-4 md:mt-auto font-karla text-thisBlack text-base py-2">
                        <button
                            onClick={handlePrevGame}
                            disabled={isPrevDisabled}
                            className={`px-4 py-2 rounded-full text-white ${isPrevDisabled
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#f3bfe1] hover:bg-[#ef9ad2]"
                                }`}
                        >
                            &lt; Prev
                        </button>
                        <button
                            onClick={handleNextGame}
                            disabled={isNextDisabled}
                            className={`px-4 py-2 rounded-full text-white ${isNextDisabled
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#f3bfe1] hover:bg-[#ef9ad2]"
                                }`}
                        >
                            Next &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


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
            title: 'Technical skills',
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
                    content: 'React, Next.js, Astro, Vue.js, Three.js, React-Three-Fiber etc.'
                },
                {
                    title: 'UI Frameworks',
                    content: 'Tailwind CSS'
                },
                {
                    title: 'Game Development & 3D Tools',
                    content: 'Unity, Blender etc.'
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
                                <div key={index} className="text-thisBlack rounded text-base font-karla flex justify-start items-center px-4">
                                    {/* Display Content Titles and Descriptions */}
                                    {typeof item === 'object' ? (
                                        <div>
                                            <h4 className="font-bold text-left">{item.title}</h4>
                                            <p className="text-left">{item.content}</p>
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