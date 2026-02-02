import homeArrow from "@/assets/home_arrow.svg";

const HeroSectionProducts = () => {
    return (
        <section className="relative mb-40 max-w-[1280px] mx-auto px-8 md:px-16 xl:px-0">
            <div
                className="absolute
                    inset-0
                    bg-no-repeat
                    mr-8 md:mr-16 xl:mr-0
                    {/*bg-right-top*/}
                    {/*md:scale-100*/}

                    md:bg-right-top
                    bg-right
                    lg:bg-[length:auto_140%]
                    md:bg-[length:auto_115%]
                    sm:bg-[length:auto_95%]
                    bg-[length:auto_75%]
                    "
                style={{
                    backgroundImage: "url('./home_codera.svg')"
                }}
            />

            <div className="relative mx-auto pt-24 pb-24 flex flex-col justify-center">
                <div className="max-w-[650px] mb-10">
                    <h1 className="text-start text-5xl leading-14 md:text-6xl md:leading-16 xl:text-7xl lg:leading-20 font-semibold text-blueColor mb-0 xl:mb-5">
                        Let’s turn your idea
                        into a product
                    </h1>

                    <p className="text-start text-xl xl:mt-6 lg:text-xl xl:text-2xl text-blackColor">
                        At Codera we help startup founders turn bold ideas into powerful MVP or complete SaaS products. We develop solutions that scale with your business. Focus on growing your vision - we’ll handle the tech.
                    </p>
                </div>

                <button className="relative inline-block w-fit hover:opacity-90 transition mr-0 lg:mr-40">
                    <img
                        src="./button-bg.svg"
                        alt=""
                        className="block w-[210px] h-auto lg:w-[280px]"
                    />

                    <span className="absolute
                        inset-0
                        flex items-center justify-center
                        text-white
                        pointer-events-none
                        text-xl
                        lg:text-[28px]
                        "
                    >
                        Get Started Today
                    </span>
                </button>

            </div>

            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
                <img src={homeArrow} alt="down arrow" className="w-14 h-14" />
            </div>
        </section>
    )
}

export default HeroSectionProducts