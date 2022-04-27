import { Hero } from '@src/assets';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AnimatedHero = () => {
    return <div className='animated'>
        <Image src={Hero.Phone} alt='' width={512} height={512}/>
        <Image src={Hero.UnderLine} alt='' />
    </div>
}