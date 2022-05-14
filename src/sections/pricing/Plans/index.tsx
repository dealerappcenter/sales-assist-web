import { PlanCard } from "@src/components/PlanCard";
import { MdArrowDropDown,MdCheck } from "react-icons/md";
import PricingData from "src/mocks/pricing/hero.json";
import { useResponsive } from '@hooks/useResponsive';
import { useState } from 'react';

interface PricingHeroProps {
    isClicked: boolean,
    onClick: () => void
}

export const PricingPlans: React.FC<PricingHeroProps> = ({ isClicked, onClick }) => {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    const [current, setCurrent] = useState<number>(0);
    const handleIsActive = (step: number) => () => setCurrent(step);

    return (
        <section className='h-full flex flex-col bg-white-normal md:bg-white-soft md:pb-12'>
            <div className='px-4 flex-grow container flex items-center justify-start flex-col gap-5 mx-auto max-w-4xl'>
                {(isDesktop || isTablet) && <div className='hidden relative overflow-x-auto overflow-y-hidden w-full md:flex gap-5 md:items-start md:justify-center h-[32rem]'>
                    {PricingData.plans.map(plan => <PlanCard key={plan.name} plan={plan} />)}
                </div>}
                {isMobile && <div className="py-2 w-full">
                    <div className="w-full flex items-center">
                        {PricingData.plans.map((plan, i) => {
                            return <div key={plan.name} className='w-full flex flex-col'>
                                <button onClick={handleIsActive(i)} className={`px-1 py-4 text-left duration-300 w-full border-b-2 ${current === i ? 'border-orange-normal' : ''}`} >
                                    <h4 className="text-gray-primary">{plan.name}</h4>
                                    <p className="text-gray-secondary text-sm">{plan.price_per_year}/yr</p>
                                </button>
                            </div>

                        })}

                    </div>
                    <div className="w-full bg-red p-4 flex-col gap-6 h-[25rem]">
                        <div className="w-full flex flex-col gap-1">
                            <h3>or {PricingData.plans[current].price_per_month}/mo</h3>
                            <p className="text-sm text-gray-secondary mb-4">{PricingData.plans[current].price_per_user}</p>
                            <div className="w-1/6 border-b" />
                        </div>
                        <div className="my-4 mb-6">
                            {PricingData.plans[current].perks.map(perk => {
                                return <div className="" key={perk.name}>
                                    <b>{perk.perk}</b> {perk.name}
                                </div>
                            })}
                        </div>

                        <div className="my-4 mb-6">
                            <h3 className="text-gray-primary font-medium">{PricingData.plans[current].features.name}:</h3>
                            {PricingData.plans[current].features.perks.map(perk => {
                                return <div className="flex gap-2 items-center" key={perk}>
                                    <MdCheck/> {perk}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                }

                {!isClicked && <button onClick={onClick} className="mx-auto max-w-4xl p-4 py-6 md:w-full bg-white-normal rounded-lg flex items-center justify-center gap-1">
                    See Full Feature Comparison <MdArrowDropDown />
                </button>}
            </div>
        </section>
    )
}
