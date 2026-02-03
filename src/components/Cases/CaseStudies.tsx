import image1 from '../../assets/case1.png'
import image2 from '../../assets/case2.png'
import image3 from '../../assets/case3.png'
import reactImage from '../../assets/technologies/react.svg'
import websocketImage from '../../assets/technologies/websocket.svg'
import chartjsImage from '../../assets/technologies/chartjs.svg'
import pythonImage from '../../assets/technologies/python.svg'
import vueImage from '../../assets/technologies/vue.svg'
import tailwindImage from '../../assets/technologies/tailwind.svg'
import firebaseImage from '../../assets/technologies/firebase.svg'
import tsImage from '../../assets/technologies/ts.svg'
import nextjsImage from '../../assets/technologies/nextjs.svg'
import reduxImage from '../../assets/technologies/redux.svg'
import postgreImage from '../../assets/technologies/postgre.svg'

const cases = [
    {
        title: 'IoT Energy Monitoring Dashboard',
        description: 'Developed a real-time dashboard for a renewable energy company to monitor data from multiple devices, filter results, and generate actionable analytics.',
        topics: [
            'Web Development',
            'Data Visualization',
            'IoT',
            'Analytics'
        ],
        techStackImages: [
            reactImage,
            websocketImage,
            chartjsImage,
            pythonImage
        ],
        image: image1
    },
    {
        title: 'Remote Team Tool Platform',
        description: 'Collaboration platform for remote teams with agile project management.',
        topics: [
            'Web Development',
            'SaaS',
            'Productivity',
            'Agile'
        ],
        techStackImages: [
            vueImage,
            tailwindImage,
            firebaseImage,
            tsImage
        ],
        image: image2
    },
    {
        title: 'Fitness Tracker',
        description: 'Built a real-time fitness dashboard to track users’ activity, device metrics, and progress, helping gyms and trainers deliver personalized insights.',
        topics: [
            'Web Development',
            'Health Tech',
            'Data Analytics'
        ],
        techStackImages: [
            nextjsImage,
            reduxImage,
            postgreImage
        ],
        image: image3
    }
]

const CaseStudies = () => {
    return (
        <section className="relative mb-16 lg:mb-24 max-w-[1280px] mx-auto px-8 md:px-16 xl:px-0">

            {/*<div className="flex flex-col items-center justify-center">*/}
            <div>
                <h1
                    className="text-center text-blueColor font-semibold text-4xl lg:text-5xl mb-16"

                >
                    Case Studies
                </h1>

                <div className="flex flex-col gap-16">
                    {
                        cases.map(caseStudy => (
                            <div
                                key={caseStudy.title}
                                className="flex flex-col items-center justify-center md:items-start gap-3"
                            >
                                <h1 className="text-blueColor text-center md:text-start text-2xl md:text-4xl font-bold">
                                    {caseStudy.title}
                                </h1>

                                <div className="flex gap-2 md:gap-5 flex-col items-center md:flex-row mb-4">
                                    {
                                        caseStudy.topics.map(topic => (
                                            <div
                                                key={topic}
                                                className="bg-orangeColor text-blueColor text-md md:text-lg font-semibold px-5 py-2 rounded-3xl"
                                            >
                                                {topic}
                                            </div>
                                        ))
                                    }
                                </div>

                                <p className="text-md md:text-xl text-center md:text-start">
                                    {caseStudy.description}
                                </p>

                                <div className="text-md md:text-xl flex gap-3 mb-4">
                                    Tech Stack -
                                    {
                                        caseStudy.techStackImages.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={'Tech Stack'}
                                                className="h-8 w-auto hover:opacity-50 transition"
                                            />
                                        ))
                                    }
                                </div>

                                <img
                                    src={caseStudy.image}
                                    alt={'case image'}
                                    className="rounded-xl max-w-[270px] sm:max-w-[340px] md:max-w-[560px] lg:max-w-[850px] self-center"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CaseStudies