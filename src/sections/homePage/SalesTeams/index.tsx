import React from 'react'
import { Testimonial } from '@src/components';

export const SalesTeams: React.FC<Section<SalesTeamSection>> = ({ data }) => {

  return (
    <section className='md:h-[65vh] flex flex-col relative text-white-normal'>
      <div className='inset-0 bg-gray-primary clip absolute -z-[1]'></div>
      <div className='inset-0 bg-white-normal absolute -z-[2]'></div>
      <div className='container py-6 mx-auto px-4 lg:px-12 lg:py-20 h-full flex flex-col'>
        <h1>{data.title}</h1>

        <div className='relative py-12 overflow-y-hidden overflow-x-auto flex gap-6 w-full'>
          {data.quotes?.map(quote => {
            return <Testimonial
                className='flex-1 w-[77vw]'
                title={quote.author}
                key={quote.thoughts}
                subTitle={quote.position}
              >
                {quote.thoughts}
              </Testimonial>
          })}
        </div>
      </div>
    </section>
  )
}
