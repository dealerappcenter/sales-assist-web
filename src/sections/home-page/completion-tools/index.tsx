import Image from 'next/image';
import { Section } from '@components/section';
import { CompletionToolsScreenshot } from '@src/assets';

export const CompletionTools: React.FC = () => {
  return (
    <section className='section bg-white-normal !pb-0'>
      <Section className='flex flex-col gap-6'>
        <h1 className='text-[2.125rem]'>
          Embedded In and Fully Integrated With Your Automotive CRM
        </h1>
        <h4 className='mb-6'>
          Have a complete arsenal of every possible info-gathering widget in a single panel, right from your automotive CRM. All information and documents gathered enter your CRM in real time, with audit trail.
        </h4>
        <Image alt='Completion Tools' src={CompletionToolsScreenshot} />
      </Section>
    </section>
  )
}
