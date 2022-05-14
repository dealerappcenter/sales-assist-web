import { Nav } from "@src/components"
import PricingData from "src/mocks/pricing/hero.json";


export const PricingHero: React.FC = () => {
    return (
        <header className='h-full flex flex-col bg-white-soft pb-12'>
            <Nav />
            <div className='px-4 md:px-6 lg:px-12 flex-grow container mx-auto flex items-center justify-start flex-col gap-5'>
                <div className='text-left bold w-full'>
                    <h2 className='text-gray-primary md:text-4xl font-semibold mb-4'>{PricingData.title}</h2>
                    <p className='text-gray-secondary max-w-5xl'>{PricingData.description}</p>
                </div>
            </div>
        </header>
    )
}
