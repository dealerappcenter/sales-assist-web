import { useResponsive } from '@hooks/useResponsive';

export const WhySalesAssistSalesProcess = () => {
    const { isDesktop, isTablet, isMobile } = useResponsive();
    return (
        <section className='bg-white-normal h-full px-4 pt-6 pb-12 '>
            <div className='py-6 text-center'>
                <h1 className='font-bold'>Built for every sales process</h1>
            </div>
            {isDesktop && <div className='slider-container container mx-auto'>
               <div className='slider-inside'>
                <ul className='infinity-x-container'>
                        {business.map(business => {
                            return <li key={business.code} className='flex-1  p-2 text-center flex items-center justify-center flex-col infinity-x'>
                                <div className='h-24 w-24 p-4 rounded-full bg-gray-200'></div>
                                <p className='mt-2 text-gray-primary'>{business.name}</p>
                            </li>
                        })}
                        {business.map(business => {
                            return <li key={business.code} className='flex-1  p-2 text-center flex items-center justify-center flex-col infinity-x'>
                                <div className='h-24 w-24 p-4 rounded-full bg-gray-200'></div>
                                <p className='mt-2 text-gray-primary'>{business.name}</p>
                            </li>
                        })}
                    </ul>
               </div>
            </div>}

            {(isMobile || isTablet) && <div className='flex flex-wrap'>
                {business.map(business => {
                    return <div key={business.code} className='w-1/2 md:w-1/3 p-2 text-center inline-flex items-center justify-center flex-col'>
                        <div className='h-24 w-24 p-4 rounded-full bg-gray-200'></div>
                        <p className='mt-2 text-gray-primary'>{business.name}</p>
                    </div>
                })
                }
            </div>}
        </section>
    )
}

const business = [
    { code: "ATMTV", name: 'Automotive' },
    { code: "MDQ", name: 'Medical Equipment' },
    { code: "SAAS", name: 'SaaS' },
    { code: "INSRC", name: 'Insurance' },
    { code: "RLST", name: 'Real Estate' },
    { code: "MCHRY", name: 'Machinery' },
    { code: "ADVRTNG", name: 'Advertising' },
]