import Image from 'next/image';
import { Icons } from '@src/assets';

interface ImageProps {
  src: string;
}

interface LeadingProps {
  title: string;
  content: string;
}

interface RatesProps {
  rate: string;
  title: string;
}

const InstantImage: React.FC<ImageProps> = ({ src }) => {
  return <Image alt='' src={src} layout='fixed' width={340} height={240} />
}

const Leading: React.FC<LeadingProps> = ({ title, content }) => {
  return (
    <div>
      <h3 className='font-semibold leading-6'>{ title }</h3>
      <span className='flex justify-center text-xl leading-6 text-gray-subtext'>{ content }</span>
    </div>
  )
}

const Rates: React.FC<RatesProps> = ({ rate, title }) => {
  return (
    <div>
      <div className='text-6xl leading-[72px]'>{ rate }</div>
      <span className='text-xl leading-6'>{ title }</span>
    </div>
  )
}

const InstantChangesDesktop: React.FC = () => {
  return (
    <div className='text-center'>
      <div className='grid grid-cols-3 gap-10 w-full mb-4'>
        <InstantImage src={Icons.Business} />
        <InstantImage src={Icons.Sales} />
        <InstantImage src={Icons.Costumer} />
      </div>
      <div className='grid grid-cols-3 gap-10 w-full mb-4'>
        <Leading title='Increase Closing Rate' content='by completing sales faster' />
        <Leading title='Free-up Salespeople' content='to do more value-added work' />
        <Leading title='Improve Customer Experience' content='by streamlining the sales completion process' />
      </div>
      <div className='grid grid-cols-3 gap-10 w-full text-orange-normal font-semibold'>
        <Rates rate='+23%' title='Closing Rate' />
        <Rates rate='15hrs+' title='Saved Per Person Per Month' />
        <Rates rate='+15%' title='Positive Reviews' />
      </div>
    </div>
  )
}

export default InstantChangesDesktop;