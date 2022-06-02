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

export const PlanCard: React.FC<PlanCardProps> = ({ plan, annually = true,  }) => {
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
    <div key={plan.name} className='p-4 flex flex-col gap-6 bg-white-normal w-full h-full rounded-xl'>
    <div className="w-16 h-16">{buildIcon({ data: plansIcons, code: plan.code, fallback: <SiHackthebox className="text-xl" />, size: { width: 64, height: 64 }})}</div>
    <div className="text-gray-secondary">
        <h1 className="text-gray-primary mb-2 font-semibold">{plan.name}</h1>
        <p className="text-sm">{plan.desc}</p>
        <div className="w-10 h-[2px] bg-gray-placeholder/50 rounded-sm my-2" />
        {!plan.custom && <div className="flex flex-col items-start gap-1 my-2">
            <p className="text-sm">{plan.starting_at?.name}</p>
            <span className="text-gray-primary flex items-end">
                <h1 className="font-semibold">${price}</h1>
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
           
        {plan.custom && <div className="text-gray-primary my-2 mb-5">
            <p className="text-gray-secondary">{plan.custom.contact_us}</p>
            <h1 className="font-semibold">{plan.custom.pricing}</h1>
            <p className="text-gray-secondary">{plan.custom.users}</p>
        </div>}
    </div>
    <hr />
    {/* perks */}
    <ul className="text-sm text-gray-primary">
        {plan.perks.map(perk => <li key={perk.name}>
            <span className="font-semibold">
                {perk.perk}
            </span> {' '}
            <span className="text">
                {perk.name}
            </span>
        </li>)}
    </ul>
    {/* features */}
    <div className="text-sm">
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
