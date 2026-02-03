import HeroSectionDefault from "@/components/HeroSectionDefault";
import CaseStudies from "@/components/Cases/CaseStudies";

const content = {
    title: 'Case studies',
    text: 'Our awesome team of engineers, designers, QAs and PMs can take on end-to-end projects or jump in to collaborate and complement your team.  Together, we design and build digital products, apps, and websites that will impress your users. Take a look at some of our success stories.',
    button: 'Check Results'
}

const Cases = () => {
    return (
        <div>
            <HeroSectionDefault {...content}/>
            <CaseStudies/>
        </div>
    )
}

export default Cases