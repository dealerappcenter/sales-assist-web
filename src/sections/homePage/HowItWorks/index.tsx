import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { AnimatedCard, Card } from 'src/components';
import { useResponsive } from '@hooks/useResponsive';
import { useProgress } from '@src/hooks/useProgress';
import { useInView } from 'react-intersection-observer'
// 
import { InteractAnimation } from '@src/components/HowitWorksAnimations/Interact';
import { CustomerAnimation } from '@src/components/HowitWorksAnimations/Customer';
import { SalesAnimation } from '@src/components/HowitWorksAnimations/Sales';
import { Section } from '@components/section';

let timer: NodeJS.Timer;

export const HowItWorks: React.FC<Section<HowItWorksSection>> = ({ id, data }) => {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    const currentCard = useRef(0);
    const [ref, inView] = useInView();
    const [progressLeft, setProgress] = useState(1);

    function startProgress() {
        clearInterval(timer);
    
        let interval = 100;
    
        timer = setInterval(() => {
    
            interval--
    
            if (interval >= 0) {
                setProgress(interval)
                return
            }
    
            clearInterval(timer)
            interval = 100;
        }, 100)
    }
    
    // const { progressLeft, startProgress, stopProgress } = useProgress();
    
    useEffect(() => {
        if (inView) {
            currentCard.current = 0
            startProgress();
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    useEffect(() => {
        if (progressLeft === 0) {
            startProgress()
            if (currentCard.current >= 2) {
                currentCard.current = 0
            } else {
                currentCard.current = currentCard.current + 1;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progressLeft]);

    function clickOnCard(card: number) {
        return () => {
            currentCard.current = card
            startProgress();
        }
    }

    
    return (
        <main id={id} ref={ref} className='section overflow-x-auto bg-white-soft'>
            <Section>
                <div className='px-4 md:px-0 mb-2'>
                    <h1 className="mb-4 text-gray-primary">{data.title}</h1>
                    <h4 className="text-gray-secondary">{data.desc}</h4>
                </div>

                {isDesktop && <div className='flex flex-col py-4 lg:flex-row md:px-4 lg:px-12 md:py-12 gap-12'>
                    <div className='flex flex-col gap-6 w-1/2'>
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
                                        title={k.title}
                                        sub={k.desc}
                                        code={k.code}
                                        onClick={clickOnCard(i)}
                                    />
                                </motion.div>
                            })
                        }
                    </div>

                    <div className='w-1/2'>
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
            </Section>
        </main>
    )
}
