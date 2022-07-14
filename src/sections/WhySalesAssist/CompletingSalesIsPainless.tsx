import { BsBarChartFill } from 'react-icons/bs'
import { buildIcon } from '@src/utils/icons';
import { simplifySales } from '@src/assets/'
import { calendlyLink } from "@src/utils/routes";
import { Section } from '../../components/section/index';

export const WhySalesAssistCompletingSalesIsPainless: React.FC<Section<WhySalesAssistCompleteSalesPainlessSection>> = ({ data }) => {
    return (
        <section className='section flex flex-col relative bg-gray-primary text-white-normal'>
            <Section className='container gap-6 md:gap-12 py-6 mx-auto flex-col h-full flex'>
                <div className='w-full'>
                    <h1>{data.title}</h1>
                </div>
                <div className='flex-grow-0 relative flex items-center md:items-start justify-center w-fit flex-col gap-6'>
                    {
                        data.bullet_points.map((k) => {
                            return <div key={k.code} className='flex flex-col w-full gap-4'>
                                <div>
                                    {buildIcon({ data: simplifySales, code: k.code, fallback: <BsBarChartFill />, size: { width: 56, height: 56 } })}
                                </div>
                                <div>
                                    <h3 className="">{k.title}</h3>
                                    <p className="">{k.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                {/* banner */}
                <div className='w-full px-6 flex-wrap md:px-12 py-8 flex items-center justify-between rounded-lg bg-gradient-to-br from-[#F87129] via-[#F87129] to-[#FFA742] text-white-normal'>
                    <h1 className='text-xl font-semibold'>{data.banner.text}</h1>
                    <div className='my-6 border-2 border-transparent'></div>

                    <a href={calendlyLink} target="_blank" rel="noreferrer">
                        <button className='p-2 px-3 font-medium rounded-md bg-white-normal text-orange-link'>
                            {data.banner.cta}
                        </button>
                    </a>
                </div>
            </Section>
        </section>
    )
}

