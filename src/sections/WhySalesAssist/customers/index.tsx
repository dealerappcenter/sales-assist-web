import Image from 'next/image';
import { Section } from '@components/section';
import { SimpleToUseByCustomers } from '@src/assets';

export const Customers: React.FC = () => {
  return (
    <section className='section bg-white-normal'>
      <Section className='flex flex-col md:flex-row gap-4 md:gap-20 items-center'>
        <div className='flex flex-col gap-6'>
          <h1>
            Simple to Use by Customers
          </h1>
          <h4>
            Provide customers with instant, real-time, mobile-first completion experiences.
            Interactions with their salesperson are done in the fastest and most personalized way, Amazon style.
            By receiving personalized texts customers can simply click on the provided links to enter, sign, upload,
            verify, pay, choose, etc., whatever is needed to complete the sale.
          </h4>
        </div>
        <div className='shrink-0 w-96 h-96 md:w-[440px] md:h-[360px] rounded-lg drop-shadow-sa overflow-hidden'>
          <Image alt='Simple to Use by Customers Example' src={SimpleToUseByCustomers} />
        </div>
      </Section>
    </section>
  )
}
