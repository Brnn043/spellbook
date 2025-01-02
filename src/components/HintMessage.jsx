import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function HintMessage() {
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const sentences = [
        "Keep moving right to see more of my work.",
        "Take a look around; the next room might surprise you.",
        "Navigate through the rooms to uncover my creations."
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 10000);

        return () => clearTimeout(timer);
    }, [sentenceIndex]);

    return (
        <div className="fixed top-7 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-lg text-white px-4 py-2 rounded">
                <Typewriter
                    key={sentenceIndex}
                    options={{
                        strings: [sentences[sentenceIndex]],
                        autoStart: true,
                        loop: false,
                        delay: 20,
                        deleteSpeed: 20,
                        cursor: '',
                    }}
                />
            </div>
        </div>
    );
}
