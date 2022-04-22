import React from 'react'
import { motion, AnimationControls } from 'framer-motion';
import { fadeInLeft } from '@src/utils/animations';
import classNames from 'classnames';

interface CardProps {
  controls: AnimationControls;
  delay?: number;
  title: string;
  sub: string,
  icon: string // path
  isActive?: boolean
}



export const Card: React.FC<CardProps> = (props) => {
  const { delay = 0, controls, title, sub, icon, isActive } = props;
  const baseClasses = classNames("my-6 group rounded-2xl cursor-pointer w-full md:w-[27rem] h-[8.5rem] flex overflow-hidden", 
    {'bg-card-normal': isActive },
    {'opacity-30': !isActive}
  );

  const progress = classNames("h-0 w-6 bg-orange-normal duration-300 rounded-bl rounded-br", 
    {'group-hover:h-[5rem]': isActive}
  )


  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        ...fadeInLeft,
        visible: {
          ...fadeInLeft.visible,
          transition: {
            ...fadeInLeft.visible.transition,
            delay
          }
        }
      }}
      className={baseClasses}
    >
      <div className={progress} />
      <div className='flex p-2 h-full'>
        <div className='flex px-4 justify-center p-4'>
          <div className='h-20 w-20 rounded-full bg-orange-normal'></div>
        </div>
        <div className='h-full py-2'>
          <h3 className='text-sm font-semibold text-gray-primary'>{title}</h3>
          <p className='text-gray-secondary text-sm'>{sub}</p>
        </div>
      </div>
    </motion.div>
  )
}
