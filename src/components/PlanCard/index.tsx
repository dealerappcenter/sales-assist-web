import { MdCheck, MdArrowDropDown } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";

interface PlanCardProps {
    plan: Plan
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div key={plan.name} className='p-4 flex flex-col gap-6 bg-white-normal md:w-1/3 h-full rounded-xl'>
    <div className=""><SiHackthebox className="text-xl" /></div>
    <div className="text-gray-secondary">
        <h1 className="text-gray-primary mb-2 font-semibold">{plan.name}</h1>
        <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-primary flex items-end">
                <h1 className="font-semibold">{plan.price_per_year}</h1>
                /yr
            </span>
            | or
            <h4 className="text-base text-gray-primary mt-1">
                <span className="font-semibold">
                    {plan.price_per_month}
                </span>
                /m
            </h4>
        </div>
        <p className="text-gray-secondary text-sm">{plan.price_per_user}</p>
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
