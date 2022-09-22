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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12  md:mb-12'>
          {
            data.bullet_points.map((k) => {
              return <div key={k.code} className='flex flex-col gap-4 bg-white-10 rounded-xl px-5 pt-4 pb-6'>
                <div className='leading-[0]'>
                  {buildIcon({ data: simplifySales, code: k.code, fallback: <BsBarChartFill />, size: { width: 40, height: 40 } })}
                </div>
                <div>
                  <h3 className='mb-1'>{k.title}</h3>
                  <p className='text-xl'>{k.desc}</p>
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

