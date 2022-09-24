import { Nav } from 'src/components';
import { whySalesAssistHero } from '@src/assets';
import { buildIcon } from '@src/utils/icons';
import { Section } from '@src/components/section';


export const WhySalesAssistHero: React.FC<Section<WhySalesAssistHeroSection>> = ({ data }) => {
  return (
    <header className='h-full px-4 flex flex-col bg-white-soft lg:pb-12 lg:px-12'>
      <Nav />
      <Section className='flex-grow flex items-center justify-center flex-col gap-12'>
        <div className='text-center bold w-full'>
          <h1 className='text-gray-primary font-bold mb-6'>{data.title}</h1>
          <p className='mx-auto md:px-6 text-gray-secondary text-sm md:text-xl max-w-5xl'>{data.desc}</p>
        </div>
        <div className='grid md:grid-cols-3 gap-5 pb-12'>
          {/* list of things here */}
          {
            data.reasons.map(singleCard => {
              return <>
                <div className='p-4 rounded-md bg-white-normal'>
                  <div className='w-12 h-12 rounded-full'>
                    {buildIcon({ data: whySalesAssistHero, code: singleCard.code, fallback: <></> })}
                  </div>
                  <div className='pt-2'>
                    <h1 className='text-sm md:text-xl font-semibold'>{singleCard.title}</h1>
                    <p className='text-sm md:text-xl text-gray-secondary'>{singleCard.desc}</p>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </Section>
    </header>
  )
}
