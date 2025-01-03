import { useState, useEffect } from "react";

// this modal has multiple pages and images, also in the description will have description,tag,link
export const Modal1 = ({ title, setOpen, data }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [currentImage, setCurrentImage] = useState(0);

    // example
    // const data = [
    //     {
    //         title: "Witch's Garden",
    //         images: ['/Beam.webp', '/Beam.webp', '/Beam.webp'],
    //         description: 'Welcome to the Witch\'s Garden! Explore magical plants and meet mystical creatures.',
    //         tags: ['magic', 'garden', 'witch', 'mystical'],
    //         viewMore: [
    //             {
    //                 title: 'Github',
    //                 link: 'https://witchcraft.com',
    //                 linkTitle: 'my github here'
    //             },
    //             {
    //                 title: 'Playthrough',
    //                 link: 'https://witchgardens.com',
    //                 linkTitle: 'very short'
    //             },
    //         ],
    //     },
    //     {
    //         title: "Witchling's Coffeehouse",
    //         images: ['/image4.jpg', '/image5.jpg', '/image6.jpg'],
    //         description: 'Relax and enjoy a hot cup of brew at Witchling\'s Coffeehouse, where magic happens.',
    //         tags: ['coffee', 'witchling', 'cozy', 'brew'],
    //         viewMore: null,
    //     },
    // ];

    // Image auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                (prev + 1) % data[currentPage].images.length
            );
        }, 10000); // Auto-slide every 10 seconds
        return () => clearInterval(interval);
    }, [currentPage]);

    const handleNextGame = () => {
        setCurrentPage((prev) => (prev + 1) % data.length);
        setCurrentImage(0); // Reset the slider when switching games
    };

    const handlePrevGame = () => {
        setCurrentPage((prev) =>
            prev === 0 ? data.length - 1 : prev - 1
        );
        setCurrentImage(0);
    };

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-white border-2 border-thisBlack rounded-xl overflow-hidden w-3/4 max-w-xl flex flex-col md:flex-col relative">
                {/* Header */}
                <div className="bg-gradient-to-br from-[#a6a0ff] via-[#d3a0ff] to-[#fff9a0] text-thisBlack border-b-2 border-thisBlack h-16 text-center flex justify-center items-center font-payToneOne text-2xl relative">
                    {title}
                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-2 right-2 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
                    >
                        X
                    </button>
                </div>

                {/* Game Content */}
                <div className="p-4">
                    {/* Navigation Buttons */}
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

                    {/* Image Slider */}
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <div className="relative mb-4 flex justify-center items-center">
                            <img
                                src={data[currentPage].images[currentImage]}
                                alt="Game Image"
                                className="w-60 max-h-72 object-cover rounded"
                            />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {data[currentPage].images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-3 w-3 rounded-full ${currentImage === index
                                            ? 'bg-[#fc8bd6]'
                                            : 'bg-white'
                                            }`}
                                        onClick={() => setCurrentImage(index)}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        {/* Game Description */}
                        <div className="text-thisBlack rounded text-base font-karla flex-1">
                            <p>{data[currentPage].description}</p>

                            {/* Tags Section */}
                            <div className="my-3">
                                {data[currentPage].tags.map((tag, index) => (
                                    <span key={index} className="text-sm text-gray-600 mr-2 bg-[#ffeaf8] p-0.5 rounded-sm">#{tag}</span>
                                ))}
                            </div>

                            {/* View More Section */}
                            {data[currentPage].viewMore && (
                                <div className="flex flex-col">
                                    {data[currentPage].viewMore.map((linkData, index) => (
                                        <div key={index} className="my-2 flex flex-row space-x-1">
                                            <p>{linkData.title} :</p>
                                            <a
                                                href={linkData.link}
                                                className="text-[#c455e8] hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {linkData.linkTitle}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
