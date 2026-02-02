import products1 from "../../assets/products1.svg"
import products2 from "../../assets/products2.svg"
import products3 from "../../assets/products3.svg"

const sections = [
    {
        title: 'Quick MVP Launch',
        text: 'Launch your MVP without unnecessary delays or technical debt. We help you turn ideas into a market-ready product by focusing on essential features, validating assumptions early, and delivering fast, iterative releases. Our team works closely with you to ensure the product is scalable, user-friendly, and ready for real users from day one.',
        image: products1
    },
    {
        title: 'Agile approach',
        text: 'We follow an agile, flexible development process that keeps you involved at every stage. Through regular feedback loops, sprint planning, and continuous improvements, we adapt quickly to changes and new insights. This approach allows us to reduce risks, maintain transparency, and deliver solutions that grow together with your business.',
        image: products2,
    },
    {
        title: 'Modern Technologies',
        text: 'Our solutions are built using modern, proven technologies and industry best practices. We focus on performance, security, and accessibility to ensure your product is reliable and future-proof. From frontend frameworks to backend architecture, every technical decision is made to support long-term growth and smooth scaling.',
        image: products3
    }
]

const ConceptToReality = () => {
    return (
        <section className="relative mb-16 lg:mb-24 max-w-[1280px] mx-auto px-8 md:px-16 xl:px-0">

            <div className="flex flex-col items-center justify-center">
                <h1
                    className="text-center text-blueColor font-semibold text-4xl lg:text-5xl mb-16"

                >
                    From Concept to Reality
                </h1>

                <div className="flex flex-col gap-16 lg:gap-16">
                    {
                        sections.map((section, index) => (
                            <div
                                key={section.title}
                                className={`pb-16 lg:pb-0 lg:border-none flex items-center justify-between lg:gap-32 gap-8 flex-col 
                                ${
                                    index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                                } 
                                ${
                                    index !== sections.length - 1 ? "border-b border-gray-500" : ""
                                }`}
                            >
                                <img src={section.image} alt={section.title}
                                     className="rounded-xl max-w-[240px] lg:max-w-[320px]"/>

                                <div className="">
                                    <h2 className="text-center lg:text-start text-3xl font-bold mb-4">{section.title}</h2>
                                    <p className="text-center lg:text-start text-lg text-blackColor">{section.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ConceptToReality