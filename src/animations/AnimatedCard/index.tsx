import React from 'react'
import classNames from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { buildIcon } from '../../utils/icons';
import { howItWorksIcons } from '@src/assets';
interface AnimatedCardProps {
  title: string;
  sub: string,
  code: string // path
  isActive?: boolean,
  progress: number,
  onClick?: () => void,
}

export const AnimatedCard: React.FC<AnimatedCardProps> = (props) => {
  const { title, sub, code, isActive, progress, onClick } = props;
  const baseClasses = classNames("group rounded-2xl cursor-pointer w-full md:w-[27rem] h-[8.5rem] flex overflow-hidden duration-400",
    {'bg-card-normal': isActive },
    {'opacity-50': !isActive}
  );
  const progressClass = classNames("h-full  w-6 duration-300 rounded-bl rounded-br");
  return (
    <button
      className={baseClasses}
      onClick={onClick}
    >
      <div className={progressClass}>
        {isActive && <div style={{ transform: `translate(0, -${progress}%)`}} className='w-full h-full rounded-lg bg-orange-normal transform-gpu transition-all duration-300'  />}
      </div>
      <div className='flex h-full p-2'>
        <div className='flex justify-center p-4 px-4'>
          <div className='w-20 h-20 rounded-full'>
            {buildIcon({ data: howItWorksIcons, code, fallback: <></>, size: { width: 64, height: 64 }})}
          </div>
        </div>
        <div className='h-full py-2 text-left'>
          <h3 className='text-sm font-semibold text-gray-primary'>{title}</h3>
          <p className='text-sm text-gray-secondary'>{sub}</p>
        </div>
      </div>
    </button>
  )
}
