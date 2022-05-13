import { Nav } from "@src/components"
import { MdCheck, MdArrowDropDown } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import PricingData from "src/mocks/pricing/hero.json";

interface PricingHeroProps {
    isClicked: boolean,
    onClick: () => void
}

export const PricingHero: React.FC = () => {
    return (
        <header className='h-full flex flex-col bg-white-soft pb-12'>
            <Nav />
            <div className='px-4 flex-grow container mx-auto flex items-center justify-start flex-col gap-5'>
                <div className='text-left bold w-full mx-auto max-w-4xl'>
                    <h2 className='text-gray-primary md:text-4xl font-semibold mb-4'>{PricingData.title}</h2>
                    <p className='text-gray-secondary text-sm md:text-base max-w-5xl font-light'>{PricingData.description}</p>
                </div>
            </div>
        </header>
    )
}
