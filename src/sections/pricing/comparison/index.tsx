import PlansInfo from '@src/mocks/pricing/plans.json';
import { MdCheck } from 'react-icons/md';

export const PricingComparison = () => {
    return (
        <section className='px- py-6 lg:px-12 lg:py-12 bg-white-normal'>
            <div className='container mx-auto text-gray-primary flex flex-col gap-12 mb-6 lg:px-12 md:px-6 px-4'>
                <div className=''>
                    <h1 className="mb-4">{PlansInfo.title}</h1>
                    <h4 className="text-gray-secondary">{PlansInfo.description}</h4>
                </div>
                <div className='relative bg-white-normal'>
                    <div className='w-full sticky md:relative top-0'>
                        <div className='flex items-center bg-white-normal'>
                            <div className='w-1/2 p-4 hidden md:block'></div>
                            {PlansInfo.plans_names.map(plan => {
                                return <div key={plan.name} className='w-1/3 md:w-1/4 text-center p-4'>
                                    <h3 className='font-medium'>{plan.name}</h3>
                                    <p className='text-sm text-gray-secondary md:hidden'>{plan.price}/yr</p>
                                </div>
                            })}
                        </div>
                        <hr />
                    </div>
                    {PlansInfo.features.map(feature => {
                        return <div key={feature.name} className=' first:bg-white-normal even:bg-[#F5F6F8] text-gray-primary p-4 py-6 flex items-center'>
                            <div className='w-1/2 hidden md:block'>
                                <h3 className='font-medium'>{feature.name}</h3>
                                <p className='text-gray-secondary text-sm'>{feature.sub_name}</p>
                            </div>
                            {feature.perks.map(perk => {
                                if (perk === 'yes') {
                                    return <div className='w-1/3 md:w-1/4 text-green-600 flex items-center justify-center'>
                                        <MdCheck />
                                    </div>
                                } else if (perk === 'no') {
                                    return <div className='w-1/3 md:w-1/4'></div>
                                } else {
                                    return <p className='w-1/3 md:w-1/4 text-center'>{perk}</p>
                                }
                            })}
                        </div>
                    })}
                </div>
            </div>
            <hr />
        </section>
    )
}
