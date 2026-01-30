import homeArrow from '../../assets/home_arrow.svg'

const HeroSection = () => {
    return (
        <section className="relative mb-40 max-w-[1280px] mx-auto px-8 md:px-16 xl:px-0">

            <div
                className="absolute inset-0 bg-no-repeat bg-right-top mr-0 lg:mr-16 xl:mr-0 scale-55 md:scale-65 lg:scale-90"
                style={{
                    backgroundImage: "url('./home_codera.svg')"
                }}
            />

            <div className="relative mx-auto pt-32 pb-24 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-end">

                <div className="max-w-[600px] mb-10 lg:mb-0">
                    <h1 className="text-start text-5xl leading-15 md:text-6xl md:leading-18 xl:text-7xl lg:leading-20 font-semibold text-blackColor mb-0 xl:mb-5">
                    Codera,
                        <br />
                        here <span className="text-blueColor">your idea</span>
                        <br />
                        takes its form
                    </h1>

                    <p className="text-start text-xl xl:mt-6 lg:text-xl xl:text-3xl text-blackColor">
                        Crafted in Ukraine
                    </p>
                </div>

                <button
                    className="relative
                        flex items-center justify-center
                        text-white
                        hover:opacity-90
                        transition
                        h-[55px]
                        w-[250px]
                        text-[30px]

                        lg:h-[85px]
                        lg:w-[350px]
                        lg:text-[40px]
                        lg:mr-40
                        mr-0
                      "
                    style={{
                        backgroundImage: "url('./button-bg.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center"
                    }}
                >
                    Get in touch
                </button>
            </div>

            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
                <img src={homeArrow} alt="down arrow" className="w-14 h-14" />
            </div>
        </section>
    )
}

export default HeroSection