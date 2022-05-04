import { Button } from '@src/components'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pc, Mobile } from '@src/assets';

export const Sales = () => {
    return (
        <section className='py-12 px-4 flex flex-col relative'>
            <div className='container gap-6 md:gap-24 py-6 mx-auto flex-col md:flex-row justify-center items-center md:items-start px-4 lg:px-12 lg:py-12 h-full flex'>
                <div className='w-fit '>
                    <h1>Start simplifying your sales</h1>
                    <Button className='px-2 mt-4 md:px-3'>
                        Book Demo
                    </Button>
                </div>
                <div className='md:flex-grow flex-grow-0 relative flex items-center justify-center  w-fit'>
                    <div className='relative w-fit'>
                        <div className='absolute z-10 bottom-0 -left-6 md:-left-16 w-20 h-32 md:w-48 md:h-auto'>
                            <motion.div
                                initial={{ opacity: 0, x: -100, y: 100 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{
                                    duration: 1.5,
                                    delay: .7
                                }}
                                viewport={{ once: true }}
                                className="relative h-full w-20 md:w-3/4 "
                            >
                                <Image placeholder='blur' blurDataURL={Mobile} src={Mobile} layout="responsive" alt='app' />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1
                            }}
                            viewport={{ once: true }}
                        >
                            <div className='w-56 h-auto relative md:w-full md:h-full'>
                                <Image src={Pc} alt='desktop' />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
