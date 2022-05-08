import { MdHideSource } from 'react-icons/md';
import { Nav } from 'src/components';



export const WhySalesAssistHero = () => {
  return (
    <header className='h-full px-4 flex flex-col bg-white-soft lg:pb-12 border'>
      <Nav />
      <div className='flex-grow container mx-auto flex items-center justify-center flex-col gap-12'>
        <div className='text-center bold w-full'>
          <h1 className='text-gray-primary text-4xl font-bold mb-6'>End long and painful sales completion process</h1>
          <p className='mx-auto md:px-6 text-gray-secondary max-w-5xl'>Customers hate being bounced from phone call to inbox to branch, and your team hates wasting valuable time to complete the sale. SalesAssist helps you deliver a sleek, mobile experience that your customers start and finish from their phones, while giving valuable time back to your team.</p>
        </div>
        <div className='px-2 flex gap-2 max-w-5xl items-center justify-center'>
          {/* list of things here */}
          {
            listOfCards.map(singleCard => {
              return <div className='p-4 rounded-md w-1/5 h-52 bg-white-normal' key={singleCard.id}>
                <div className='h-2 w-2 p-4 rounded-full bg-gray-700'>
                </div>
                <div className='pt-2'>
                  <h1 className='text-sm font-semibold'>{singleCard.title}</h1>
                  <p className='text-xs text-gray-secondary'>{singleCard.des}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </header>
  )
}


const listOfCards: { title: string, des: string, id: number }[] = [
  { id: 1, title: 'Complete sales faster', des: 'Have customers complete the process in real time with mobile web apps shared via text. ' },
  { id: 2, title: 'Cut everyone’s work', des: 'Give customers what they have come to expect, a seamless end-to-end journey.' },
  { id: 3, title: 'Provide better experience', des: 'Give customers what they have come to expect, a seamless end-to-end journey.' },
  { id: 4, title: 'Lower operating costs', des: 'Give customers what they have come to expect, a seamless end-to-end journey.' },
]