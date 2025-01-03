import { useState, useEffect } from "react";
import { ProjectModal } from "../GlobalModal";

export const Website = ({ setOpen }) => {
    const sentences = [
        "Tinkerbread",
        "Larngear passport",
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

export const GameDev = ({ setOpen }) => {
    const gameData = [
        {
            title: "Witch's Garden",
            images: ['/Beam.webp', '/Beam.webp', '/Beam.webp'],
            description: 'Welcome to the Witch\'s Garden! Explore magical plants and meet mystical creatures.',
            tags: ['magic', 'garden', 'witch', 'mystical'],
            viewMore: [
                {
                    title: 'Github',
                    link: 'https://witchcraft.com',
                    linkTitle: 'my github here'
                },
                {
                    title: 'Playthrough',
                    link: 'https://witchgardens.com',
                    linkTitle: 'very short'
                },
            ],
        },
        {
            title: "Witchling's Coffeehouse",
            images: ['/image4.jpg', '/image5.jpg', '/image6.jpg'],
            description: 'Relax and enjoy a hot cup of brew at Witchling\'s Coffeehouse, where magic happens.',
            tags: ['coffee', 'witchling', 'cozy', 'brew'],
            viewMore: null,
        },
    ];

    return <ProjectModal title={'Game Development'} setOpen={setOpen} data={gameData} />
};



export const Competitive = ({ setOpen }) => {
    const sentences = [
        "TOI18",
        "Larngear passport",
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
            <div className="fixed w-full h-full flex justify-center items-center z-30 bg-thisBlack bg-opacity-50">
                <div className="bg-white border-2 border-thisBlack rounded-xl p-6 w-3/4 max-w-xl flex flex-col space-y-2 md:flex-row md:space-x-4 relative">
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

export const Others = ({ setOpen }) => {
    const data = [
        {
            title: "7-11 all in one",
            images: ['/project/7-all-in-one/1.webp', '/project/7-all-in-one/2.webp', '/project/7-all-in-one/3.webp', '/project/7-all-in-one/4.webp'],
            description: 'This is 7-11 in Metaverse with the chatbot, which was made to solve the pain point of stock not updating in real- time and staff not answering customer questions. This project got the award of 2nd runner-up in Creative AI Camp 2021.',
            tags: ['metaverse', '3d', 'chatbot'],
            viewMore: null
        },
    ];

    return <ProjectModal title={'Others'} setOpen={setOpen} data={data} />
}