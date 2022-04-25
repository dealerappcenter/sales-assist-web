import { useAnimation, } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

import { AnimatedCard, Card } from 'src/components';
import { useResponsive } from '@hooks/useResponsive';
import { LightBull, HandShake, Message } from '@src/assets';
import { useProgress } from '@src/hooks/useProgress';

export const HowItWorks = () => {
    const [ref, inView] = useInView();
    const controls = useAnimation();
    const { isDesktop } = useResponsive();
    const currentCard = useRef(0);

    const { progress, startProgress } = useProgress({
        start: inView,
    });


    useEffect(() => {
        if(progress === 90) {
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
        <main ref={ref} className='px-4 py-6 lg:px-12 lg:py-20 container mx-auto'>
            <h1 className="text-gray-primary mb-4">How it works</h1>
            <h4 className="text-gray-secondary">3 easy steps to unify and streamline every customer interaction throughout your sales process.</h4>
            <div className='flex flex-col lg:flex-row  py-4 md:px-4 lg:px-12 md:py-12'>
                {isDesktop && <div className='w-fit'>
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
                </div>}

                {isDesktop && <div className='flex-grow'>
                    <div className='bg-gray-disabled/30 h-full md:w-[20rem] max-w-md mx-auto rounded-lg'>
                    </div>
                </div>}


                {!isDesktop && (
                    cardData.map((data, i) => {
                        return <Card
                            key={i}
                            title={data.title}
                            sub={data.sub}
                            icon={data.icon}
                        />
                    })
                )}
            </div>
        </main>
    )
}

const cardData = [
    {
        title: 'Add sales actions',
        sub: 'Create an Action Panel for your sales team, by choosing from existing Actions or customize your own, from eSignatures to document collocation to e-forms.',
        icon: Message,
        delay: 0
    },
    {
        title: 'Interact with Customers',
        sub: 'Streamline the sales process by texting customers Sales Actions, so they can easily and quickly review, complete and submit right from their mobile device.',
        icon: LightBull,
        delay: 0.5
    },
    {
        title: 'Complete the Sales',
        sub: 'Close the deal without any heavy lifting, automatically importing everything directly into your CRM and all other existing platforms.',
        icon: HandShake,
        delay: 0.8
    },
]