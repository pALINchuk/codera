import HeroSectionDefault from "@/components/HeroSectionDefault";
import ConceptToReality from "@/components/Products/ConceptToReality";
import ContactSection from "@/components/Home/ContactSection";

const content = {
    title: 'Let’s turn your idea\n' +
        'into a product',
    text: 'At Codera we help startup founders turn bold ideas into powerful MVP or complete SaaS products. We develop solutions that scale with your business. Focus on growing your vision - we’ll handle the tech.',
    button: 'Get Started Today'
}

const Products = () => {
    return (
        <div>
            <HeroSectionDefault {...content}/>
            <ConceptToReality/>
            <ContactSection/>
        </div>
    )
}

export default Products