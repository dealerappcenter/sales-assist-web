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
  const baseClasses = classNames("group rounded-2xl cursor-pointer w-full md:w-[27rem] h-[8.5rem] flex overflow-hidden duration-400",
    {'bg-card-normal': isActive },
    {'opacity-50': !isActive}
  );
  const progressClass = classNames("h-full w-6 duration-300 rounded-bl rounded-br");

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
        {isActive && <div className='w-full h-0 rounded-lg bg-orange-normal' style={{ height: `${progress}%` }} />}
      </div>
      <div className='flex h-full p-2'>
        <div className='flex justify-center p-4 px-4'>
          <div className='w-20 h-20 rounded-full'>
            <Image src={icon} alt={title} />
          </div>
        </div>
        <div className='h-full py-2'>
          <h3 className='text-sm font-semibold text-gray-primary'>{title}</h3>
          <p className='text-sm text-gray-secondary'>{sub}</p>
        </div>
      </div>
    </motion.div>
  )
}
