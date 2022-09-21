import Image from 'next/image';
import { Section } from '@components/section';
import { CompletionToolsScreenshot } from '@src/assets';

export const CompletionTools: React.FC = () => {
  return (
    <section className='section'>
      <Section className='flex flex-col gap-6'>
        <h1>
          All the Sales Completion Tools Accessible Within Your CRM
        </h1>
        <h4 className='mb-6'>
          Have a complete arsenal of every possible sales completion tool in a single panel, right from your CRM.
          Whether you use our off-the-shelf completion tools, add your existing ones, or mix and match, we&rsquo;ve got you covered.
        </h4>
        <div className='rounded-[20px] drop-shadow-sa text-center'>
          <Image alt='Completion Tools' src={CompletionToolsScreenshot} />
        </div>
      </Section>
    </section>
  )
}
