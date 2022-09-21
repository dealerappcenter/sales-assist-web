import Image from 'next/image';
import { Section } from '@components/section';
import { CompletionProcessExample } from '@src/assets';

export const CompletionProcess: React.FC = () => {
  return (
    <section className='section bg-white-normal'>
      <Section className='flex flex-row gap-20 items-center'>
        <div className='flex flex-col gap-6'>
          <h1>
            Let Us Assist and Guide Your Completion Process
          </h1>
          <h4>
            Completing the sale is often the most time consuming, yet most important part of the business.
            We&apos;ll assist your team with smart suggestions based on real time signals,
            so they know who, when, how and what to focus on to complete more sales.
          </h4>
        </div>
        <div className='shrink-0 w-[27.5rem] rounded-lg drop-shadow-sa'>
          <Image alt='Completion Process Example' src={CompletionProcessExample} />
        </div>
      </Section>
    </section>
  )
}
