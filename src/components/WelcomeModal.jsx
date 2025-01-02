import { useState } from "react";

export default function WelcomeModal({ setShowWelcome }) {
    const [sentenceIndex, setSentenceIndex] = useState(0);

    const sentences = [
        "Welcome to my spellbook, or as humans call it, my portfolio.",
        "I am Beam (Raksakul Hiranas), the proud owner of this mansion.",
        "Currently, I'm studying in the 2nd year of Computer Engineering at Chulalongkorn University.",
        "As a passionate creative and inspirational witch, I love conjuring up imaginative creations, just like this very spellbook. 😊",
        "If you'd like to know more about me, feel free to explore the rooms in my mansion, including 'Profile,' 'Projects,' and 'Activity.'",
        "You can navigate through my magical space by clicking the buttons on the screen, or by pressing 'A' or 'D,' or using the left and right arrow keys."
    ];

    const character = {
        name: "Beam",
        image: "/mascot.webp"
    };

    const nextSentence = () => {
        if (sentenceIndex < sentences.length - 1) {
            setSentenceIndex((prevIndex) => prevIndex + 1);
        } else {
            setShowWelcome(false);
        }
    };

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-white border-2 border-black rounded-xl p-6 w-3/4 max-w-xl flex flex-col space-y-2 md:flex-row md:space-x-4 relative">
                <div className="flex flex-col items-center justify-center">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="max-w-[100px] rounded-sm"
                    />
                    <div>
                        <h2 className="text-sm font-semibold">{character.name}</h2>
                    </div>
                </div>

                <div className="text-base break-words md:w-8/12">{sentences[sentenceIndex]}</div>

                <div className="flex justify-center items-center pt-4 md:absolute md:bottom-4 md:right-4">
                    <button
                        onClick={nextSentence}
                        className={`${sentenceIndex === sentences.length - 1
                            ? "bg-blue-500 hover:bg-blue-400 text-white"
                            : "bg-white hover:bg-slate-200 text-black"
                            } border-2 border-black px-4 py-1 rounded-lg text-sm`}
                    >
                        {sentenceIndex === sentences.length - 1 ? "Explore" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}