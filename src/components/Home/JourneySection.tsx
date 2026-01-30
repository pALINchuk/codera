import journey1 from '../../assets/journey1.svg'
import journey2 from '../../assets/journey2.svg'
import journey3 from '../../assets/journey3.svg'

const JourneySection = () => {
    return (
        <section className="relative mb-16 lg:mb-24 max-w-[1280px] mx-auto px-8 md:px-16 xl:px-0">

            <div className="flex flex-col items-center justify-center">

                <h1
                    className="text-blueColor font-semibold text-4xl lg:text-5xl mb-4 lg:mb-16"

                >
                    Your Software Development Journey
                </h1>

                <div>
                    <div className="flex items-center justify-between min-w-[650px]">
                        <img src={journey1} alt="journey" className="h-50 w-auto"/>
                        <div className="flex flex-col">
                            <h1 className="text-blueColor font-semibold text-4xl">
                                Your Idea
                            </h1>
                            <p className="font-semibold text-xl">
                                Our Commitment
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center justify-between min-w-[750px]">
                        <div className="flex flex-col">
                            <h1 className="text-blueColor font-semibold text-4xl">
                                Your Goals
                            </h1>
                            <p className="font-semibold text-xl">
                                Our Motivation
                            </p>
                        </div>
                        <img src={journey2} alt="journey" className="h-50 w-auto"/>
                    </div>

                    <div className="flex items-center justify-between min-w-[650px]">
                        <img src={journey3} alt="journey" className="h-50 w-auto"/>

                        <div className="flex flex-col">
                            <h1 className="text-blueColor font-semibold text-4xl">
                                Your Growth
                            </h1>
                            <p className="font-semibold text-xl">
                                Our Solution
                            </p>
                        </div>
                    </div>

                </div>
                <div
                    className="absolute inset-0 bg-no-repeat bg-right-top mr-0 lg:mr-16 xl:mr-0 scale-55 md:scale-65 lg:scale-90"
                    style={{
                        backgroundImage: "url('./journey.svg')",
                        backgroundPosition: 'right 60% top 50%'
                    }}
                />
            </div>



        </section>
    )
}

export default JourneySection