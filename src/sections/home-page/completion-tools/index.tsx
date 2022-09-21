import Image from 'next/image';
import { Section } from '@components/section';
import { CompletionToolsScreenshot } from '@src/assets';

export const CompletionTools: React.FC = () => {
  return (
    <section className='section'>
      <Section className='flex flex-col gap-6'>
        <h1>
          Your CRM With All the Sales Completion Tools In One Place
        </h1>
        <h4 className='mb-6'>
          Have a complete arsenal of every possible sales completion tool in a single panel, right from your CRM.
          Whether you use our off-the-shelf completion tools, add your existing ones, or mix and match, we got you covered.
        </h4>
        <div className='flex flex-col rounded-[20px] drop-shadow-sa'>
          <Image alt='Completion Tools' src={CompletionToolsScreenshot} />
        </div>
      </Section>
    </section>
  )
}
