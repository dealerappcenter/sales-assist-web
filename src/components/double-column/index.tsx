import classNames from 'classnames';
import { Section } from '@components/section';

interface Props {
  content: JSX.Element;
  media: JSX.Element;
  bgClassName?: string;
  reverse?: boolean;
}

const DoubleColumn: React.FC<Props> = ({ content, media, bgClassName, reverse }) => {
  return (
    <section className={classNames('section', bgClassName || 'bg-white-normal')}>
      <Section className='flex flex-col md:flex-row gap-4 md:gap-20 items-center'>
        <div
          className={classNames(
            'flex flex-col gap-6',
            reverse ? 'md:order-2' : 'md:order-1'
          )}
        >
          { content }
        </div>
        <div
          className={classNames(
            'flex shrink-0 md:w-[440px] md:h-[345px] rounded-lg drop-shadow-sa overflow-hidden items-center',
            reverse ? 'md:order-1' : 'md:order-2'
          )}
        >
          { media }
        </div>
      </Section>
    </section>
  )
}

export default DoubleColumn;