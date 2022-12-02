import { Section } from '@components/section';

interface Props {
  title: string;
  subtitle: string;
}

const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <header className='flex flex-col bg-white-soft h-full mx-auto pb-20 max-w-4xl'>
      <Section className='lg:px-0'>
        <div className='flex justify-center flex-col gap-6'>
          <div className='flex flex-col pb-12'>
            <h1 className='md:text-6xl lg:text-7xl lg:tracking-wide lg:leading-[5.375rem] lg:mb-1.5'>{ title }</h1>
            <div className='flex flex-row gap-2 md:gap-4 lg:tracking-wide lg:leading-[5.375rem]'>
              <h1 className='md:text-6xl lg:text-7xl text-orange-normal font-normal'>{ subtitle }</h1>
            </div>
          </div>
        </div>
      </Section>
    </header>
  )
}

export default Header;