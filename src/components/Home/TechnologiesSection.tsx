import {useState} from "react";
import arrowUp from '../../assets/arrow-up.svg'

const tabs = [
    {
        id: "frontend",
        label: "Frontend",
        content: [
            {
                title: "React",
                description:
                    "Modern and scalable library with vast ecosystem (Redux, Zustand, Next etc.) and support from Meta (Facebook).",
            },
            {
                title: "Vue",
                description:
                    "Growing framework allowing for rapid development and high performance. Together with Nuxt is great.",
            },
            {
                title: "Typescript",
                description:
                    "Tool ensuring type safety on the frontend. It allows to reduce debugging time and build maintainable solutions.",
            },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        content: [
            {
                title: "Node.js",
                description: "Fast runtime environment for building server-side applications.",
            },
            {
                title: "Python",
                description: "Popular backend language with strong libraries for data and web.",
            },
        ],
    },
    {
        id: "mobile",
        label: "Mobile",
        content: [
            {title: "Flutter", description: "Cross-platform framework for mobile apps."},
            {title: "React Native", description: "React-based mobile development framework."},
        ],
    },
    {
        id: "cloud",
        label: "Cloud",
        content: [
            {title: "AWS", description: "Cloud platform for hosting and serverless solutions."},
            {title: "GCP", description: "Google Cloud Platform services for compute and storage."},
        ],
    },
    {
        id: "ai",
        label: "AI",
        content: [
            {title: "TensorFlow", description: "Open-source ML library for deep learning."},
            {title: "PyTorch", description: "Flexible framework for AI research and production."},
        ],
    },
    {
        id: "other",
        label: "Other",
        content: [
            {title: "Docker", description: "Containerization platform for applications."},
            {title: "Git", description: "Version control system for collaborative development."},
        ],
    },
]

const TechnologiesSection = () => {
    const [activeTab, setActiveTab] = useState("frontend")
    const [activeTabMobile, setActiveTabMobile] = useState<string | null>(null)

    return (
        <section className="relative mb-40 max-w-[1280px] mx-auto px-8 md:px-16 xl:px-0">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1
                    className="text-blueColor text-center font-semibold text-4xl lg:text-5xl mb-4 lg:mb-8"

                >
                    Technologies we work with
                </h1>

                {/*desktop*/}
                <div className="hidden md:flex flex-col w-full">
                    <div className="flex space-x-6 border-b border-gray-500 w-full gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative pb-2 text-2xl font-semibold transition-colors ${
                                    activeTab === tab.id ? "text-blueColor" : "text-gray-600 hover:text-blueColor"
                                }`}
                            >
                                {tab.label}

                                {activeTab === tab.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blueColor rounded-t"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/*<div className="mt-8 space-y-6 w-full">*/}
                    <div className="w-full">
                        {tabs
                            .find((tab) => tab.id === activeTab)
                            ?.content.map((item, idx) => (

                                <div key={idx} className="border-b border-gray-500 w-full">
                                    <h3 className="text-2xl font-semibold mb-2 mt-4">{item.title}</h3>
                                    <p className="text-gray-700 mb-4">{item.description}</p>
                                </div>
                            ))}
                    </div>
                </div>

                {/*mobile*/}
                <div className="flex flex-col w-full md:hidden">
                    {tabs.map((tab) => {
                        const isOpen = activeTabMobile === tab.id
                        return (
                            <div
                                key={tab.id}
                                className="border-b border-blackColor w-full"
                            >
                                <button
                                    onClick={() => setActiveTabMobile(isOpen ? null : tab.id)}
                                    className={`
                                        flex justify-between items-center
                                        w-full text-2xl font-semibold text-blackColor 
                                        hover:text-blueColor transition-colors 
                                        ${isOpen ? "pt-5" : "py-5"}
                                    `}
                                >
                                    {tab.label}
                                    <span
                                        className={`transform transition-transform duration-300 ${
                                            isOpen ? "rotate-0" : "rotate-180"
                                        }`}
                                    >
                                        <img src={arrowUp} alt="arrow" className="w-14 h-14" />
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-4 pb-5 text-blackColor space-y-2">
                                        {tab.content.map((item, n) => (
                                            <div key={n}>
                                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>


            </div>
        </section>
    )
}

export default TechnologiesSection