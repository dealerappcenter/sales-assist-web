import { PlanCard } from "@src/components/PlanCard";
import { MdArrowDropDown,MdCheck } from "react-icons/md";
import PricingData from "src/mocks/pricing/hero.json";
import { useResponsive } from '@hooks/useResponsive';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface PricingHeroProps {
    isClicked: boolean,
    onClick: () => void
}

export const PricingPlans: React.FC<PricingHeroProps> = ({ isClicked, onClick }) => {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    const [current, setCurrent] = useState<number>(0);
    const handleIsActive = (step: number) => () => setCurrent(step);
    
    const getDelay = (step: number) => {
        switch (step) {
            case 0:
                return 0
            case 1:
                return .3
            case 2:
                return .8
            default:
                return 0;
        }
    } 

    return (
        <section className='h-full flex flex-col bg-white-normal md:bg-white-soft md:pb-12'>
            <div className='flex-grow container flex items-center justify-start flex-col gap-5 mx-auto lg:px-12 md:px-6 px-4'>
                {(isDesktop) && <div className='hidden relative overflow-x-auto overflow-y-hidden w-full md:flex gap-5 md:items-start md:justify-center h-[32rem]'>
                    {PricingData.plans.map((plan, i) => <motion.div className="w-1/2 h-full" initial={{ translateY: 100, opacity: 0 }} transition={{ duration: .5, ease: 'linear', delay: getDelay(i) }} viewport={{ once: true }} whileInView={{ translateY: 0, opacity: 1 }}  key={plan.name}>
                        <PlanCard plan={plan} />
                    </motion.div>)}
                </div>}

                {/* mobile */}
                {(isMobile || isTablet) && <div className="py-2 w-full">
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
                                    <MdCheck className="text-green-600" /> {perk}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                }

                {!isClicked && <motion.button initial={{ translateY: 100, opacity: 0 }} transition={{ duration: .5, ease: 'linear', delay: 1 }} viewport={{ once: true }} whileInView={{ translateY: 0, opacity: 1 }}  onClick={onClick} className="p-4 py-6 md:w-full bg-white-normal rounded-lg flex items-center justify-center gap-1 border md:border-none">
                    See Full Feature Comparison <MdArrowDropDown />
                </motion.button>}
            </div>
        </section>
    )
}
