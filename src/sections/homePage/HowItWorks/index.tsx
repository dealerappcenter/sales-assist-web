import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { AnimatedCard, Card } from 'src/components';
import { useResponsive } from '@hooks/useResponsive';
import {  Icons } from '@src/assets';
import { useProgress } from '@src/hooks/useProgress';
import { useInView } from 'react-intersection-observer'
// 
import { InteractAnimation } from '@src/components/HowitWorksAnimations/Interact';
import { CustomerAnimation } from '@src/components/HowitWorksAnimations/Customer';
import { SalesAnimation } from '@src/components/HowitWorksAnimations/Sales';

export const HowItWorks = () => {
    const { isDesktop, isMobile, isTablet } = useResponsive();
    const currentCard = useRef(0);
    const [ref, inView] = useInView();

    const { progressLeft, startProgress } = useProgress();

    useEffect(() => {
        startProgress()
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
    }, [progressLeft, currentCard]);

    function clickOnCard(card: number) {
        return () => {
            currentCard.current = card

            startProgress();
        }
    }

    return (
        <main ref={ref} className='container  py-6 mx-auto lg:px-12 lg:py-20 overflow-x-auto'>
            <div className='px-4 md-px-0 mb-2'>
                <h1 className="mb-4 text-gray-primary">How it works</h1>
                <h4 className="text-gray-secondary">3 easy steps to unify and streamline every customer interaction throughout your sales process.</h4>
            </div>

            {isDesktop && <div className='flex flex-col py-4 lg:flex-row md:px-4 lg:px-12 md:py-12'>
                <div className='flex flex-col gap-6 w-fit'>
                    {
                        cardData.map((data, i) => {
                            return <motion.div
                                initial={{ x: -500, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: data.delay
                                }}
                                viewport={{ once: true }}
                                key={i}>
                                <AnimatedCard
                                    isActive={currentCard.current === i}
                                    key={i}
                                    progress={progressLeft}
                                    title={data.title}
                                    sub={data.sub}
                                    icon={data.icon}
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

            {(isMobile || isTablet) && <div className='relative  overflow-y-hidden overflow-x-auto flex px-4'>
                {cardData.map((data, index) => {
                    return <Card
                        kind={data.kind as any}
                        key={index}
                        title={data.title}
                        sub={data.sub}
                    />

                })}
            </div>}

        </main>
    )
}

const cardData = [
    {
        title: 'Add sales actions',
        sub: 'Create an Action Panel for your sales team, by choosing from existing Actions or customize your own, from eSignatures to document collocation to e-forms.',
        icon: Icons.AddSales,
        delay: 0,
        kind: 'orange'
    },
    {
        title: 'Interact with Customers',
        sub: 'Streamline the sales process by texting customers Sales Actions, so they can easily and quickly review, complete and submit right from their mobile device.',
        icon: Icons.Interact,
        delay: 0.5,
        kind: 'purple'
    },
    {
        title: 'Complete the Sales',
        sub: 'Close the deal without any heavy lifting, automatically importing everything directly into your CRM and all other existing platforms.',
        icon: Icons.CompleteSales,
        delay: 0.8,
        kind: 'normal'
    },
]