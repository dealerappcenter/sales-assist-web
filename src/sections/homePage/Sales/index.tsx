import { Button } from '@src/components'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pc, Mobile } from '@src/assets';

export const Sales = () => {
    return (
        <section className='py-12 px-4 flex flex-col relative'>
            <div className='container gap-24 py-6 mx-auto flex-col md:flex-row justify-center items-center md:items-start px-4 lg:px-12 lg:py-12 h-full flex'>
                <div className='w-fit '>
                    <h1>Start simplifying your sales</h1>
                    <Button className='px-3 mt-4'>
                        Book Demo
                    </Button>
                </div>
                <div className='md:flex-grow flex-grow-0 relative flex items-center px-24  w-fit'>
                    <div className='absolute z-10 bottom-0 left-0'>
                        <motion.div
                            initial={{ opacity: 0, x: -100, y: 100 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{
                                duration: 1.5,
                                delay: .7
                            }}
                            viewport={{ once: true }}
                        >
                            <Image src={Mobile} alt='app' />
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
                        <Image src={Pc} alt='desktop' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
