import { useResponsive } from '@hooks/useResponsive';
import { industries } from '@src/assets';
import { IndustriesItem } from '@src/components';
import { buildIcon } from '@src/utils/icons';

export const WhySalesAssistSalesProcess: React.FC<Section<WhySalesAssistSalesProcessSection>> = ({ data }) => {
    const { isDesktop, isTablet, isMobile } = useResponsive();
    return (
        <section className='bg-white-normal h-full px-4 pt-6 pb-12 '>
            <div className='py-6 text-center'>
                <h1 className='font-bold'>{data.title}</h1>
            </div>
            {isDesktop && <div className='slider-container container mx-auto'>
                <div className='slider-inside'>
                    <ul className='infinity-x-container'>
                        {data.industries.map(business => {
                            return <IndustriesItem key={business.code} code={business.code} name={business.name} kind='li' />
                        })}
                        {data.industries.map(business => {
                            return <IndustriesItem key={business.code} code={business.code} name={business.name} kind='li' />
                        })}
                    </ul>
                </div>
            </div>}

            {(isMobile || isTablet) && <div className='flex flex-wrap'>
                {data.industries.map(business => <IndustriesItem key={business.code} code={business.code} name={business.name} kind='div' />)}
            </div>}
        </section>
    )
}

