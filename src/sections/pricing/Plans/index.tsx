import { PlanCard, Button } from "@src/components";
import { MdArrowDropDown, MdCheck } from "react-icons/md";
import PricingData from "src/mocks/pricing/hero.json";
import { useResponsive } from '@hooks/useResponsive';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { buildIcon } from '@src/utils/icons';
import { SiHackthebox } from "react-icons/si";
import { plansIcons } from '@src/assets';
import { Counter } from "@src/components/Counter";
import { Section } from '../../../components/section/index';

interface PricingHeroProps {
  isClicked: boolean,
  onClick: () => void
}

export const PricingPlans: React.FC<PricingHeroProps> = ({ isClicked, onClick }) => {
  const { isDesktop, isMobile, isTablet } = useResponsive();
  const [current, setCurrent] = useState<number>(0);
  const handleIsActive = (step: number) => () => setCurrent(step);
  const [currentActive, setCurrentActive] = useState<'month' | 'year'>('month');
  const [price, setPrice] = useState<number>(PricingData.plans[current].starting_at.year);
  const [pricePerUser, setPricePerUser] = useState<number>(PricingData.plans[current].price_per_user.year)
  const [users, setUsers] = useState<number>(PricingData.plans[current].users)

  useEffect(() => {
    if (currentActive === 'year') {
      setUsers(PricingData.plans[current].users)
      setPricePerUser(PricingData.plans[current].price_per_user.year);
      return setPrice(PricingData.plans[current].starting_at.year);
    } else {
      setUsers(PricingData.plans[current].users)
      setPrice(PricingData.plans[current].starting_at.month)
      setPricePerUser(PricingData.plans[current].price_per_user.month);
    }
  }, [currentActive, current]);

  function removeUsers() {
    if (PricingData.plans[current].users === users) return;

    setUsers(prev => prev - 1);
    setPrice(prev => prev - pricePerUser);
  }

  function addUsers() {
    if (PricingData.plans[current].limit === users) return;
    setUsers(prev => prev + 1);
    setPrice(prev => prev + pricePerUser);

  }

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

  function handleIsAnnually(status: 'month' | 'year') {
    return () => setCurrentActive(status);
  }

  function buttonClass(isActive: boolean) {
    return classNames('p-4 py-2 rounded-md font-semibold duration-500 transition-all relative shadow', { 'bg-white-normal text-orange-normal': !isActive }, { 'bg-orange-normal text-white-normal': isActive });
  }

  return (
    <section className='h-full flex flex-col bg-white-normal md:bg-white-soft md:pb-12'>
      <Section className='flex-grow items-center justify-start flex-col gap-5 mx-auto'>
        <div className="flex items-center justify-center gap-6 py-6 md:py-0 h-[4rem]">
          <button onClick={handleIsAnnually('year')} className={buttonClass(currentActive === 'year')}>
            <span className="absolute -left-6 -top-4 bg-[#F2994A] px-3 rounded-lg text-white-normal text-sm font-normal">20% off</span>
            Billed Annually
          </button>
          <button onClick={handleIsAnnually('month')} className={buttonClass(currentActive === 'month')}>Billed Monthly</button>
        </div>
        {(isDesktop) && <div className='hidden relative overflow-x-auto overflow-y-hidden w-full md:flex gap-5 md:items-start md:justify-center h-[42rem]'>
          {PricingData.plans.map((plan, i) => <motion.div className="w-1/2 h-full" initial={{ translateY: 100, opacity: 0 }} transition={{ duration: .5, ease: 'linear', delay: getDelay(i) }} viewport={{ once: true }} animate={{ translateY: 0, opacity: 1 }} key={plan.name}>
            <PlanCard plan={plan} annually={currentActive === 'year'} />
          </motion.div>)}
        </div>}

        {/* mobile */}
        {(isMobile || isTablet) && <div className="py-2 w-full">
          <div className="w-full flex items-end h-full">
            {PricingData.plans.map((plan, i) => {
              return <div key={plan.name} className='w-full flex flex-col items-end'>
                <button onClick={handleIsActive(i)} className={`px-1 py-4 text-left duration-300 h-full w-full border-b-2 ${current === i ? 'border-orange-normal' : ''}`} >
                  <h4 className="text-gray-primary">{plan.name}</h4>
                  <p className="text-gray-secondary text-sm">{plan.code !== 'ENTPRS' ? "$" + (currentActive === 'year' ? + plan.starting_at.year : plan.starting_at.month) + '/mo' : "Custom"}</p>
                </button>
              </div>

            })}

          </div>

          <div className="w-full bg-red p-4 flex-col gap-6">
            <div className="w-full flex flex-col gap-1">
              <div className="w-full">
                {buildIcon({ data: plansIcons, code: PricingData.plans[current].code, fallback: <SiHackthebox className="text-xl" />, size: { width: 64, height: 64 } })}
              </div>
              <h1 className="text-gray-primary mb-2 font-semibold">{PricingData.plans[current].name}</h1>
              <p className="text-sm text-gray-secondary">{PricingData.plans[current].desc}</p>
              <div className="w-1/6 border-b mt-4" />
            </div>
            <div>
              {!PricingData.plans[current].custom && <div className="flex flex-col items-start gap-1 my-2">
                <p className="text-sm">{PricingData.plans[current].starting_at?.name}</p>
                <span className="text-gray-primary flex items-end">
                  <h1 className="font-semibold">${price}</h1>
                  /mo
                </span>
                <Counter
                  enable={{
                    remove: PricingData.plans[current].users === users,
                    add: PricingData.plans[current].limit === users
                  }}
                  add={addUsers}
                  remove={removeUsers}
                >{users} users</Counter>
              </div>}

              {PricingData.plans[current].custom && <div className="text-gray-primary my-2 mb-5">
                <p className="text-gray-secondary">{PricingData.plans[current].custom?.contact_us}</p>
                <h1 className="font-semibold">{PricingData.plans[current].custom?.pricing}</h1>
                <p className="text-gray-secondary">{PricingData.plans[current].custom?.users}</p>
              </div>}
            </div>
            <div className="my-4 mb-6">
              {PricingData.plans[current].perks.map(perk => {
                return <div className="" key={perk.name}>
                  <b>{perk.perk}</b> {perk.name}
                </div>
              })}
            </div>

            <div className="my-4 mb-6">
              <h3 className="text-gray-primary font-medium">{PricingData.plans[current].features.name}</h3>
              {PricingData.plans[current].features.perks.map(perk => {
                return <div className="flex gap-2 items-center" key={perk}>
                  <MdCheck className="text-green-600" /> {perk}
                </div>
              })}
            </div>
          </div>
        </div>
        }

        {!isClicked && <motion.button initial={{ translateY: 100, opacity: 0 }} transition={{ duration: .5, ease: 'linear', delay: 1 }} viewport={{ once: true }} animate={{ translateY: 0, opacity: 1 }} onClick={onClick} className="p-4 py-6 md:w-full bg-white-normal rounded-lg flex items-center justify-center gap-1 border md:border-none mt-6">
          See Full Feature Comparison <MdArrowDropDown />
        </motion.button>}
      </Section>
    </section>
  )
}
