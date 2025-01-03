'use client';

import Link from 'next/link';

export default function Visit({ name, setOpen }) {

    const handleClick = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
                <div className="bg-amber-300 flex flex-col justify-center items-center p-6 border-2 border-black rounded-xl space-y-4">
                    <p>Want to visit {name}?</p>
                    <div className="flex space-x-4">
                        <Link
                            href={`/${name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="bg-white hover:bg-slate-200 border-2 border-black px-4 py-1 rounded-lg text-center w-24"
                                onClick={handleClick}
                            >
                                Yes
                            </button>
                        </Link>
                        <button
                            className="bg-white hover:bg-slate-200 border-2 border-black px-4 py-1 rounded-lg text-center w-24"
                            onClick={handleClick}
                        >
                            Not yet
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
