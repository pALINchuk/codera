const formFields = [
    {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "E-mail address",

    },
    {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Your name",
    },
    {
        type: "textarea",
        id: "message",
        name: "message",
        placeholder: "Briefly describe how we can help you",
    }
]

const ContactSection = () => {
    return (
        <section className="w-full bg-blueColor py-16 text-lightBlueTextColor px-8 md:px-16 xl:px-0">
            <div className="max-w-[1280px] mx-auto">
                <h1
                    className="text-lightBlueTextColor text-center font-semibold text-4xl lg:text-5xl mb-4 lg:mb-8"
                >
                    Contact Us
                </h1>

                <div className="flex flex-col items-center justify-center xl:items-start xl:justify-between xl:flex-row">
                    <form action="" className="flex flex-col justify-center items-center gap-3 max-w-[560px] shrink-0 w-full mb-7 xl:mb-0 ">
                        {
                            formFields.map(field => (
                                field.type === "textarea" ?
                                    (<textarea
                                        key={field.id}
                                        id={field.id}
                                        name={field.name}
                                        required
                                        placeholder={field.placeholder}
                                        rows={7}
                                        className="w-full text-xl text-blackColor bg-bgColor p-3 rounded-xl resize-none"
                                    />) : (
                                        <input
                                            key={field.id}
                                            type={field.type}
                                            id={field.id}
                                            name={field.name}
                                            required
                                            placeholder={field.placeholder}
                                            className="w-full text-xl text-blackColor bg-bgColor p-3 rounded-xl"
                                        />
                                    )

                            ))
                        }

                        <p className="text-center">By sending a message you agree to our <span className="text-orangeColor underline">privacy policy.</span></p>

                        <button
                            type="submit"
                            className="
                                relative
                                flex items-center justify-center
                                text-blackColor
                                hover:opacity-90
                                transition
                                h-[48px]
                                w-[180px]
                                text-[24px]
                                self-end
                              "
                            style={{
                                backgroundImage: "url('./codera_shape_orange.svg')",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center"
                            }}
                        >
                            Send
                        </button>
                    </form>

                    <div className="flex flex-col max-w-xl gap-15 xl:gap-25 text-2xl text-center xl:text-start xl:text-3xl items-center xl:items-start xl:justify-between">
                        <p>Get in touch with us, describe your request and we will guide you  through the process of turning your ideas into reality. </p>
                        <div className="flex flex-col gap-4 items-start">
                            <p>{'>'} HERE FOR YOU</p>
                            <p>contact@codera.com</p>
                            <p>+70 555 555 555 </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection