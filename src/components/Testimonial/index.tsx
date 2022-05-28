import { Avatar, AvatarProps, Quote } from '@src/components';
import classNames from 'classnames';

export interface TestimonialProps extends AvatarProps { }

export const Testimonial: React.FC<React.PropsWithChildren<TestimonialProps>> = (props) => {
  const { title, image, className, children, subTitle } = props;
  const baseClass = classNames('flex flex-col', className);
  return (
    <div className='block'>
      <div className={baseClass}>
        <Quote>
          {children}
        </Quote>
        <Avatar
          title={title}
          subTitle={subTitle}
          image={image}
        />
      </div>
    </div>
  )
}
