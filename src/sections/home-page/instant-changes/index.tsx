import classNames from 'classnames';
import { useResponsive } from '@hooks/useResponsive';
import { Section } from '@components/section';
import InstantChangesMobile from './mobile';
import InstantChangesDesktop from './desktop';

interface Props {
  className?: string;
}

export const InstantChanges: React.FC<Props> = ({ className }) => {
  const { isDesktop } = useResponsive();

  return (
    <section className={classNames('flex flex-col h-full lg:px-12 pb-6 lg:pb-20', className)}>
      <Section className='container mx-auto'>
        <div className='flex items-center justify-center flex-col gap-6'>
          <div className='pt-6 lg:pt-20 items-center flex flex-col'>
            <h1 className='pb-6 md:pb-10 font-semibold md:leading-10 tracking-tight	self-start'>
              Dealerships That Turn to SalesAssist See 3 Instant Changes
            </h1>
            { !isDesktop && <InstantChangesMobile /> }
            { isDesktop && <InstantChangesDesktop />}
          </div>
        </div>
      </Section>
    </section>
  )
}
