import React from 'react'
import classNames from 'classnames';
import { InteractAnimation } from '@src/components/HowitWorksAnimations/Interact';

interface CardProps {
  title: string;
  sub: string;
  className?: string;
  kind?: Kind 
}

export const Card: React.FC<React.PropsWithChildren<CardProps>> = (props) => {
  const { title, sub, className, kind = 'normal' } = props;
  const cardClasses = classNames("mb-6 h-[25rem] w-[20rem] rounded-2xl bg-card-normal overflow-hidden cursor-pointer flex duration-400 items-end flex-col", 
    {'bg-gradient-to-b from-[#FF333366] to-[#FF990066]':  kind === 'orange'},
    {'bg-gradient-to-b from-[#3360FF66] to-[#8B00AE66]':  kind === 'purple'},
  className
  );
  return (
    <div className='block mr-6'>
      <div
        className={cardClasses}
      >
        <div className='px-4 pt-4 w-[90%] flex items-center justify-center'>
          {props.children}
        </div>
        <div className='flex p-2 bg-white-normal/20 flex-grow'>
          <div className='h-full py-2 px-4'>
            <h3 className='text-sm font-semibold text-gray-primary'>{title}</h3>
            <p className='text-gray-secondary text-sm'>{sub}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
