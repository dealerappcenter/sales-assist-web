import React from 'react'
import { Testimonial } from '@src/components';
export const SalesTeams = () => {
  return (
    <section className='md:h-[60vh] flex flex-col relative text-white-normal'>
      <div className='inset-0 bg-gray-primary clip absolute -z-[1]'></div>
      <div className='container py-6 mx-auto px-4 lg:px-12 lg:py-20 h-full flex flex-col'>
        <h1>Sales teams love Salesassist!</h1>

        <div className='flex-grow py-12'>
          <Testimonial
            image='https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
            title='Nik Sharma'
            subTitle='Founder & CEO of Sharma Brands'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti corporis accusamus voluptas odio aperiam ab ex modi, doloremque qui. Pariatur hic fugiat voluptatum blanditiis accusantium ipsam! Quod, totam rem.
          </Testimonial>
        </div>
      </div>
    </section>
  )
}
