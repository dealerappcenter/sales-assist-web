import { Button } from '@src/components'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pc, Mobile } from '@src/assets';
import { calendlyLink } from '@src/utils/routes';

export const Sales: React.FC<Section<SimplifySection>> = ({ data }) => {
    return (
        <section className='py-12 px-4 flex flex-col relative bg-white-normal h-auto'>
            <div className='container gap-12 md:gap-24 py-6 mx-auto flex-col md:flex-row justify-start items-center md:items-start px-4 lg:px-12 lg:py-12 h-full flex'>
                <div className='w-fit '>
                    <h1>{data.title}</h1>

                    <a href={calendlyLink} target="_blank" rel="noreferrer">
                        <Button className='px-2 mt-4 md:px-3'>
                            {data.cta}
                        </Button>
                    </a>
                </div>
                <div className='md:flex-grow flex-grow-0 relative flex items-center justify-center w-fit'>
                    <div className='relative w-fit'>
                        {/* phone */}
                        <div className='absolute z-10 bottom-0 -left-6 md:-left-16 w-44 h-40 md:w-48 md:h-auto hidden md:block'>
                            <motion.div
                                initial={{ opacity: 0, x: -100, y: 100 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{
                                    duration: 1.5,
                                    delay: .7
                                }}
                                viewport={{ once: true }}
                                className="relative h-full w-32 lg:w-[100%]"
                            >
                                <Image placeholder='blur' blurDataURL={Mobile} src={Mobile} layout="responsive" alt='app' />
                            </motion.div>
                        </div>
                        <div className='md:hidden'>
                            <Image placeholder='blur' blurDataURL={Mobile} src={Mobile} alt='app' />
                        </div>
                        {/* pc */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1
                            }}
                            viewport={{ once: true }}
                        >
                            <div className='w-60 h-auto relative md:w-full md:h-full hidden md:block'>
                                <Image src={Pc} alt='desktop' />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
