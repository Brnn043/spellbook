import { ProjectModal } from "../GlobalModal"

export const Work = ({ setOpen }) => {
    const data = [
        {
            title: "IT Larngear 24",
            images: ['/project/ITLarngear/1.webp', '/project/ITLarngear/2.webp', '/project/ITLarngear/3.webp', '/project/ITLarngear/4.webp', '/project/ITLarngear/5.webp'],
            description: 'As a new service developer, I’ve contributed to projects like \'GemOfYourSoul\' and \'Larngear Passport\', gaining valuable experience in teamwork, new web frameworks, and creating innovative, engaging projects. ',
            tags: ['ITLarngear24', 'WebDev'],
            viewMore: [
                {
                    title: 'Larngear camp',
                    link: 'https://larngear.org/',
                    linkTitle: 'larngear website here'
                },
            ]
        },
        {
            title: "Head of Plan : Baan Jijah",
            images: ['/project/Jijah/1.webp', '/project/Jijah/2.webp', '/project/Jijah/3.webp'],
            description: 'Witch’s Garden is an action-packed RPG game where you play as a witch collecting veggies to make potions to reclaim her lost magic. You can use the broom and manipulate the weather to protect the veggies from slimes.',
            tags: ['java', 'ActionRPG', '2D'],
            viewMore: [
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043/Witchs-Garden',
                    linkTitle: 'my github here'
                },
                {
                    title: 'Playthrough',
                    link: '',
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
            title: "Plan larngear23",
            images: ['/project/Plan/1.webp', '/project/Plan/2.webp', '/project/Plan/3.webp', '/project/Plan/4.webp'],
            description: 'Witch’s Garden is an action-packed RPG game where you play as a witch collecting veggies to make potions to reclaim her lost magic. You can use the broom and manipulate the weather to protect the veggies from slimes.',
            tags: ['java', 'ActionRPG', '2D'],
            viewMore: [
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043/Witchs-Garden',
                    linkTitle: 'my github here'
                },
                {
                    title: 'Playthrough',
                    link: '',
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
            title: "Reg Vishnu22",
            images: ['/Beam.webp', '/Beam.webp', '/Beam.webp'],
            description: 'Witch’s Garden is an action-packed RPG game where you play as a witch collecting veggies to make potions to reclaim her lost magic. You can use the broom and manipulate the weather to protect the veggies from slimes.',
            tags: ['java', 'ActionRPG', '2D'],
            viewMore: [
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043/Witchs-Garden',
                    linkTitle: 'my github here'
                },
                {
                    title: 'Playthrough',
                    link: '',
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
            title: "Stepout",
            images: ['/project/Stepout/1.webp', '/project/Stepout/2.webp', '/project/Stepout/3.webp'],
            description: 'Witch’s Garden is an action-packed RPG game where you play as a witch collecting veggies to make potions to reclaim her lost magic. You can use the broom and manipulate the weather to protect the veggies from slimes.',
            tags: ['java', 'ActionRPG', '2D'],
            viewMore: [
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043/Witchs-Garden',
                    linkTitle: 'my github here'
                },
                {
                    title: 'Playthrough',
                    link: '',
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
            title: "Staff",
            images: ['/Beam.webp', '/Beam.webp', '/Beam.webp'],
            description: 'Witch’s Garden is an action-packed RPG game where you play as a witch collecting veggies to make potions to reclaim her lost magic. You can use the broom and manipulate the weather to protect the veggies from slimes.',
            tags: ['java', 'ActionRPG', '2D'],
            viewMore: [
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043/Witchs-Garden',
                    linkTitle: 'my github here'
                },
                {
                    title: 'Playthrough',
                    link: '',
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
            title: "Booth IT VidLoveVidU2025",
            images: ['/Beam.webp'],
            description: 'coming soon ...',
            tags: [],
            viewMore: null
        },
    ]
    return <ProjectModal title={"Activity"} setOpen={setOpen} data={data} />
}
