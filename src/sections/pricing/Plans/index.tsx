import { PlanCard } from "@src/components/PlanCard";
import { MdArrowDropDown } from "react-icons/md";
import PricingData from "src/mocks/pricing/hero.json";
import { useResponsive } from '../../../hooks/useResponsive';

interface PricingHeroProps {
    isClicked: boolean,
    onClick: () => void
}

export const PricingPlans: React.FC<PricingHeroProps> = ({ isClicked, onClick }) => {
    const { isDesktop } = useResponsive();
    return (
        <section className='h-full flex flex-col bg-white-normal md:bg-white-soft pb-12'>
            <div className='px-4 flex-grow container mx-auto flex items-center justify-start flex-col gap-5'>
                {isDesktop && <div className='hidden relative overflow-x-auto overflow-y-hidden w-full md:flex gap-5 md:items-start md:justify-center h-[32rem]'>
                    {PricingData.plans.map(plan => <PlanCard key={plan.name} plan={plan}/>)}
                </div>}

                {!isClicked && <button onClick={onClick} className="mx-auto max-w-4xl p-4 py-6 w-full bg-white-normal rounded-lg flex items-center justify-center gap-1">
                    See Full Feature Comparison <MdArrowDropDown />
                </button>}
            </div>
        </section>
    )
}
