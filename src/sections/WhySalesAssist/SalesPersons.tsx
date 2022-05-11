import { useResponsive } from '@hooks/useResponsive';

export const WhySalesAssistSalesProcess = () => {
    const { isDesktop, isTablet, isMobile } = useResponsive();
    return (
        <section className='bg-white-normal h-full px-4 pt-6 pb-12'>
            <div className='py-6 text-center'>
                <h1 className='font-bold'>Built for every sales process</h1>
            </div>
            {isDesktop && <div className='relative overflow-y-hidden overflow-x-auto flex px-4 gap-24'>

                {/* IconBox */}
                {/* TODO: make this a component */}
                {/* TODO: add logic to auto scroll */}
                {business.map(business => {
                    return <div key={business} className='c-container p-2 w-fit text-center flex items-center justify-center flex-col'>
                        <div className='h-24 w-24 p-4 rounded-full bg-gray-200'></div>
                        <p className='mt-2 text-gray-primary'>{business}</p>
                    </div>
                })}

            </div>}

            {(isMobile || isTablet) &&<div className='flex flex-wrap'>
                { business.map(business => {
                    return <div key={business} className='w-1/2 md:w-1/3 c-container p-2 text-center inline-flex items-center justify-center flex-col'>
                        <div className='h-24 w-24 p-4 rounded-full bg-gray-200'></div>
                        <p className='mt-2 text-gray-primary'>{business}</p>
                    </div>
                })
                }
            </div>}
        </section>
    )
}

const business = [
    "Automotive",
    "Medical Equipment",
    "SaaS",
    "Insurance",
    "Real Estate",
    "Machinery",
    "Advertising"
]