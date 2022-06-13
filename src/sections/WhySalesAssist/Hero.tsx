import { Nav } from 'src/components';
import { whySalesAssistHero } from '@src/assets';
import { buildIcon } from '@src/utils/icons';


export const WhySalesAssistHero: React.FC<Section<WhySalesAssistHeroSection>> = ({ data }) => {
  return (
    <header className='h-full px-4 flex flex-col bg-white-soft lg:pb-12'>
      <Nav />
      <div className='flex-grow container mx-auto flex items-center justify-center flex-col gap-12'>
        <div className='text-center bold w-full'>
          <h1 className='text-gray-primary md:text-4xl font-bold mb-6'>{data.title}</h1>
          <p className='mx-auto md:px-6 text-gray-secondary text-sm md:text-base max-w-5xl'>{data.desc}</p>
        </div>
        <div className='relative overflow-x-auto overflow-y-hidden w-full flex gap-2 lg:items-center lg:justify-center pb-12'>
          {/* list of things here */}
          {
            data.reasons.map(singleCard => {
              return <div className='block lg:w-1/5' key={singleCard.code}>
                <div className='p-4 rounded-md w-[15rem]  h-52 bg-white-normal'>
                  <div className='w-12 h-12 rounded-full'>
                    {buildIcon({ data: whySalesAssistHero, code: singleCard.code, fallback: <></> })}
                  </div>
                  <div className='pt-2'>
                    <h1 className='text-sm font-semibold'>{singleCard.title}</h1>
                    <p className='text-sm text-gray-secondary'>{singleCard.desc}</p>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </header>
  )
}
