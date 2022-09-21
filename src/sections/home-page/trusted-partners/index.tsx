import Image from 'next/image';
import { partners } from '@src/assets';
import { Section } from '@components/section';

interface Props {
  data: Hero
}

export const TrustedPartners: React.FC<Props> = ({ data }) => {
  return (
    <header className='flex flex-col bg-gray-primary text-white-normal h-full lg:px-12 pb-24'>
      <Section className='container mx-auto'>
        <div className='flex items-center justify-center flex-col gap-6'>
          <div className='pt-24 items-center flex flex-col'>
            <h3 className='pb-12 font-semibold text-2xl'>{data.trusted}</h3>
            <div className='flex justify-center w-full items-center flex-wrap gap-12 lg:gap-24'>
              {partners.map((partner, index) => {
                return <div key={`partner-${index}`} className="w-40 h-20 flex items-center">
                  <Image alt={'trusted'} src={partner.path} />
                </div>
              })}
            </div>
          </div>
        </div>
      </Section>
    </header>
  )
}
