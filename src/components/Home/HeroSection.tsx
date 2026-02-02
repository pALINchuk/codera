import homeArrow from '../../assets/home_arrow.svg'

const HeroSection = () => {
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

            <div className="relative mx-auto pt-32 pb-24 flex flex-col justify-center  lg:flex-row lg:justify-between lg:items-end">
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
                        text-3xl
                        lg:text-[40px]
                        "
                    >
                        Get In Touch
                    </span>
                </button>

                {/*<button*/}
                {/*    className="relative*/}
                {/*        flex items-center justify-center*/}
                {/*        text-white*/}
                {/*        hover:opacity-90*/}
                {/*        transition*/}
                {/*        h-[55px]*/}
                {/*        /!*w-[280px]*!/*/}
                {/*        w-fit*/}
                {/*        text-[30px]*/}
                {/*        mr-0*/}

                {/*        lg:h-[85px]*/}
                {/*        lg:w-[350px]*/}
                {/*        lg:text-[40px]*/}
                {/*        lg:mr-40*/}
                {/*      "*/}
                {/*    style={{*/}
                {/*        backgroundImage: "url('./button-bg.svg')",*/}
                {/*        backgroundRepeat: "no-repeat",*/}
                {/*        backgroundSize: "100% 100%",*/}
                {/*        backgroundPosition: "center"*/}
                {/*    }}*/}
                {/*>*/}
                {/*    Get in touch*/}
                {/*</button>*/}
            </div>

            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
                <img src={homeArrow} alt="down arrow" className="w-14 h-14" />
            </div>
        </section>
    )
}

export default HeroSection