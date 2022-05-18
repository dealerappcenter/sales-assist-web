import { Nav } from 'src/components';
import { whySalesAssistHero } from '@src/assets';
import { buildIcon } from '@src/utils/icons';


export const WhySalesAssistHero = () => {
  return (
    <header className='h-full px-4 flex flex-col bg-white-soft lg:pb-12'>
      <Nav />
      <div className='flex-grow container mx-auto flex items-center justify-center flex-col gap-12'>
        <div className='text-center bold w-full'>
          <h1 className='text-gray-primary md:text-4xl font-bold mb-6'>End long and painful sales completion process</h1>
          <p className='mx-auto md:px-6 text-gray-secondary text-sm md:text-base max-w-5xl'>Customers hate being bounced from phone call to inbox to branch, and your team hates wasting valuable time to complete the sale. SalesAssist helps you deliver a sleek, mobile experience that your customers start and finish from their phones, while giving valuable time back to your team.</p>
        </div>
        <div className='relative overflow-x-auto overflow-y-hidden w-full flex gap-2 md:items-center md:justify-center'>
          {/* list of things here */}
          {
            listOfCards.map(singleCard => {
              return <div className='block lg:w-1/5' key={singleCard.id}>
                <div className='p-4 rounded-md w-[15rem]  h-52 bg-white-normal'>
                  <div className='w-12 h-12 rounded-full'>
                    {buildIcon({ data: whySalesAssistHero, code: singleCard.code, fallback: <></> })}
                  </div>
                  <div className='pt-2'>
                    <h1 className='text-sm font-semibold'>{singleCard.title}</h1>
                    <p className='text-sm text-gray-secondary'>{singleCard.des}</p>
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


const listOfCards: { code: string, title: string, des: string, id: number }[] = [
  { code: "CSF", id: 1, title: 'Complete sales faster', des: 'Have customers complete the process in real time with mobile web apps shared via text. ' },
  { code: 'CEW', id: 2, title: 'Cut everyone’s work', des: 'Give customers what they have come to expect, a seamless end-to-end journey.' },
  { code: 'PBE', id: 3, title: 'Provide better experience', des: 'Give customers what they have come to expect, a seamless end-to-end journey.' },
  { code: 'LOC', id: 4, title: 'Lower operating costs', des: 'Give customers what they have come to expect, a seamless end-to-end journey.' },
]