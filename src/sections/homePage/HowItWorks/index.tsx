import { useAnimation, } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from "react-intersection-observer";

import { AnimatedCard, Card } from 'src/components';
import { useResponsive } from '@hooks/useResponsive';
import { LightBull, HandShake, Message } from '@src/assets';
import { useProgress } from '@src/hooks/useProgress';

export const HowItWorks = () => {
    const [ref, inView] = useInView();
    const controls = useAnimation();
    const { isDesktop, isMobile } = useResponsive();
    const currentCard = useRef(0);


    const { progress, startProgress } = useProgress({
        start: inView,
    });


    useEffect(() => {
        if (progress === 100) {
            startProgress()
            if (currentCard.current >= 2) {
                currentCard.current = 0
            } else {
                currentCard.current = currentCard.current + 1;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progress, currentCard])

    useEffect(() => {
        if (inView && isDesktop) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView, isDesktop]);


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
                            return <AnimatedCard
                                isActive={currentCard.current === i}
                                key={i}
                                controls={controls}
                                progress={progress}
                                title={data.title}
                                sub={data.sub}
                                icon={data.icon}
                                delay={data.delay}
                                onClick={clickOnCard(i)}
                            />
                        })
                    }
                </div>

                <div className='flex-grow'>
                    <div className='bg-gray-disabled/30 h-full md:w-[20rem] max-w-md mx-auto rounded-lg'>
                    </div>
                </div>
            </div>}

            {isMobile && <div className='relative  overflow-y-hidden overflow-x-auto flex px-4'>
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
        icon: Message,
        delay: 0,
        kind: 'orange'
    },
    {
        title: 'Interact with Customers',
        sub: 'Streamline the sales process by texting customers Sales Actions, so they can easily and quickly review, complete and submit right from their mobile device.',
        icon: LightBull,
        delay: 0.5,
        kind: 'purple'
    },
    {
        title: 'Complete the Sales',
        sub: 'Close the deal without any heavy lifting, automatically importing everything directly into your CRM and all other existing platforms.',
        icon: HandShake,
        delay: 0.8,
        kind: 'normal'
    },
]