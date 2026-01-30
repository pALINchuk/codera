import ServiceCard from "./ServiceCard"

type Service = {
    title: string | React.ReactNode
    content: string
    empty?: boolean
}

const services: Service[] = [
    {
        title: 'Web & mobile developement',
        content: 'Build your online presence with a custom tailored web or mobile application.'
    },
    {
        title: <>
            AI-Driven <br/>
            Solutions
        </>,
        content: 'Introduce analytics tools, chatbots, AI-agents and more into your daily workflow.'
    },
    {
        title: 'Business Process Automation',
        content: 'Automate routines tasks, reduce errors and standardize processes in your business. '
    },
    {
        title: <>
            CRM & ERP <br/>
            Systems
        </>,
        content: 'Manage your clients, employees and enterprises effieicntly and safely.'
    },
    {
        title: <>
            E-Commerce <br/>
            Platforms
        </>,
        content: 'Sell your products online with user-friendly interface and modern security practices.'
    },
    {
        title: 'Data Integration & Analytics',
        content: 'Leverage your data efficiently by analyzing it and integrating it with your systems.'
    },
    {
        title: <>
            EdTech <br/>
            Solutions
        </>,
        content: 'Build a learning platform, manage your students and educational grants simply.'
    },
    {
        title: 'LegalTech & Text Analytics',
        content: 'Manage your documents, track versions, detect changes precisely and reliably.'
    },
    {
        title: <>
            Workshops & <br/>
            Guidance
        </>,
        content: 'Get an advise from tech experts or organize workshops for your teams and students'
    }
]

const ServicesSection = () => {

    return (
        <section className="w-full bg-blueColor py-16 text-white px-8 md:px-16 xl:px-0">
            <div className="max-w-[1280px] mx-auto">
                <h1
                    className="text-lightBlueTextColor text-center font-semibold mb-0 md:mb-8 text-4xl lg:text-5xl lg:mb-8"
                >
                    Services We Provide
                </h1>

                <div className="grid grid-cols-1 gap-[0.5px] md:grid-cols-2 lg:grid-cols-3 bg-lightBlueTextColor">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            content={service.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection