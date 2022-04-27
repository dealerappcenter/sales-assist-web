import { Hero } from '@src/assets';
import { motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';

export const AnimatedHero = () => {
    return <div className='animated'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
        >
            <Image src={Hero.Phone} alt='' width={256} height={256} />
        </motion.div>
        <motion.div
            animate={{ width: '100%' }}
            initial={{ width: '0%' }}
            transition={{ duration: 1 }}
        >
            <Image src={Hero.UnderLine} alt='' />
        </motion.div>
        <div className='relative w-fit'>
            <div className='absolute top-3 right-3 z-10'>
                <motion.div
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    <Image src={Hero.Arrow} width={128} height={128} alt='' />
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
            >
                <Image src={Hero.Target} width={256} height={256} alt='' />
            </motion.div>
        </div>
        <div className='flex items-end'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1
                }}
                className="w-fit"
            >
                <Image src={Hero.Level1} width={128} alt='' />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1,
                    delay: .5
                }}
                className="w-fit"
            >
                <Image src={Hero.Level2} width={256} height={256} alt='' />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1,
                    delay: 1
                }}
                className="w-fit"
            >
                <Image src={Hero.Level3} width={256} height={256} alt='' />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1,
                    delay: 1.5
                }}
                className="w-fit"
            >
                <Image src={Hero.Level4} width={256} height={256} alt='' />
            </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                className="w-fit"
            >
                <Image src={Hero.Setting1} width={164} height={164} alt='' />
            </motion.div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
        >

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                className="w-fit"
            >
                <Image src={Hero.Setting2} width={256} height={256} alt='' />
            </motion.div>
        </motion.div>
        <motion.div
            className='w-fit'
            initial={{
                scale: 0,
                opacity: 0
            }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Image src={Hero.Back} width={256} height={256} alt='' />
        </motion.div>
    </div>
}