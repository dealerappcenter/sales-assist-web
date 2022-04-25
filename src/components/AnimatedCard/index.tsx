import React from 'react'
import { motion, AnimationControls } from 'framer-motion';
import { fadeInLeft } from '@src/utils/animations';
import classNames from 'classnames';
import Image from 'next/image';
interface AnimatedCardProps {
  controls: AnimationControls;
  delay?: number;
  title: string;
  sub: string,
  icon: string // path
  isActive?: boolean,
  progress?: number,
  onClick?: () => void,
}

export const AnimatedCard: React.FC<AnimatedCardProps> = (props) => {
  const { delay = 0, controls, title, sub, icon, isActive, progress, onClick } = props;
  const baseClasses = classNames("mb-6 group rounded-2xl cursor-pointer w-full md:w-[27rem] h-[8.5rem] flex overflow-hidden duration-400", 
    {'bg-card-normal': isActive },
    {'opacity-50': !isActive}
  );
  const progressClass = classNames("h-[10rem] w-6 duration-300 rounded-bl rounded-br");

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
            delay,
          }
        }
      }}
      className={baseClasses}
      onClick={onClick}
    >
      <div className={progressClass}>
        {isActive && <div className='bg-orange-normal w-full h-0 rounded-lg' style={{ height: `${progress}%` }} />}
      </div>
      <div className='flex p-2 h-full'>
        <div className='flex px-4 justify-center p-4'>
          <div className='h-20 w-20 rounded-full'>
            <Image src={icon} alt={title} />
          </div>
        </div>
        <div className='h-full py-2'>
          <h3 className='text-sm font-semibold text-gray-primary'>{title}</h3>
          <p className='text-gray-secondary text-sm'>{sub}</p>
        </div>
      </div>
    </motion.div>
  )
}
