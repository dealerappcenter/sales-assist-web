import { MdCheck, MdArrowDropDown } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import { plansIcons } from '@src/assets';
import { buildIcon } from '@src/utils/icons';
import { Counter } from "../Counter";
import { useState, useEffect } from 'react';
interface PlanCardProps {
    plan: Plan,
    add?: () => {}
    remove?: () => {},
    annually?: boolean,
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, annually = true, }) => {
    const [price, setPrice] = useState<number>(plan.starting_at.year);
    const [pricePerUser, setPricePerUser] = useState<number>(plan.price_per_user.year)
    const [users, setUsers] = useState<number>(plan.users)


    useEffect(() => {
        if (annually) {
            setUsers(plan.users)
            setPricePerUser(plan.price_per_user.year);
            setPrice(plan.starting_at.year);
        } else {
            setUsers(plan.users)
            setPricePerUser(plan.price_per_user.month);
            setPrice(plan.starting_at.month);
        }
    }, [annually, plan]);


    function removeUsers() {
        if (plan.users === users) return;

        setUsers(prev => prev - 1);
        setPrice(prev => prev - pricePerUser);
    }

    function addUsers() {
        if (plan.limit === users) return;
        setUsers(prev => prev + 1);
        setPrice(prev => prev + pricePerUser);

    }

    return (
        <div key={plan.name} className='p-4 flex flex-col gap-4 bg-white-normal w-full h-full rounded-xl'>
            <div className="w-16 h-16">{buildIcon({ data: plansIcons, code: plan.code, fallback: <SiHackthebox className="text-xl" />, size: { width: 64, height: 64 } })}</div>
            <div className="text-gray-secondary flex flex-col ">
                <div className="mb-2.5">
                    <h1 className="text-gray-primary font-bold text-[34px] leading-none">{plan.name}</h1>
                    <p className="text-sm">{plan.desc}</p>
                </div>
                <div className="w-10 h-[3px] bg-gray-placeholder/50 rounded-sm" />
                <div className="flex items-start min-h-[120px]">
                    {!plan.custom && <div className="flex flex-col items-start gap-1 mt-5 h-[45%] justify-between">
                        <p className="text-sm">{plan.starting_at?.name}</p>
                        <span className="text-gray-primary flex items-end">
                            <h3 className="font-bold text-[34px]">${price}</h3>
                            /mo
                        </span>
                        <Counter
                            enable={{
                              remove: plan.users === users,
                              add: plan.limit === users
                            }}
                            add={addUsers}
                            remove={removeUsers}
                        >{users} users</Counter>
                    </div>}

                    {plan.custom && <div className="text-gray-primary mt-5">
                        <p className="text-gray-secondary text-sm">{plan.custom.contact_us}</p>
                        <h3 className="font-bold text-[34px]">{plan.custom.pricing}</h3>
                        <div className="mt-3 flex items-center">
                            <p className="text-gray-secondary text-sm ">{plan.custom.users}</p>
                        </div>
                    </div>}
                </div>
            </div>
            <hr />
            {/* perks */}
            <ul className="text-sm text-gray-primary">
                {plan.perks.map(perk => <li key={perk.name} className='last:mb-0 mb-2'>
                    <span className="font-">
                        {perk.perk}
                    </span> {' '}
                    <span className="text">
                        {perk.name}
                    </span>
                </li>)}
            </ul>
            {/* features */}
            <div className="text-sm flex flex-col gap-2">
                <span className="font-semibold">
                    {plan.features.name}
                </span>
                <ul className="text-gray-secondary">
                    {plan.features.perks.map((perk, i) => {
                        return <li className="flex gap-2 items-center mb-2 last:mb-0" key={i + 'perk'}><MdCheck className="text-green-600" />{perk}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
