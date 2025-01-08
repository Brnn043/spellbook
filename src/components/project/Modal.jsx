import { useState, useEffect } from "react";
import { ProjectModal } from "../GlobalModal";

export const Website = ({ setOpen }) => {
    const data = [
        {
            title: "Tinkerbread",
            images: ['/project/ICPC/1.webp', '/project/ICPC/2.webp'],
            description: "An interactive Christmas-themed web app where users can decorate 3D gingerbreads for friends and send festive love. Built with Next.js, React Three Fiber, and PostgreSQL. I single-handledly developed the entire frontend including designed 3D models, integrated and adjusted models in the site, writing all frontend pages, developed dressing logic for custom decorations.",
            tags: ['10DayProject', 'three.js', 'R3F', 'Blender', 'Next.js', 'javascript', 'tailwindcss'],
            viewMore: [
                {
                    title: 'Website',
                    link: 'tinker-bread.vercel.app',
                    linkTitle: 'view our website here'
                },
                {
                    title: 'Github',
                    link: 'https://github.com/LazyRipple/TinkerBread',
                    linkTitle: 'our github repo here'
                },
                {
                    title: 'Playthrough',
                    link: '',
                    linkTitle: 'watch here'
                },
                {
                    title: 'Document',
                    link: '',
                    linkTitle: 'click here'
                },
            ],
        },
        {
            title: "Gem Of Your Soul",
            images: ['/project/ITLarngear/1.webp', '/project/ITLarngear/2.webp', '/project/ITLarngear/3.webp'],
            description: 'This website, built with the Astro framework, enhances the Larngear Camp experience. As a content team member and frontend developer, I worked with TypeScript, React, and Tailwind CSS, gaining experience in teamwork, learning a new framework, and fostering creativity throughout the project.',
            tags: ['Interactive', 'AddYourGem!', 'Astro', 'typescript', 'react', 'tailwindcss'],
            viewMore: [
                {
                    title: 'Website',
                    link: 'https://gemofyoursoul.larngear.org/',
                    linkTitle: 'view our website here'
                },
                {
                    title: 'Github',
                    link: 'https://github.com/esc-chula/gem-of-your-soul',
                    linkTitle: 'our github repo here'
                },
            ]
        },
        {
            title: "Larngear Passport",
            images: ['/project/ITLarngear/4.webp', '/project/ITLarngear/5.webp'],
            description: 'This website enhances the Larngear Camp experience by allowing students to interact and personalize their profiles. I developed the /Profile page, where users can dress up their avatars, save their progress to localStorage, and download their profile as an image. The project was built using Next.js, TypeScript, React, and Tailwind CSS.',
            tags: ['dressing', 'next.js', 'typescript', 'react', 'tailwindcss'],
            viewMore: [
                {
                    title: 'Website',
                    link: 'https://passport.larngear.org/visitor',
                    linkTitle: 'view our website here'
                },
                {
                    title: 'Preview of dressing',
                    link: 'https://passport.larngear.org/visitor',
                    linkTitle: 'watch here'
                },
            ]
        },
        {
            title: "CP-mon",
            images: ['/project/CPmon/1.webp', '/project/CPmon/2.webp', '/project/CPmon/3.webp'],
            description: 'This project, built with vanilla JavaScript, lets users join a room, select their CP-Mon, and battle with each other in Vidva Place. I developed the entire frontend, creating an engaging and interactive experience.',
            tags: ['javascript', 'CP-mon'],
            viewMore: [
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043/CPmon',
                    linkTitle: 'our github repo here'
                },
            ]
        },
        {
            title: "Astro Mood",
            images: ['/project/AstroMood/1.webp', '/project/AstroMood/2.webp', '/project/AstroMood/3.webp', '/project/AstroMood/4.webp'],
            description: 'A mood tracker with a cosmic star theme where users can input their mood, view their average mood, and explore a graph of mood trends. Built with Next.js, JavaScript, React, and Tailwind CSS.',
            tags: ['moodtracker', 'next.js', 'react', 'tailwindcss'],
            viewMore: [
                {
                    title: 'Website',
                    link: 'https://astro-mood.vercel.app/',
                    linkTitle: 'view our website here'
                },
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043/AstroMood',
                    linkTitle: 'my github repo here'
                },
            ]
        },
        {
            title: "Evolution of Egg",
            images: ['/project/ICPC/1.webp', '/project/ICPC/2.webp'],
            description: 'This interactive website, built with Vue.js and Tailwind CSS, presents egg recipes in a fun and creative way, offering an engaging and unique browsing experience.',
            tags: ['omelette', 'fried-egg', 'vue.js', 'tailwindcss'],
            viewMore: null
        },
    ];

    return <ProjectModal title={'Web Development'} setOpen={setOpen} data={data} />
}

