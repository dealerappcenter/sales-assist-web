import React from 'react'
import classNames from 'classnames';
import Image from 'next/image';

interface CardProps {
  title: string;
  sub: string,
  icon: string // path
}

export const Card: React.FC<CardProps> = (props) => {
  const { title, sub, icon } = props;
  const baseClasses = classNames("mb-6 rounded-2xl bg-card-normal cursor-pointer w-full  md:h-[8.5rem] flex overflow-hidden duration-400");

  return (
    <div
      className={baseClasses}
    >
      <div className='flex p-2 h-full'>
        <div className='flex justify-center'>
          <div className='w-10 h-10 md:w-20 lg:w-20 rounded-full'>
            <Image src={icon} alt={title} />
          </div>
        </div>
        <div className='h-full py-2 px-4'>
          <h3 className='text-sm font-semibold text-gray-primary'>{title}</h3>
          <p className='text-gray-secondary text-sm'>{sub}</p>
        </div>
      </div>
    </div>
  )
}
