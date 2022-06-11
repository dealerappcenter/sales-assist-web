import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { AnimatedCard, Card } from 'src/components';
import { useResponsive } from '@hooks/useResponsive';
import { useProgress } from '@src/hooks/useProgress';
import { useInView } from 'react-intersection-observer'
// 
import { InteractAnimation } from '@src/components/HowitWorksAnimations/Interact';
import { CustomerAnimation } from '@src/components/HowitWorksAnimations/Customer';
import { SalesAnimation } from '@src/components/HowitWorksAnimations/Sales';

import { Swiper as TSwiper } from 'swiper';

export const HowItWorks: React.FC<Section<HowItWorksSection>> = ({ id, data }) => {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    const currentCard = useRef(0);
    const [ref, inView] = useInView();

    const { progressLeft, startProgress } = useProgress();

    const currentSwiper = useRef<TSwiper | undefined>(undefined);
    const swipeInstance = currentSwiper.current;

    useEffect(() => {
        startProgress()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    useEffect(() => {
        if (progressLeft === 0 && swipeInstance) {
            startProgress()
            if (currentCard.current >= 2) {
                currentCard.current = 0
                swipeInstance?.slideTo(0)
            } else {
                currentCard.current = currentCard.current + 1;
                swipeInstance?.slideNext()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progressLeft, currentCard, swipeInstance]);

    function clickOnCard(card: number) {
        return () => {
            currentCard.current = card

            startProgress();
        }
    }

    return (
        <main id={id} ref={ref} className='container  py-6 mx-auto lg:px-12 lg:py-20 overflow-x-auto'>
            <div className='px-4 md-px-0 mb-2'>
                <h1 className="mb-4 text-gray-primary">{data.title}</h1>
                <h4 className="text-gray-secondary">{data.desc}</h4>
            </div>

            {isDesktop && <div className='flex flex-col py-4 lg:flex-row md:px-4 lg:px-12 md:py-12'>
                <div className='flex flex-col gap-6 w-fit'>
                    {
                        data.actions.map((k, i) => {
                            return <motion.div
                                initial={{ x: -500, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: k.delay
                                }}
                                viewport={{ once: true }}
                                key={i}>
                                <AnimatedCard
                                    isActive={currentCard.current === i}
                                    key={i}
                                    progress={progressLeft}
                                    title={data.title}
                                    sub={k.desc}
                                    code={k.code}
                                    onClick={clickOnCard(i)}
                                />
                            </motion.div>
                        })
                    }
                </div>

                <div className='flex-grow'>
                    <div className='bg-gray-disabled/20 h-full md:w-[20rem] max-w-md mx-auto rounded-lg flex items-center justify-center p-4'>
                        {inView && currentCard.current === 0 && <InteractAnimation />}
                        {inView && currentCard.current === 1 && <CustomerAnimation />}
                        {inView && currentCard.current === 2 && <SalesAnimation />}
                    </div>
                </div>
            </div>}

            {(isMobile || isTablet) && <div className='relative overflow-y-hidden overflow-x-auto flex px-4'>
                {data.actions.map((k, i) => {
                    return <Card
                        kind={k.kind}
                        key={i}
                        title={k.title}
                        sub={k.desc}
                        className='shadow'
                    >
                        {[
                            <InteractAnimation key='InteractAnimation' />,
                            <CustomerAnimation key='CustomerAnimation' />,
                            <SalesAnimation key='SalesAnimation' />][i]
                        }
                    </Card>
                })}
            </div>}
        </main>
    )
}