export const GameDev = ({ setOpen }) => {
    const gameData = [
        {
            title: "Witch's Garden",
            images: ['/project/witchsgarden/1.webp', '/project/witchsgarden/2.webp', '/project/witchsgarden/3.webp', '/project/witchsgarden/4.webp', '/project/witchsgarden/5.webp'],
            description: 'Witch’s Garden is an action-packed RPG game where you play as a witch collecting veggies to make potions to reclaim her lost magic. You can use the broom and manipulate the weather to protect the veggies from slimes.',
            tags: ['java', 'ActionRPG', '2D'],
            viewMore: [
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043/Witchs-Garden',
                    linkTitle: 'my github repo here'
                },
                {
                    title: 'Playthrough',
                    link: 'https://youtu.be/uV66-3btG80',
                    linkTitle: 'watch here'
                },
                {
                    title: 'Tutorial',
                    link: 'https://docs.google.com/document/d/10HWyGJFyv4XH4ey1BTwMn5YbRq0EgVjjd1OmAybn0-0/edit?usp=sharing',
                    linkTitle: 'click here'
                },
            ],
        },
        {
            title: "Witchling's Coffeehouse",
            images: ['/project/witchling/1.webp', '/project/witchling/2.webp', '/project/witchling/3.webp', '/project/witchling/4.webp'],
            description: 'You play as the newest employee at a witch’s coffeehouse, sent to gather potion ingredients by battling magical slimes in the enchanted woods!',
            tags: ['Unity', 'ActionRPG', 'Isometric', '3D'],
            viewMore: [
                {
                    title: 'Playthrough',
                    link: 'https://youtu.be/c6JzllL1mrA',
                    linkTitle: 'watch here'
                }
            ]
        },
        {
            title: "Bewitch",
            images: ['/project/bewitch/1.webp', '/project/bewitch/2.webp', '/project/bewitch/3.webp'],
            description: 'Bewitch is a magical puzzle adventure where you play as a little girl trapped in a candy house. Solve puzzles and uncover secrets to find your way out!',
            tags: ['Unity', 'puzzle', 'side-scrolling', '2D'],
            viewMore: [
                {
                    title: 'Playthrough',
                    link: 'https://youtu.be/wLg0SyXcsLk',
                    linkTitle: 'watch here'
                },
            ]
        },
    ];

    return <ProjectModal title={'Game Development'} setOpen={setOpen} data={gameData} />
};



export const Competitive = ({ setOpen }) => {
    const data = [
        {
            title: "ICPC Thailand 2024, Chulalongkorn representatives",
            images: ['/project/ICPC/1.webp', '/project/ICPC/2.webp'],
            description: 'We are Chulalongkorn University representatives attending the International collegiate programming contest in the name of natteeInwza007. This is a competition about advanced competitive programming that combines students from all universities in Thailand.',
            tags: ['ICPCThailand2024', 'natteeInwza007', 'C++'],
            viewMore: null
        },
        {
            title: "Bronze medal, Thailand Olympiad in Informatics 18",
            images: ['/project/TOI18/1.webp', '/project/TOI18/2.webp'],
            description: 'I got a Bronze medal in the Thailand Olympiad in Informatics 18. This is the competition about solving advanced competitive programming.',
            tags: ['TOI18', 'PosnComputer', 'C++'],
            viewMore: null
        }
    ];

    return <ProjectModal title={'Competitive Programming'} setOpen={setOpen} data={data} />
}

export const Others = ({ setOpen }) => {
    const data = [
        {
            title: "7-11 all in one",
            images: ['/project/7-all-in-one/1.webp', '/project/7-all-in-one/2.webp', '/project/7-all-in-one/3.webp', '/project/7-all-in-one/4.webp'],
            description: 'This is 7-11 in Metaverse with the chatbot, which was made to solve the pain point of stock not updating in real- time and staff not answering customer questions. This project got the award of 2nd runner-up in Creative AI Camp 2021.',
            tags: ['metaverse', '3d', 'chatbot', '3dvista'],
            viewMore: null
        },
    ];

    return <ProjectModal title={'Metaverse'} setOpen={setOpen} data={data} />
}