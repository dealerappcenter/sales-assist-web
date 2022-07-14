import { Nav } from "@src/components"
import PricingData from "src/mocks/pricing/hero.json";
import { Section } from '../../../components/section/index';


export const PricingHero: React.FC = () => {
    return (
        <header className='h-full flex flex-col bg-white-soft pb-12 lg:px-12'>
            <Nav />
            <Section className='flex-grow flex items-center justify-start flex-col gap-5'>
                <div className='bold w-full text-center'>
                    <h2 className='text-gray-primary md:text-4xl font-semibold mb-4'>{PricingData.title}</h2>
                    <p className='text-gray-secondary'>{PricingData.description}</p>
                </div>
            </Section>
        </header>
    )
}
